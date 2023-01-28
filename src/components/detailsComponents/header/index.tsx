import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'

export default function DetailsHeader() {
    const navigation = useNavigation();
    const isDark = useIsDarkMode();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.btn} onPress={goBack}>
                <Icon name='arrow-back' size={SIZES.iconSize} color={COLORS.black}/>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                    <Icon name='heart-outline' size={SIZES.iconSize} color={COLORS.black}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Icon name='md-cloud-upload-outline' size={SIZES.iconSize} color={COLORS.black}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}