import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/preAuthScreens";

const PreAuthNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName="Welcome">
			<Screen
				name="Welcome"
				component={WelcomeScreen}
			/>
		</Navigator>
	)
}

export default PreAuthNavigator;
