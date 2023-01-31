import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../../components/HomeComponents/header'
import HeaderTitle from '../../components/HomeComponents/headerTitle'
import DiscountSec from '../../components/HomeComponents/discountSec'
import CategoriesList from '../../components/HomeComponents/categoriesList'
import { useGetAllProductsQuery } from '../../store/slices/productSlice'
import ProductsList from '../../components/HomeComponents/productsList'
import { filterProducts } from '../../utils/filterProducts'
import MostPopular from '../../components/HomeComponents/mostPopularSec/mostPopuler'
import { COLORS, SIZES } from '../../constants'
import { useInitCartItems } from '../../hooks/useInitializeCartItems'

const Home = () => {
  const { data } = useGetAllProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  useInitCartItems();
  const changeSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  }
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeaderTitle title='Find Your Clothes' />
        <DiscountSec />
        <CategoriesList selected={selectedCategory} setSelected={changeSelectedCategory} />
        {data ? <ProductsList products={filterProducts(selectedCategory, data)} /> : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: SIZES.margin2 }}>
          <ActivityIndicator color={COLORS.tintColor} size={SIZES.iconSize} />
        </View>}
        {data ? <MostPopular /> : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , marginVertical: SIZES.margin2 }}>
          <ActivityIndicator color={COLORS.tintColor} size={SIZES.iconSize} />
        </View>}
        <View style={styles.emptyViewFooter}></View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  emptyViewFooter: {
    height: 100,
  }
})