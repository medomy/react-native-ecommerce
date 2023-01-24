import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/loginScreen';

const StackNavigation = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName='login' screenOptions={({ navigation }) => {
                return {
                    headerShown: false
                }
            }}>
                <StackNavigation.Screen name='login' component={LoginScreen} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}