import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import { discoverHeadlinesBasedOnCategories } from "../services/requests";
import LoadingIndicator from "../components/LoadingIndicator";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Discover = ({ navigation }) => {
	const [headlines, setHeadlines] = useState();
	const [activeCategory, setActiveCategory] = useState("general");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useLayoutEffect(() => {
		const fetchNewsHeadlines = async () => {
			try {
				const newsHeadlinesData =
					await discoverHeadlinesBasedOnCategories(activeCategory);
				setHeadlines(newsHeadlinesData.articles);
				setError(null);
			} catch (error) {
				setError("Failed to fetch news headlines");
			} finally {
				setIsLoading(false);
			}
		};
		fetchNewsHeadlines();
	}, [activeCategory]);

	const handleCategorySelect = async (category) => {
		setActiveCategory(category);
	};

	const renderHeadlines = ({ item }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate("details", { data: item })}
			className="my-4 bg-gray-200 p-2 rounded-md"
		>
			<View className="flex flex-row space-x-4">
				<Image
					source={{ uri: item.urlToImage }}
					className="w-28 h-24 rounded-md"
					resizeMode="cover"
				/>
				<View className="flex justify-between py-2">
					<View>
						<Text className="text-xs">{item.source.name}</Text>
					</View>
					<Text className="font-semibold text-lg">{`${item.title.slice(
						0,
						30
					)}...`}</Text>
					<View className="flex flex-row space-x-2 items-center">
						<View className="flex flex-row space-x-2 items-center">
							<MaterialIcons
								name="account-circle"
								size={18}
								color="gray"
							/>
							<Text>
								{item.author
									? item.author.split(",")[0].trim()
									: item.source.name}
							</Text>
						</View>
						<View className="flex flex-row space-x-2 items-center">
							<Ionicons
								name="time-sharp"
								size={18}
								color="gray"
							/>
							<Text>
								{`${new Date(item.publishedAt).getDate()} -${
									new Date(item.publishedAt).getMonth() + 1
								}-${new Date(item.publishedAt).getFullYear()} `}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (error) {
		navigation.navigate("error", { errorMessage: error });
		return null;
	}

	return (
		<View className="py-8 px-4">
			<Header />
			<CategoryList onSelectCategory={handleCategorySelect} />

			<FlatList
				data={headlines}
				renderItem={renderHeadlines}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Discover;

const styles = StyleSheet.create({});
