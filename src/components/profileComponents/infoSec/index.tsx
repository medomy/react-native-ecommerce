import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

interface props {
    userName: string
}
const ProfileInfoSec = ({ userName }: props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.userNameTxt}>{userName}</Text>
        </View>
    )
}

export default ProfileInfoSec

const styles = StyleSheet.create({
    container: {
        width : SIZES.fullWidth,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.margin2
    },
    userNameTxt: {
        ...FONTS.h2,
        fontWeight: "800",
        color: COLORS.black
    }
})