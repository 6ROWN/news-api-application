import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { getTopHeadlines } from "../services/requests";
import { MaterialIcons } from "@expo/vector-icons";
import { getHoursDifference } from "../const/getHoursDifference";
import LoadingIndicator from "./LoadingIndicator";
import { useNavigation } from "@react-navigation/native";

const TopHeadlines = () => {
	const [headlines, setHeadlines] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigation = useNavigation();

	useEffect(() => {
		const fetchHeadlines = async () => {
			try {
				const headlinesData = await getTopHeadlines();
				setHeadlines(headlinesData.articles);
				setError(null);
			} catch (error) {
				setError("Failed to fetch headlines");
			} finally {
				setLoading(false);
			}
		};

		fetchHeadlines();
	}, []);

	const renderHeadlines = ({ item }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate("details", { data: item })}
			className="my-4 p-2 bg-gray-200 rounded"
		>
			<View className="">
				<View className="w-full h-40 rounded">
					<Image
						source={{ uri: item.urlToImage }}
						className="w-full h-full rounded-md"
						resizeMode="cover"
					/>
				</View>

				<View className="my-3">
					<Text className="text-lg font-medium">{item?.title}</Text>
				</View>
				<View className="flex flex-row justify-between">
					<View className="flex flex-row items-center gap-x-2">
						<Text className="text-gray-500">
							{item.source.name}
						</Text>
						<View className="w-1 h-1 rounded-full bg-gray-500"></View>
						<Text className="text-gray-500">
							{getHoursDifference(item?.publishedAt)}
						</Text>
					</View>
					<MaterialIcons
						name="more-horiz"
						size={24}
						color={"#9ca3af"}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);

	if (loading) {
		return <LoadingIndicator />;
	}

	if (error) {
		navigation.navigate("error", {
			errorMessage: error,
		});
		return null;
	}

	return (
		<View>
			<Text className="text-xl font-bold mt-4 text-center">
				TOP HEADLINES
			</Text>

			<FlatList
				data={headlines}
				renderItem={renderHeadlines}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default TopHeadlines;
