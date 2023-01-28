import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'
import { COLORS } from '../../../constants'

interface props {
    title: string,
    subTitle: string
}
const MostPopularSecHeader = ({ title, subTitle }: props) => {
    const isDark = useIsDarkMode();
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: isDark ? COLORS.white : COLORS.black }]}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MostPopularSecHeader
