import React from 'react';
import {View} from 'react-native'

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupEndScreen from '../screens/SignupEndScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
         initialRouteName = "Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SignupEnd" component={SignupEndScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation