import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Discover from "../screens/Discover";
import Search from "../screens/Search";
import ContactSupport from "../screens/ContactSupport";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
	const menuIcons = (route, focused) => {
		let icon;

		switch (route.name) {
			case "Home":
				icon = (
					<Ionicons
						name={focused ? "md-home-sharp" : "md-home-outline"}
						size={24}
						color={focused ? "black" : "gray"}
					/>
				);
				break;
			case "Discover":
				icon = (
					<MaterialIcons
						name="explore"
						size={24}
						color={focused ? "black" : "gray"}
					/>
				);
				break;
			case "Search":
				icon = (
					<Ionicons
						name="ios-search"
						size={24}
						color={focused ? "black" : "gray"}
					/>
				);
				break;
			case "Contact":
				icon = (
					<Ionicons
						name={focused ? "chatbubbles" : "chatbubbles-outline"}
						size={24}
						color={focused ? "black" : "gray"}
					/>
				);
				break;

			default:
				icon = null;
		}

		return icon;
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				headerShown: false,
				tabBarIcon: ({ focused }) => menuIcons(route, focused),
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Discover" component={Discover} />
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="Contact" component={ContactSupport} />
		</Tab.Navigator>
	);
};

export default BottomTabNav;
