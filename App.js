import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./screens/Onboard";
import Home from "./screens/Home";
import BottomTabNav from "./navigation/BottomTabNav";
import NewsDetails from "./screens/NewsDetails";
import DrawerNav from "./navigation/DrawerNav";
import ErrorScreen from "./screens/ErrorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="onboard" component={Onboard} />
				<Stack.Screen name="home" component={DrawerNav} />
				<Stack.Screen name="details" component={NewsDetails} />
				<Stack.Screen name="error" component={ErrorScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
