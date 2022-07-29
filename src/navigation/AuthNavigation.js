import React from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import SearchID from '../screens/searchID';
import SearchPW from '../screens/searchPW';
import NoResult from '../screens/noResults';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions = {{
                headerShown:false
            }}
            initialRouteName="ID">
            <Stack.Screen name = "ID" component={SearchID} />
            <Stack.Screen name = "PW" component={SearchPW} />
            <Stack.Screen name = "NO" component={NoResult} />
        </Stack.Navigator>
    )
}

export default AuthNavigator