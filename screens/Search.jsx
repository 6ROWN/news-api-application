import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";

const Search = ({ route, navigation }) => {
	const results = route.params?.results || [];

	const renderSearchResults = ({ item }) => (
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

	const renderNoResults = () => (
		<View className="flex h-screen items-center justify-center">
			<Text className="text-lg font-medium">No search results found</Text>
		</View>
	);

	return (
		<View className="px-4 py-8">
			<Header />

			{results.length > 0 ? (
				<FlatList
					data={results}
					renderItem={renderSearchResults}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				renderNoResults()
			)}
		</View>
	);
};

export default Search;
