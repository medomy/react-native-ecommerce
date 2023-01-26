import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { images } from '../../../constants'

export default function DiscountSec() {
    return (
        <View style={styles.container}>
            <Image
                source={images.discountImg}
                resizeMode={"cover"}
                style={styles.img} />
        </View>
    )
}