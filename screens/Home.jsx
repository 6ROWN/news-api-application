import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import TopHeadlines from "../components/TopHeadlines";
import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";

const Home = () => {
	const data = [{ key: "breaking-news" }, { key: "top-headlines" }];

	const renderItem = ({ item }) => {
		switch (item.key) {
			case "breaking-news":
				return <BreakingNews />;
			case "top-headlines":
				return <TopHeadlines />;
			default:
				return null;
		}
	};

	return (
		<View className="flex py-8 px-4">
			<Header />

			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.key}
				showsVerticalScrollIndicator={false}
			/>

			<StatusBar hidden={false} style="dark" />
		</View>
	);
};

export default Home;
