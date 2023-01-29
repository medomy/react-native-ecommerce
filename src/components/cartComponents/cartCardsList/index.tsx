import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartItem } from '../../../types/cartItem'
import CartCard from '../cartCard';

interface props {
    cartItems: CartItem[];
}
const CartList = ({ cartItems }: props) => {
    return (
        <View style={{ flex: 1 }}>
            {cartItems.map((item) => (
                <CartCard cartItem={item} key={item.id} />
            ))}
        </View>
    )
}

export default CartList

const styles = StyleSheet.create({})