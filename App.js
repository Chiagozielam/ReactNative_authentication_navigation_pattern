import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './views/navigation/AppNavigator';
import AuthState from './context/authContext/AuthState';

export default function App() {
  return (
    <AuthState>
      <AppNavigator />
    </AuthState>
  );
}
