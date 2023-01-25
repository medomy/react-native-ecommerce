import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useIsDarkMode } from '../../hooks/useIsDarkMode';
import WishListScreen from '../../screens/wishList';
import Home from '../../screens/home';
import CartScreen from '../../screens/cart';
import { COLORS, SIZES } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = createBottomTabNavigator();
const renderBottomBtn = ({ children , onPress }: BottomTabBarButtonProps) => (<TouchableOpacity style={styles.btmBtn} onPress={onPress}>
    {children}
</TouchableOpacity>)
const MainTabBar = () => {
    const isDark = useIsDarkMode();
    return (
        <TabBar.Navigator initialRouteName='Home' screenOptions={({ route }) => {
            return {
                headerShown: false,
                tabBarStyle: styles.bottomTabBarCustomStyle,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.tintColor,
                tabBarShowLabel: false
            }
        }}>
            <TabBar.Screen name='WishList' component={WishListScreen} options={({ navigation }) => (
                {
                    tabBarIcon: ({ focused, color, size }) => (<Icon name='heart' size={SIZES.iconSize} color={color} />),
                    tabBarButton: renderBottomBtn
                }
            )} />
            <TabBar.Screen name='Home' component={Home} options={({ navigation }) => (
                {
                    tabBarIcon: ({ focused, color, size }) => (<Icon name='home' size={SIZES.iconSize} color={color} />),
                    tabBarButton: renderBottomBtn
                }
            )} />
            <TabBar.Screen name='Cart' component={CartScreen} options={({ navigation }) => (
                {
                    tabBarIcon: ({ focused, color, size }) => (<Icon name='shopping-cart' size={SIZES.iconSize} color={color} />),
                    tabBarButton: renderBottomBtn
                }
            )} />
        </TabBar.Navigator>
    )
}

export default MainTabBar

const styles = StyleSheet.create({
    bottomTabBarCustomStyle: {
        borderRadius: SIZES.radius2,
        padding: 5 * SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: 0.9 * SIZES.fullScreenWidth,
        right: 0.05 * SIZES.fullScreenWidth,
        left: 0.05 * SIZES.fullScreenWidth,
        bottom: 30,
        backgroundColor: COLORS.primary,
        elevation: 0
    },
    btmBtn: {
        flex: 1,
        backgroundColor: COLORS.transparent,
        height : 25,
        bottom: 30,
        alignSelf : "center"
    }
})