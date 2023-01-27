import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'

interface props {
    size: "s" | "m" | "l" | "xl" | "xxl",
    selectedSize: "s" | "m" | "l" | "xl" | "xxl",
    select: (txt: "s" | "m" | "l" | "xl" | "xxl") => void
}
export default function SizeCard({ size, selectedSize, select }: props) {
    const isDark = useIsDarkMode();
    const isSelected = selectedSize === size;
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: isSelected ? COLORS.tintColor : isDark ? COLORS.black : COLORS.white }]}
            onPress={() => select(size)}>
            <Text style={[styles.txt, { color: isSelected ? COLORS.white : isDark ? COLORS.white : COLORS.black }]}>{size}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: SIZES.radius2,
        paddingVertical: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.margin2,
        width : 40
    },
    txt: {
        ...FONTS.body3,
        fontWeight: "800"
    }
})