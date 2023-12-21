import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { faqData } from "../const";
import { Ionicons } from "@expo/vector-icons";

const FAQ = () => {
	const [expandedItems, setExpandedItems] = useState(null);

	const toggleItem = (index) =>
		setExpandedItems((prevIndex) => (prevIndex == index ? null : index));

	return (
		<View className="w-full">
			{faqData.map((item, index) => (
				<View key={index} className="my-2 ">
					<TouchableOpacity
						onPress={() => toggleItem(index)}
						className=" pb-2 relative"
					>
						<Text className="font-bold">{item.question}</Text>
						<View className="absolute right-0">
							<Ionicons
								name={
									expandedItems === index
										? "chevron-up"
										: "chevron-down"
								}
								size={18}
								color="black"
							/>
						</View>
					</TouchableOpacity>
					{expandedItems === index && (
						<View className="bg-gray-100 rounded p-2">
							<Text className="text-gray-600 text-base">
								{item?.answer}
							</Text>
						</View>
					)}
					<View
						className={"border-b border-gray-200 w-full my-2"}
					></View>
				</View>
			))}
		</View>
	);
};

export default FAQ;
