import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'

interface props {
    title: string,
    subTitle: string
}
const InfoRowProfile = ({ title, subTitle }: props) => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

export default InfoRowProfile

const styles = StyleSheet.create({
    row: {
        marginVertical: SIZES.margin,
        paddingHorizontal: 1.5 * SIZES.padding2,
        width: SIZES.fullWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding,
        borderBottomColor: COLORS.socendry,
        borderBottomWidth: 1
    },
    title: {
        ...FONTS.h3,
        fontWeight: "bold",
    },
    subTitle: {
        ...FONTS.body3,
        fontWeight: "700"
    }
})