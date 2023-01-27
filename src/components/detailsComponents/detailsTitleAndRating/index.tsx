import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, images } from '../../../constants'

interface props {
    title: string,
    rating: number,
    reviews: number,
    price: number
}
export default function TitleAndRatingDetails({ title, rating, reviews, price }: props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: COLORS.black }]}>{title}</Text>
            <View style={styles.ratingAndPrice}>
                <Text style={[styles.price, { color: COLORS.black }]}>${price}</Text>
                <View style={styles.ratingSec}>
                    <Image
                        source={images.startImg}
                        style={styles.ratingImg} />
                    <Text style={[styles.rating, { color: COLORS.black }]}>{rating}</Text>
                    <Text style={[styles.rating, { color: COLORS.darkgray }]}>({reviews} reviews)</Text>
                </View>
            </View>
        </View>
    )
}