import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const ErrorScreen = ({ route, navigation }) => {
	const { errorMessage } = route.params;
	return (
		<View className="flex justify-center items-center h-screen">
			<View className="">
				<Feather name="alert-triangle" size={30} color={"#e50914 "} />
			</View>
			<Text className="my-6 text-lg font-bold ">{errorMessage} </Text>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				className="py-4 px-8 bg-[#3057ff] rounded-md"
			>
				<Text className="font-medium">RETRY</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ErrorScreen;

const styles = StyleSheet.create({});
