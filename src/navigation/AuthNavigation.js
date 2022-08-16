import React from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupEndScreen from '../screens/SignupEndScreen';
import MainScreen from '../screens/mainScreen'
import FirstScreen from '../screens/FirstMainScreen'
import PickMenu from '../screens/PickMenu';
import PickStore from '../screens/PickStore';
import PickMenuNext from '../screens/PickMenuNext';
import Search from '../screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions = {{
                headerShown:false
            }}
            initialRouteName = "FIRST">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignupEnd" component={SignupEndScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name = "MAIN" component={MainScreen} />
            <Stack.Screen name = "FIRST" component={FirstScreen} />
            <Stack.Screen name = "PickMenu" component={PickMenu} />
            <Stack.Screen name = "PickStore" component={PickStore} />
            <Stack.Screen name = "PickMenuNext" component={PickMenuNext} />
            <Stack.Screen name = "SEARCH" component={Search} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
