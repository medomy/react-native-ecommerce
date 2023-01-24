import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface props {
    bgColor: string,
    txt: string,
    txtColor: string,
    width: number | string,
    onPress: () => void
}
export default function Btn({ bgColor, txt, txtColor, width, onPress }: props) {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor, width: width, }]} onPress={onPress}>
            <Text style={{ color: txtColor }}>{txt}</Text>
        </TouchableOpacity>
    )
}