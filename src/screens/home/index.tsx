import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../../components/HomeComponents/header'
import HeaderTitle from '../../components/HomeComponents/headerTitle'
import DiscountSec from '../../components/HomeComponents/discountSec'
import CategoriesList from '../../components/HomeComponents/categoriesList'
import { useGetAllProductsQuery } from '../../store/slices/productSlice'
import ProductsList from '../../components/HomeComponents/productsList'
import { filterProducts } from '../../utils/filterProducts'
import MostPopular from '../../components/HomeComponents/mostPopularSec/mostPopuler'
import { COLORS } from '../../constants'

const Home = () => {
  const { data } = useGetAllProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const changeSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  }
  return (
    <View style={{ flex: 1}}>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeaderTitle title='Find Your Clothes' />
        <DiscountSec />
        <CategoriesList selected={selectedCategory} setSelected={changeSelectedCategory} />
        {data && <ProductsList products={filterProducts(selectedCategory, data)} />}
        {data && <MostPopular />}
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