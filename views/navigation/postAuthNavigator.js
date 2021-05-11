import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/postAuthScreens";

const PostAuthNavigator = () => {
  const { Navigator, Screen} = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
      />
    </Navigator> 
  )
}

export default PostAuthNavigator;

