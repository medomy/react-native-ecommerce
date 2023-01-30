import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../../../types/product'
import styles from './styles'
import { IconButton } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { isWishlist } from '../../../utils/isWishlist'
import { addToWishList, removeFromWishlist } from '../../../store/slices/wishListSlice'

interface props {
    product: Product
}
export default function ProductCard({ product }: props) {
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isDark = useIsDarkMode();

    const goToDetails = () => {
        navigation.navigate("details" as never, {
            productId: product.id
        } as never)
    }
    // wishlist funcs
    const addOrRemoveWishlist = () => {
        if (isWishlist(product, wishlistItems)) {
            dispatch(removeFromWishlist(product));
        }
        else dispatch(addToWishList(product));
    }
    return (
        <Pressable style={styles.procuctCard} onPress={goToDetails}>
            <View style={styles.imgContainer}>
                <IconButton
                    icon={isWishlist(product, wishlistItems) ? <Icon name='heart' size={SIZES.iconSize} color={COLORS.black} /> :
                        <Icon name='heart-o' size={SIZES.iconSize} color={COLORS.black} />}
                    style={styles.iconBtn}
                    onPress={addOrRemoveWishlist} />
                <Image
                    source={{ uri: product.image }}
                    style={styles.img}
                />
            </View>
            <Text style={[styles.name, { color: isDark ? COLORS.white : COLORS.black }]}>
                {product.title}
            </Text>
            <Text style={[styles.price, { color: isDark ? COLORS.white : COLORS.black }]}>
                ${product.price}
            </Text>
        </Pressable>
    )
}