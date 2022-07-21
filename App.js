import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchID from './android/searchID';
import SearchPW from './android/searchPW';
import NoResults from './android/noResults';

const Stack = createStackNavigator();

class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'ID' component={SearchID}/>
          <Stack.Screen name = 'PW' component={SearchPW}/>
          <Stack.Screen name = 'NO' component={NoResults}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;