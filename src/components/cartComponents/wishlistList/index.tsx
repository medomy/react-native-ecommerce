import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../../types/product'
import CartCard from '../cartCard'

interface props {
    wishlistItems: Product[]
}
const WishlistList = ({ wishlistItems }: props) => {
    return (
        <View style={{ flex: 1 }}>
            {wishlistItems.map((item) => (
                <CartCard isWishList={true} product={item} key={item.id} />
            ))}
        </View>
    )
}

export default WishlistList

const styles = StyleSheet.create({})