import {
	View,
	Text,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Share,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { getHoursDifference } from "../const/getHoursDifference";
import * as WebBrowser from "expo-web-browser";
import * as Sharing from "expo-sharing";

const NewsDetails = ({ navigation, route }) => {
	const { data } = route.params;

	const shareNews = () => {
		Share.share({
			message: data.title,
			url: data.url,
			title: data.title,
		});
	};

	return (
		<ScrollView className="">
			<ImageBackground
				className="h-96 w-full"
				source={{ uri: data.urlToImage }}
				resizeMode="cover"
			>
				<View className="px-4 py-6 flex-1 justify-between">
					<View className="  flex flex-row justify-between items-center">
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							className="bg-gray-400 backdrop-filter backdrop-blur-lg shadow-2xl rounded-full p-2"
						>
							<Ionicons
								name="chevron-back-outline"
								size={24}
								color="#fefefefe"
							/>
						</TouchableOpacity>
						<View className="flex flex-row items-center space-x-2">
							<TouchableOpacity className="bg-gray-400 backdrop-filter backdrop-blur-lg shadow-2xl rounded-full p-2">
								<Ionicons
									name="bookmark-outline"
									size={24}
									color="#fefefe"
								/>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-400 backdrop-filter backdrop-blur-lg shadow-2xl rounded-full p-2">
								<MaterialIcons
									name="more-horiz"
									size={24}
									color="#fefefe"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View className="flex py-6">
						<Text className="text-xl text-white font-semibold mb-3">
							{data.title}
						</Text>
						<View className="flex flex-row items-center space-x-2">
							<Text className="text-white">Trending</Text>
							<View className="w-1 h-1 rounded-full bg-gray-300 "></View>
							<Text className="text-gray-300 font-semibold">
								{getHoursDifference(data?.publishedAt)} ago
							</Text>
						</View>
					</View>
				</View>
			</ImageBackground>
			<View className="bg-gray-200 w-full h-full -mt-6 rounded-t-[25px] px-4 py-10">
				<View className="flex flex-row items-center space-x-2">
					<Text className="font-bold text-xl text-gray-600">
						{data.source.name}
					</Text>
					<MaterialIcons name="verified" size={18} color="#3057ff" />
				</View>

				<View className="my-4">
					<Text className="text-center mb-4 font-bold text-2xl ">
						{data.title}
					</Text>
					<Text className="text-lg text-gray-700 leading-[3rem] mb-4">
						{data?.content?.replace(/\[\+\d+ chars\]/, "")}
					</Text>
					{data.author && (
						<View className="flex flex-row space-x-2 items-center">
							<MaterialIcons
								name="account-circle"
								size={18}
								color="gray"
							/>
							<Text className="text-base text-gray-700">
								{data.author}
							</Text>
						</View>
					)}
				</View>
				<View className="flex flex-row gap-4 items-center">
					<TouchableOpacity
						onPress={() => WebBrowser.openBrowserAsync(data.url)}
						className="bg-[#3057ff] p-3 rounded-lg flex-1"
					>
						<Text className="text-lg text-gray-200 font-semibold text-center">
							READ MORE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={shareNews}
						className="bg-[#3057ff] p-3 rounded-lg "
					>
						<Ionicons
							name="share-social-sharp"
							size={24}
							color="#fefefe"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default NewsDetails;
