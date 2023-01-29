import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import AnotherIcon from 'react-native-vector-icons/Feather'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'
import { COLORS, SIZES } from '../../../constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useNavigation } from '@react-navigation/native'

export default function HomeHeader() {
    const isDark = useIsDarkMode();
    const num = useSelector((state: RootState) => state.cart.totalItems);
    const navigation = useNavigation();
    const navigateToCart = () => {
        navigation.navigate("cart" as never);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name='menu-outline' color={isDark ? COLORS.white : COLORS.black} size={2 * SIZES.iconSize2} />
            </TouchableOpacity>
            <View style={styles.otherIcons}>
                <TouchableOpacity style={styles.iconMargin}>
                    <AnotherIcon name='search' color={isDark ? COLORS.white : COLORS.black} size={1.5 * SIZES.iconSize2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconMargin} onPress={navigateToCart}>
                    <AnotherIcon name='shopping-bag' color={isDark ? COLORS.white : COLORS.black} size={1.5 * SIZES.iconSize2} />
                    <View style={styles.badge}>
                        <Text style={styles.numTxt}>{num}</Text>
                    </View>
                </TouchableOpacity >
            </View>
        </View>
    )
}