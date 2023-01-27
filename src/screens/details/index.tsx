import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useGetProductByIdQuery } from '../../store/slices/productSlice'
import LoadingScreen from '../../components/loadingScreen/loadingScreen'
import ImgSecDetails from '../../components/detailsComponents/imgSec'
import TitleAndRatingDetails from '../../components/detailsComponents/detailsTitleAndRating'
import SizesList from '../../components/detailsComponents/sizesList'
import ColorsList from '../../components/detailsComponents/colorsList'

type RouteParams = {
    productId: number
}
const DetailsScreen = () => {
    const route = useRoute();
    const params = route.params as RouteParams;

    const { data, isLoading } = useGetProductByIdQuery(params.productId)

    if (isLoading || data === undefined) {
        return (
            <LoadingScreen />
        )
    }
    else {
        console.log(data.category);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <ImgSecDetails product={data} />
                    <TitleAndRatingDetails title={data.title} rating={data.rating.rate} reviews={data.rating.count} price={data.price} />
                    {data.category === "men's clothing" || data.category === "women's clothing" ? <SizesList /> : null}
                    {data.category === "men's clothing" || data.category === "women's clothing" ? <ColorsList /> : null}
                </ScrollView>
            </View>
        )
    }
}

export default DetailsScreen

const styles = StyleSheet.create({})