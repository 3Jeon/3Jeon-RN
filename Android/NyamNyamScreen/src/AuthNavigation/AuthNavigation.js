import React from 'react';
import {View} from 'react-native'

import LoginScreen from '../screens/LoginScreen';
import SignupEndScreen from '../screens/SignupEndScreen';
import SignupScreen from '../screens/SignupScreen';
import FindIDScreen from '../screens/FindIDScreen';
import FindPWScreen from '../screens/FindPWScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
         initialRouteName = "Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignupEnd" component={SignupEndScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="FindID" component={FindIDScreen} />
            <Stack.Screen name="FIndPW" component={FindPWScreen} />
         </Stack.Navigator>
    );
}

export default AuthNavigation