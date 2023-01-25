import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/loginScreen';
import MainTabBar from './bottomTabBar/bottomTabBar';
import { useSignedUser } from '../hooks/useSignedUser';
import LoadingMainScreenMyScreen from '../screens/loadingScreen';

const StackNavigation = createNativeStackNavigator();
export default function Navigation() {
    const signedUser = useSignedUser();
    return (
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName={'_loading'} screenOptions={({ navigation }) => {
                return {
                    headerShown: false
                }
            }}>
                <StackNavigation.Screen name='_loading' component={LoadingMainScreenMyScreen} />
                <StackNavigation.Screen name='login' component={LoginScreen} />
                <StackNavigation.Screen name='root' component={MainTabBar} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}