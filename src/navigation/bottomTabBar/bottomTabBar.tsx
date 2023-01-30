import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useIsDarkMode } from '../../hooks/useIsDarkMode';
import WishListScreen from '../../screens/wishList';
import Home from '../../screens/home';
import CartScreen from '../../screens/cart';
import { COLORS, SIZES } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProfileScreen from '../../screens/profile';

const TabBar = createBottomTabNavigator();
const renderBottomBtn = ({ children, onPress }: BottomTabBarButtonProps) => (<TouchableOpacity style={styles.btmBtn} onPress={onPress}>
    {children}
</TouchableOpacity>)
const MainTabBar = () => {
    const isDark = useIsDarkMode();
    const numOfItemsInCart = useSelector((state: RootState) => state.cart.totalItems);
    return (
        <TabBar.Navigator initialRouteName='Home' screenOptions={({ route }) => {
            return {
                headerShown: false,
                tabBarStyle: styles.bottomTabBarCustomStyle,
                tabBarActiveTintColor: COLORS.tintColor,
                tabBarInactiveTintColor: COLORS.white,
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
            <TabBar.Screen name='profile' component={ProfileScreen} options={({ navigation }) => (
                {
                    tabBarIcon: ({ focused, color, size }) => (<Icon name='user' size={SIZES.iconSize} color={color} />),
                    tabBarButton: renderBottomBtn,
                    // tabBarBadge: numOfItemsInCart,
                    // tabBarBadgeStyle: styles.badge
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
        height: 25,
        bottom: 30,
        alignSelf: "center"
    },
    badge: {
        backgroundColor: COLORS.tintColor,
        top: -10,
        width: 20,
        position: "relative",
        height: 20,
        borderRadius: 10,
        left: -30,
        justifyContent: "center",
        alignItems: "center"
    }
})