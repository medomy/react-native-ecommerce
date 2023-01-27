import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

interface props {
    title: string,
    subTitle: string
}
const MostPopularSecHeader = ({ title, subTitle }: props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MostPopularSecHeader
