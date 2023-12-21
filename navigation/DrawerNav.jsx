import { Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNav from "./BottomTabNav";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Discover from "../screens/Discover";
import Search from "../screens/Search";
import ContactSupport from "../screens/ContactSupport";

const Drawer = createDrawerNavigator();

export const drawerIcons = (route, focused) => {
	let icon;

	switch (route.name) {
		case "homescreen":
			icon = (
				<Ionicons
					name={focused ? "md-home-sharp" : "md-home-outline"}
					size={24}
					color={focused ? "#fefefe" : "#9ca3af"}
				/>
			);
			break;
		case "Discover":
			icon = (
				<MaterialIcons
					name="explore"
					size={24}
					color={focused ? "#fefefe" : "#9ca3af"}
				/>
			);
			break;
		case "Search":
			icon = (
				<Ionicons
					name="ios-search"
					size={24}
					color={focused ? "#fefefe" : "#9ca3af"}
				/>
			);
			break;
		case "Contact":
			icon = (
				<Ionicons
					name={focused ? "chatbubbles" : "chatbubbles-outline"}
					size={24}
					color={focused ? "#fefefe" : "#9ca3af"}
				/>
			);
			break;

		case "Settings":
			icon = (
				<Ionicons
					name={focused ? "settings" : "settings-outline"}
					size={24}
					color={focused ? "#fefefe" : "#9ca3af"}
				/>
			);
			break;

		default:
			icon = null;
	}

	return icon;
};

const DrawerNav = () => {
	return (
		<Drawer.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				drawerType: "slide",
				drawerStyle: {
					backgroundColor: "#3057ff",
				},
				drawerLabelStyle: {
					fontSize: 18,
					fontWeight: "500",
					color: "#fff",
				},
				drawerItemStyle: {
					marginBottom: 25,
				},
				drawerContentContainerStyle: { marginTop: 50 },
				drawerActiveTintColor: "#fefefe",

				drawerIcon: ({ focused }) => drawerIcons(route, focused),
			})}
		>
			<Drawer.Screen
				options={{ drawerLabel: "Top Headlines" }}
				name="homescreen"
				component={BottomTabNav}
			/>
			<Drawer.Screen
				options={{ drawerLabel: "Discover News" }}
				name="Discover"
				component={Discover}
			/>
			<Drawer.Screen
				options={{ drawerLabel: "Search News" }}
				name="Search"
				component={Search}
			/>
			<Drawer.Screen
				options={{ drawerLabel: "Contact Support" }}
				name="Contact"
				component={ContactSupport}
			/>
			<Drawer.Screen
				options={{ drawerLabel: "Settings" }}
				name="Settings"
				component={ContactSupport}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNav;
