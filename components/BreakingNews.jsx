import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getBreakingNews } from "../services/requests";
import { useWindowDimensions } from "react-native";
import { getHoursDifference } from "../const/getHoursDifference";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BreakingNews = () => {
	const [breakingNews, setBreakingNews] = useState();
	const { width } = useWindowDimensions();
	const navigation = useNavigation();

	useEffect(() => {
		const fetchBreakingNews = async () => {
			try {
				const breakingNewsData = await getBreakingNews();
				setBreakingNews(breakingNewsData.articles);
			} catch (error) {
				console.log("error", error);
			}
		};
		fetchBreakingNews();
	}, []);

	// console.log(breakingNews);

	const renderBreakingNews = ({ item }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate("details", { data: item })}
			style={{ width: width * 0.8, height: 200 }}
			className=" rounded-lg"
		>
			<View className="relative rounded-lg">
				<Image
					source={{ uri: item.urlToImage }}
					className="w-full h-full rounded-lg"
					resizeMode="cover"
				/>
				<View className="absolute w-full h-full bg-black opacity-50 rounded-lg" />
				<View className="absolute bottom-0 p-4">
					<View className="flex flex-row justify-between mb-2">
						<View className="flex flex-row items-center gap-x-2">
							<Text className="text-gray-300 font-semibold">
								{item.source.name}
							</Text>

							<MaterialIcons
								name="verified"
								size={18}
								color="#3057ff"
								className="bg-white"
							/>

							<View className="w-1 h-1 rounded-full bg-gray-300 "></View>
							<Text className="text-gray-300 font-semibold">
								{getHoursDifference(item?.publishedAt)} ago
							</Text>
						</View>
					</View>
					<Text className="text-gray-200 text-lg font-bold">
						{item?.title.length > 60
							? `${item.title.slice(0, 55)}...`
							: item.title.split("-")[0] || "N/A"}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);

	return (
		<View className="">
			<Text className="text-center text-xl font-bold my-4">
				BREAKING NEWS
			</Text>
			<FlatList
				data={breakingNews}
				renderItem={renderBreakingNews}
				horizontal
				contentContainerStyle={{ gap: 20 }}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default BreakingNews;

const styles = StyleSheet.create({});
