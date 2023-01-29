import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import { IconButton } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/AntDesign'
const PromoCodeInput = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter promo code for discount '
                underlineColorAndroid={COLORS.transparent} />
            <IconButton icon={<Icon name='right' size={0.8 * SIZES.iconSize2} color={COLORS.darkgray} />} style={styles.trailingIcon} />
        </KeyboardAvoidingView>
    )
}

export default PromoCodeInput

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin2,
        position: "relative",
    },
    input: {
        paddingVertical: SIZES.padding2,
        paddingHorizontal: SIZES.padding,
        width: SIZES.fullWidth,
        borderRadius: SIZES.radius2,
        borderColor: COLORS.darkgray,
        borderWidth: 1,
        color: COLORS.darkgray
    },
    trailingIcon: {
        position: "absolute",
        right: SIZES.padding,
        top: 0.4 * SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100
    }
})