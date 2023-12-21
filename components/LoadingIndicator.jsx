import { ActivityIndicator, View } from "react-native";
import React from "react";

const LoadingIndicator = () => {
	return (
		<View className="flex h-screen justify-center items-center">
			<ActivityIndicator size={"large"} color={"#3057ff"} />
		</View>
	);
};

export default LoadingIndicator;
