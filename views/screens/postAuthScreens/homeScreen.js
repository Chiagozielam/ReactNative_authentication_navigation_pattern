import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthContext from '../../../context/authContext/AuthContext'


const HomeScreen = () => {

  const { userSignout } = useContext(AuthContext)
  
  const onLogout = () => {
    userSignout()
  }
  return (
    <View style={styles.container}>
      <Text>Now you're authenticated! Welcome!</Text>
      <Button title="LOG OUT" onPress={onLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
