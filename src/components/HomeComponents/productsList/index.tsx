import { View, Text, ListRenderItem, FlatList } from 'react-native'
import React from 'react'
import { Product } from '../../../types/product'
import ProductCard from '../productCard'
import { SIZES } from '../../../constants'

interface props {
    products: Product[]
}
export default function ProductsList({ products }: props) {
    const renderItems: ListRenderItem<Product> = ({ item }) => (<ProductCard product={item} />)
    return (
        <View style={{ marginVertical: SIZES.margin }}>
            <FlatList
                data={products}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}