import { View, Text, Image } from 'react-native'
import React from 'react'
import { Product } from '../../../types/product'
import styles from './styles'
import DetailsHeader from '../header'

interface props {
    product: Product
}
export default function ImgSecDetails({ product }: props) {
    return (
        <View style={styles.container}>
            <DetailsHeader product={product} />
            <Image
                source={{ uri: product.image }}
                style={styles.img}
            />
        </View>
    )
}