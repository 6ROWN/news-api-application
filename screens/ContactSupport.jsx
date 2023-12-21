import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import {
	AntDesign,
	FontAwesome,
	MaterialIcons,
	Ionicons,
} from "@expo/vector-icons";
import FAQ from "../components/FAQ";

const ContactSupport = ({ navigation }) => {
	return (
		<ScrollView className="bg-gray-200 flex-1">
			<View className="px-4 py-10">
				<View className="flex flex-row space-x-6 items-center mb-4">
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="arrowleft" size={24} color="black" />
					</TouchableOpacity>

					<Text className="uppercase font-medium text-lg">
						Contact Support
					</Text>
				</View>
				<View className="bg-gray-50 flex flex-row items-center p-4 rounded-md space-x-6 shadow-md ">
					<View className="p-3 rounded-full bg-blue-100 ">
						<FontAwesome name="phone" size={24} color="#3057ff" />
					</View>
					<View className="flex space-y-1">
						<Text className="text-gray-500 text-base font-medium">
							Our 24/7 Customer service
						</Text>

						<Text className="text-base font-bold text-[#3057ff]">
							+233(0)554943202
						</Text>
					</View>
				</View>
				<View className="bg-gray-50 flex flex-row items-center p-4 rounded-md space-x-6 shadow-md mt-6">
					<View className="p-3 rounded-full bg-blue-100 ">
						<MaterialIcons name="email" size={24} color="#3057ff" />
					</View>
					<View className="flex space-y-1">
						<Text className="text-gray-500 text-base font-medium">
							Write us at
						</Text>

						<Text className="text-base font-bold text-[#3057ff]">
							gohohodanni@support.com
						</Text>
					</View>
				</View>
				<View className="mt-6">
					<Text className="mb-4 text-base font-semibold text-gray-500">
						Frequently Asked Questions
					</Text>
					<View className="bg-gray-50 flex flex-row items-center p-4 rounded-md space-x-6 shadow-md ">
						<FAQ />
					</View>
				</View>
				<View className="mt-6">
					<Text className="mb-4 text-base font-semibold text-gray-500">
						Privacy Policy
					</Text>
					<View className="bg-gray-50 flex flex-row items-center justify-between p-4 rounded-md shadow-md ">
						<View className="flex flex-row items-center space-x-6">
							<View className="p-3 rounded-full bg-blue-100 ">
								<Ionicons
									name="document-text"
									size={24}
									color="#3057ff"
								/>
							</View>
							<View className="flex space-y-1">
								<Text className=" text-base font-bold">
									Privacy Policy
								</Text>

								<Text className="text-base text-gray-400">
									Effective Jan, 2024
								</Text>
							</View>
						</View>
						<View>
							<Ionicons
								name="chevron-forward"
								size={24}
								color="black"
							/>
						</View>
					</View>
				</View>
				<View className="mt-6">
					<Text className="mb-4 text-base font-semibold text-gray-500">
						Terms and Conditions
					</Text>
					<View className="bg-gray-50 flex flex-row items-center justify-between p-4 rounded-md shadow-md ">
						<View className="flex flex-row items-center space-x-6">
							<View className="p-3 rounded-full bg-blue-100 ">
								<Ionicons
									name="document-text"
									size={24}
									color="#3057ff"
								/>
							</View>
							<View className="flex space-y-1">
								<Text className=" text-base font-bold">
									Terms and Conditions
								</Text>

								<Text className="text-base text-gray-400">
									Effective Jan, 2024
								</Text>
							</View>
						</View>
						<View>
							<Ionicons
								name="chevron-forward"
								size={24}
								color="black"
							/>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default ContactSupport;
