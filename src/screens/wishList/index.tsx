import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CartHeader from '../../components/cartComponents/cartHeader'
import WishlistList from '../../components/cartComponents/wishlistList'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const WishListScreen = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  return (
    <View style={{ flex: 1 }}>
      <CartHeader title='My Wishlist' />
      <ScrollView>
        <WishlistList wishlistItems={wishlistItems} />
      </ScrollView>
    </View>
  )
}

export default WishListScreen

const styles = StyleSheet.create({})