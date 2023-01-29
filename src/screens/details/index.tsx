import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useGetProductByIdQuery } from '../../store/slices/productSlice'
import LoadingScreen from '../../components/loadingScreen/loadingScreen'
import ImgSecDetails from '../../components/detailsComponents/imgSec'
import TitleAndRatingDetails from '../../components/detailsComponents/detailsTitleAndRating'
import SizesList from '../../components/detailsComponents/sizesList'
import ColorsList from '../../components/detailsComponents/colorsList'
import ExpandableDescription from '../../components/detailsComponents/expandableDescription'
import { Color } from '../../types/color'
import { COLORS, SIZES } from '../../constants'
import Btn from '../../components/btn'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAsyncStorage } from '../../services/asyncStorageUser'
import { CartItem } from '../../types/cartItem'
import AsyncStorageCartItems from '../../services/asyncStorageCart'
import { addToCart } from '../../store/slices/cartSlice'
import { RootState } from '../../store/store'

type RouteParams = {
    productId: number
}
const DetailsScreen = () => {
    const sizeCart = useRef<"s" | "m" | "l" | "xl" | "xxl" | null>(null);
    const colorCart = useRef<Color | null>(null);
    const route = useRoute();
    const params = route.params as RouteParams;
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const { data, isLoading } = useGetProductByIdQuery(params.productId)

    // function to add to cart
    const addToCartDetailsPage = async () => {
        try {
            const user = await getUserAsyncStorage();
            const cartItem: CartItem = {
                ...data!,
                userId: user.id,
                count: 1
            }
            await AsyncStorageCartItems.addToCartItems(cartItem);
            dispatch(addToCart({ userId: user.id, item: cartItem }));
            // to check cart items
            const asyncCart = await AsyncStorageCartItems.getCartItemsByUserId(user.id);
            console.log("async cart", asyncCart.map((item)=> item.id));
            console.log("redux cartItems", cartItems.map((item)=> item.id));
        } catch (e) {
            console.error(e);
        }
    }

    if (isLoading || data === undefined) {
        return (
            <LoadingScreen />
        )
    }
    else {
        // console.log(data.category);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <ImgSecDetails product={data} />
                    <TitleAndRatingDetails title={data.title} rating={data.rating.rate} reviews={data.rating.count} price={data.price} />
                    {data.category === "men's clothing" || data.category === "women's clothing" ? <SizesList setSizeForCart={(s) => sizeCart.current = s} /> : null}
                    {data.category === "men's clothing" || data.category === "women's clothing" ? <ColorsList setColorForCart={(c) => colorCart.current = c} /> : null}
                    <ExpandableDescription description={data.description} />
                    <View style={styles.btnWrap}>
                        <Btn width={"80%"} txt='Add to Cart' bgColor={COLORS.primary} txtColor={COLORS.white} onPress={addToCartDetailsPage} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default DetailsScreen

const styles = StyleSheet.create({
    btnWrap: {
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin
    }
})