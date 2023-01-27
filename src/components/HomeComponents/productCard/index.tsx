import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../../../types/product'
import styles from './styles'
import { IconButton } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native'
import { SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

interface props {
    product: Product
}
export default function ProductCard({ product }: props) {
    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate("details" as never, {
            productId: product.id
        } as never)
    }
    return (
        <Pressable style={styles.procuctCard} onPress={goToDetails}>
            <View style={styles.imgContainer}>
                <IconButton icon={<Icon name='heart-o' size={SIZES.iconSize} />} style={styles.iconBtn} />
                <Image
                    source={{ uri: product.image }}
                    style={styles.img}
                />
            </View>
            <Text style={styles.name}>
                {product.title}
            </Text>
            <Text style={styles.price}>
                ${product.price}
            </Text>
        </Pressable>
    )
}