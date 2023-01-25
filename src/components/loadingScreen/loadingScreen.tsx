import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from "@react-native-material/core";
import { COLORS, SIZES } from '../../constants'

const LoadingScreen = () => {
    return (
        <View style={styles.fullPage}>
            <ActivityIndicator size={"large"} color={COLORS.tintColor} />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    fullPage: {
        width: SIZES.fullScreenWidth,
        height: SIZES.fullScreenHeight,
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex : 100,
        backgroundColor : COLORS.white
    }
})