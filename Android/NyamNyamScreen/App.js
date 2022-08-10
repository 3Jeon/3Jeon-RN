import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AuthNavigation from './src/AuthNavigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native'

const NyamNyamScreen = () => {

  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default NyamNyamScreen;
