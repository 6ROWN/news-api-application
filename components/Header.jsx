import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "./SearchInput";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const navigation = useNavigation();

	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
	};

	const onClose = () => {
		setIsSearchVisible(false);
	};

	return (
		<View>
			<View className="flex flex-row justify-between">
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Ionicons name="md-menu-outline" size={24} color="black" />
				</TouchableOpacity>

				<View className="flex flex-row space-x-3">
					<TouchableOpacity onPress={toggleSearch}>
						<Ionicons
							name="search-outline"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							name="notifications-outline"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</View>
			{isSearchVisible && <SearchInput onClose={onClose} />}
		</View>
	);
};

export default Header;
