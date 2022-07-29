import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './src/navigation/AuthNavigation';

const App = () => {
  return(
  <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>
  )
}

export default App;