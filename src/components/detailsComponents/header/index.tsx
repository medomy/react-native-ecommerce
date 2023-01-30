import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode'
import { Product } from '../../../types/product'
import { isWishlist } from '../../../utils/isWishlist'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { addToWishList, removeFromWishlist } from '../../../store/slices/wishListSlice'

interface props {
    product: Product
}
export default function DetailsHeader({ product }: props) {
    const wishlistIttems = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isDark = useIsDarkMode();
    const goBack = () => {
        navigation.goBack();
    }
    const _addOrRemoveFromWishlist = () => {
        if (isWishlist(product, wishlistIttems)) {
            dispatch(removeFromWishlist(product));
        }
        else dispatch(addToWishList(product));
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.btn} onPress={goBack}>
                <Icon name='arrow-back' size={SIZES.iconSize} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={_addOrRemoveFromWishlist}>
                    {isWishlist(product, wishlistIttems) ? <Icon name='heart' size={SIZES.iconSize} color={COLORS.black} /> :
                        <Icon name='heart-outline' size={SIZES.iconSize} color={COLORS.black} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Icon name='md-cloud-upload-outline' size={SIZES.iconSize} color={COLORS.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}