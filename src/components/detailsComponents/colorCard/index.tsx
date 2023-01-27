import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import { Color } from '../../../types/color'

interface props {
    selectedColor: Color,
    color: Color,
    selectColor: (c: Color) => void,

}
const ColorCard = ({ selectColor, color, selectedColor }: props) => {
    const isSelected = selectedColor.hex === color.hex;
    return (
        <TouchableOpacity style={[styles.bigCircle, { backgroundColor: color.hex }]} onPress={() => selectColor(color)}>
            <View style={[styles.smallCircle, { backgroundColor: isSelected ? COLORS.white : color.hex }]}></View>
        </TouchableOpacity>
    )
}

export default ColorCard

const styles = StyleSheet.create({
    bigCircle: {
        width: 2 * SIZES.iconSize2,
        height: 2 * SIZES.iconSize2,
        borderRadius: SIZES.iconSize2,
        marginRight: SIZES.margin2,
        justifyContent: "center",
        alignItems: "center"
    },
    smallCircle: {
        width: SIZES.iconSize2,
        height: SIZES.iconSize2,
        borderRadius: 0.5 * SIZES.iconSize2
    }
})