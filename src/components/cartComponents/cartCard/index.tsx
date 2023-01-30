import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CartItem } from '../../../types/cartItem'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { COLORS, SIZES } from '../../../constants'
import { IconButton, Pressable } from '@react-native-material/core'
import { useDispatch } from 'react-redux'
import AsyncStorageCartItems from '../../../services/asyncStorageCart'
import { decreaseElement, increaseElement, removeFromCart } from '../../../store/slices/cartSlice'
import { Product } from '../../../types/product'
import Btn from '../../btn'
import { useNavigation } from '@react-navigation/native'
import { removeFromWishlist } from '../../../store/slices/wishListSlice'

interface props {
    cartItem?: CartItem,
    product?: Product,
    isWishList: boolean
}
export default function CartCard({ cartItem, product, isWishList }: props) {
    const dispatch = useDispatch();
    const increase = async () => {
        try {
            await AsyncStorageCartItems.increaseElementCountAsyncStorage(cartItem!.id);
            dispatch(increaseElement({ productId: cartItem!.id }));
        } catch (err) {
            console.error(err)
        }
    }
    const decrease = async () => {
        try {
            await AsyncStorageCartItems.decreaseElementCountAsyncStorage(cartItem!.id);
            dispatch(decreaseElement({ productId: cartItem!.id }));
        } catch (err) {
            console.error(err)
        }
    }
    const removeElement = async () => {
        try {
            await AsyncStorageCartItems.removeItemAsyncStorage(cartItem!.id);
            dispatch(removeFromCart({ productId: cartItem!.id }));
        } catch (err) {
            console.error(err)
        }
    }
    // wishList sec
    // navigate to details
    const navigation = useNavigation();
    const goToDetails = () => {
        navigation.navigate("details" as never, {
            productId: product!.id
        } as never)
    }
    // remove from wishlist
    const _removeFromWishlist = () => {
        dispatch(removeFromWishlist(product!));
    }
    if (!isWishList) {
        return (
            <View style={styles.container}>
                <View style={styles.cardRow}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{ uri: cartItem!.image }}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.detailsView}>
                        <Text style={styles.productName} numberOfLines={2}>{cartItem!.title}</Text>
                        {cartItem!.size && <Text style={styles.sizeTxt}>size : {cartItem!.size}</Text>}
                        <Text style={styles.priceTxt}>$ {cartItem!.price}</Text>
                        <View style={styles.lastPart}>
                            <View style={styles.counterPart}>
                                <TouchableOpacity style={styles.counterbtn} onPress={increase}>
                                    <Icon name='plus' size={0.8 * SIZES.iconSize2} color={COLORS.black} />
                                </TouchableOpacity>
                                <Text style={styles.counterTxt}>{cartItem!.count}</Text>
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
    else {
        return (
            <Pressable style={styles.container} onPress={goToDetails}>
                <View style={styles.cardRow}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{ uri: product!.image }}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.detailsView}>
                        <Text style={styles.productName} numberOfLines={2}>{product!.title}</Text>
                        <Text style={styles.priceTxt}>$ {product!.price}</Text>
                        <View style={styles.lastPart}>
                            <View style={styles.counterPart}>
                                <Btn bgColor={COLORS.primary} txt='details' txtColor={COLORS.white} width={"80%"} onPress={() => { }} />
                            </View>
                            <IconButton icon={<Icon2 name='close' color={COLORS.darkgray} size={0.8 * SIZES.iconSize2} />} onPress={_removeFromWishlist} />
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }
}