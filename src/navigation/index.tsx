import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/loginScreen';
import MainTabBar from './bottomTabBar/bottomTabBar';
import { useSignedUser } from '../hooks/useSignedUser';
import LoadingMainScreenMyScreen from '../screens/loadingScreen';
import DetailsScreen from '../screens/details';
import { COLORS } from '../constants';
import { useIsDarkMode } from '../hooks/useIsDarkMode';
import CartScreen from '../screens/cart';

const StackNavigation = createNativeStackNavigator();
export default function Navigation() {
    const signedUser = useSignedUser();
    const isDark = useIsDarkMode();
    const myThemeLight: Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: COLORS.white,
            text: COLORS.black
        }
    }
    const myThemeDark: Theme = {
        ...DarkTheme,
        colors: {
            ...DefaultTheme.colors,
            background: COLORS.primary,
            text: COLORS.white,
            //primary: COLORS.danger
        }
    }
    return (
        <NavigationContainer theme={isDark ? myThemeDark : myThemeLight}>
            <StackNavigation.Navigator initialRouteName={'_loading'} screenOptions={({ navigation }) => {
                return {
                    headerShown: false,
                }
            }}>
                <StackNavigation.Screen name='_loading' component={LoadingMainScreenMyScreen} />
                <StackNavigation.Screen name='login' component={LoginScreen} />
                <StackNavigation.Screen name='root' component={MainTabBar} options={({ navigation, route }) => ({
                    contentStyle: {
                        backgroundColor: COLORS.white
                    }
                })} />
                <StackNavigation.Screen name='details' component={DetailsScreen} />
                <StackNavigation.Screen name='cart' component={CartScreen} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}