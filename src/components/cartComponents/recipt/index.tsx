import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const ReciptComponent = () => {
    const total = useSelector((state: RootState) => state.cart.totalPrice);
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.entity}>Sub Total</Text>
                <Text style={styles.val}>$ {Math.floor(total)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.entity}>shipping</Text>
                <Text style={styles.val}>$ {10}</Text>
            </View>
            <View style={styles.dashedLine}></View>
            <View style={styles.row}>
                <Text style={styles.entity}>Total</Text>
                <Text style={styles.val}>$ {Math.floor(total) + 10}</Text>
            </View>
        </View>
    )
}

export default ReciptComponent

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin2,
        flex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.fullWidth,
        marginVertical: SIZES.margin
    },
    dashedLine: {
        height: 2,
        borderTopColor: COLORS.darkgray,
        borderTopWidth: 1,
        borderStyle: "dashed",
        width: SIZES.fullWidth
    },
    entity: {
        color: COLORS.darkgray,
        ...FONTS.body3,
    },
    val: {
        color: COLORS.black,
        fontWeight: "bold",
        ...FONTS.h3
    }

})