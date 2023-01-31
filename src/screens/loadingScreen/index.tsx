import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ActivityIndicator } from "@react-native-material/core";
import { COLORS } from '../../constants';
import { useIsDarkMode } from '../../hooks/useIsDarkMode';
import { useSignedUser } from '../../hooks/useSignedUser';
import { useNavigation } from '@react-navigation/native';

const LoadingMainScreenMyScreen = () => {
    const isDark = useIsDarkMode();
    const userAndLoading = useSignedUser();
    // ref to use side effects on new values only
    const renderRef = useRef<number>(0);
    // navigation
    const navigation = useNavigation();
    console.log(userAndLoading , renderRef.current);
    useEffect(() => {
        if (renderRef.current === 0) renderRef.current += 1;
        else {
            if (userAndLoading.signedUser) navigation.navigate("root" as never);
            else navigation.navigate("login" as never);
        }
    }, [
        userAndLoading.isLoading
    ])
    return (
        <View style={[styles.screen, { backgroundColor: isDark ? COLORS.black : COLORS.white }]}>
            <ActivityIndicator size={"large"} color={COLORS.tintColor} />
        </View>
    )
}

export default LoadingMainScreenMyScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})