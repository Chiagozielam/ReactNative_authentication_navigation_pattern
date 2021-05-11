import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const AuthState = (props) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      checkAuthenticationStatus()
    }, [])

    const checkAuthenticationStatus = async () => {
      try {
        const returnedToken = await AsyncStorage.getItem('user-token');
        setUserToken(returnedToken);
      } catch(err){
        console.warn(`Here's the error that occured while retrieving token: ${err}`) 
      }
      setIsLoading(false)
    }

    const onAuthentication = async() => {
      const USER_TOKEN = "drix1123q2"
      await AsyncStorage.setItem('user-token', USER_TOKEN);
      setUserToken(USER_TOKEN);
      console.warn("user has been authenticated!")
    }

    const userSignout = async() => {
      await AsyncStorage.removeItem('user-token');
      setUserToken(null);
    }

    return (
      <AuthContext.Provider
        value={{
          onAuthentication,
          userToken,
          isLoading,
          userSignout,
        }}
      >
        {props.children}
      </AuthContext.Provider>
  )
}

export default AuthState;
