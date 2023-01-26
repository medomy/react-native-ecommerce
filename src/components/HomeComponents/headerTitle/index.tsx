import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'
import { COLORS } from '../../../constants'

interface props {
    title : string
}

export default function HeaderTitle({title} : props) {
    const isDark = useIsDarkMode();
  return (
    <View style={styles.container}>
      <Text style={[styles.title , {color : isDark? COLORS.white : COLORS.black}]}>{title}</Text>
    </View>
  )
}