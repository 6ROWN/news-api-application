import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getSearchNews } from "../services/requests";
import { useNavigation } from "@react-navigation/native";

const SearchInput = ({ onClose }) => {
	const [query, setQuery] = useState("");
	const navigation = useNavigation();

	const handleSearch = async () => {
		if (query !== "" && query.length > 2) {
			try {
				const searchData = await getSearchNews(query);
				navigation.navigate("Search", {
					results: searchData.articles,
				});
			} catch (error) {
				console.error("Error fetching search results:", error);
			}
		}
	};

	return (
		<View className="my-4 flex flex-row items-center space-x-4">
			<View className="flex-1">
				<TextInput
					className="border rounded-md py-3 px-4 "
					placeholder="search..."
					value={query}
					onChangeText={setQuery}
					clearButtonMode="always"
					onSubmitEditing={handleSearch}
				/>
			</View>

			<TouchableOpacity onPress={onClose}>
				<Ionicons name="close-outline" size={24} color="black" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
