import { View, Text } from 'react-native'
import React from 'react'
import { useGetLimitedProductsQuery } from '../../../store/slices/productSlice'
import MostPopularSecHeader from './mostPopularSecHeader'
import ProductsList from '../productsList'

export default function MostPopular() {
    const { data } = useGetLimitedProductsQuery(5)
    return (
        <View style={{ flex: 1 }}>
            <MostPopularSecHeader title='most popular' subTitle='see all' />
            {data && <ProductsList products={data!} />}
        </View>
    )
}