import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet,View,Text,Button, Modal,TouchableOpacity} from 'react-native';
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








