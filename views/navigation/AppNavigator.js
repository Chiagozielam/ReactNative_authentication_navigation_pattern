import React, { useState, useEffect, useContext } from "react";
import PreAuthNavigator from "./preAuthNavigator";
import PostAuthNavigator from "./postAuthNavigator";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../../context/authContext/AuthContext";
import TransitionScreen from "../screens/transition";

const AppNavigator = () => {
    const { Navigator, Screen } = createStackNavigator();
    const authContext = useContext(AuthContext);
    const { userToken, isLoading } = authContext;

    if(isLoading) {
      return <TransitionScreen />
    }

    return (
    <NavigationContainer>
      <Navigator>
        { 
          userToken == null ? (
            <Screen
              name="PreAuth"
              component={PreAuthNavigator}
              options={{ header: () => null }}
            />
          ) : (
            <Screen 
              name="PostAuth"
              component={PostAuthNavigator}
              options={{ header: () => null }}
            />
          )
        }
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
