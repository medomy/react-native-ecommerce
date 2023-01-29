import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const CartHeader = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Icon name='arrow-back' size={SIZES.iconSize} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.title}>My Cart</Text>
        </View>
    )
}

export default CartHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.transparent,
        paddingHorizontal: 1.5 * SIZES.padding2,
        alignItems: "center",
        flexDirection: "row",
        marginVertical : SIZES.margin2
    },
    title: {
        textAlign:"center",
        ...FONTS.h3,
        color: COLORS.darkgray,
        flex : 1
    }
})