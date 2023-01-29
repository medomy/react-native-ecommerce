import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CartItem } from '../../../types/cartItem'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { COLORS, SIZES } from '../../../constants'
import { IconButton } from '@react-native-material/core'
import { useDispatch } from 'react-redux'
import AsyncStorageCartItems from '../../../services/asyncStorageCart'
import { decreaseElement, increaseElement, removeFromCart } from '../../../store/slices/cartSlice'

interface props {
    cartItem: CartItem
}
export default function CartCard({ cartItem }: props) {
    const dispatch = useDispatch();
    const increase = async () => {
        try {
            await AsyncStorageCartItems.increaseElementCountAsyncStorage(cartItem.id);
            dispatch(increaseElement({ productId: cartItem.id }));
        } catch (err) {
            console.error(err)
        }
    }
    const decrease = async () => {
        try {
            await AsyncStorageCartItems.decreaseElementCountAsyncStorage(cartItem.id);
            dispatch(decreaseElement({ productId: cartItem.id }));
        } catch (err) {
            console.error(err)
        }
    }
    const removeElement = async () => {
        try {
            await AsyncStorageCartItems.removeItemAsyncStorage(cartItem.id);
            dispatch(removeFromCart({ productId: cartItem.id }));
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.cardRow}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: cartItem.image }}
                        style={styles.img}
                    />
                </View>
                <View style={styles.detailsView}>
                    <Text style={styles.productName} numberOfLines={2}>{cartItem.title}</Text>
                    {cartItem.size && <Text style={styles.sizeTxt}>size : {cartItem.size}</Text>}
                    <Text style={styles.priceTxt}>$ {cartItem.price}</Text>
                    <View style={styles.lastPart}>
                        <View style={styles.counterPart}>
                            <TouchableOpacity style={styles.counterbtn} onPress={increase}>
                                <Icon name='plus' size={0.8 * SIZES.iconSize2} color={COLORS.black} />
                            </TouchableOpacity>
                            <Text style={styles.counterTxt}>{cartItem.count}</Text>
                            <TouchableOpacity style={styles.counterbtn} onPress={decrease}>
                                <Icon name='minus' size={0.8 * SIZES.iconSize2} color={COLORS.black} />
                            </TouchableOpacity>
                        </View>
                        <IconButton icon={<Icon2 name='close' color={COLORS.darkgray} size={0.8 * SIZES.iconSize2} />} onPress={removeElement} />
                    </View>
                </View>
            </View>
        </View>
    )
}