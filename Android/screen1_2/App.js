import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AuthNavigation from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Screen1_2 = () => {
  return (
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default Screen1_2;