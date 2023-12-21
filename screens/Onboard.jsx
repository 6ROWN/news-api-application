import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Onboard = ({ navigation }) => {
	return (
		<View className="flex-1 justify-center items-center ">
			<Image
				source={require("../assets/journalist-holding-microphone.jpg")}
				alt="journalist-holding-microphone"
				className="absolute w-full h-full"
			/>

			<View className="absolute w-full h-full bg-black opacity-40" />
			<View className="flex-1 justify-end my-12 items-center space-y-12 w-full">
				<View>
					<Text className="text-white text-2xl font-bold mb-4">
						STAY INFORMED. STAY CONNECTED
					</Text>
					<Text className=" text-center text-lg text-gray-200">
						News from around the world for you.
					</Text>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("home")}
					className="bg-[#3057ff] w-[80%] p-4 rounded-lg"
				>
					<Text className="text-gray-200 text-center font-semibold text-lg">
						GET STARTED
					</Text>
				</TouchableOpacity>
			</View>

			<StatusBar hidden />
		</View>
	);
};

export default Onboard;
