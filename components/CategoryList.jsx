import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { newsCategories } from "../const";

const CategoryList = ({ onSelectCategory }) => {
	const [isActive, setIsActive] = useState(1);

	const renderCategory = ({ item }) => (
		<TouchableOpacity
			onPress={() => {
				setIsActive(item.id), onSelectCategory(item.name.toLowerCase());
			}}
			className={`mr-2  p-2 rounded ${
				isActive == item.id ? "bg-[#3057ff]" : "bg-gray-200"
			} `}
		>
			<Text
				className={`text-base ${
					isActive === item.id ? "text-gray-200" : ""
				}`}
			>
				{item?.name}
			</Text>
		</TouchableOpacity>
	);
	return (
		<View className="pt-4">
			<FlatList
				data={newsCategories}
				renderItem={renderCategory}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default CategoryList;
