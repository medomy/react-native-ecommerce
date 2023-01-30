import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import CartHeader from '../../components/cartComponents/cartHeader'
import CartList from '../../components/cartComponents/cartCardsList'
import PromoCodeInput from '../../components/cartComponents/promoCodeInput'
import ReciptComponent from '../../components/cartComponents/recipt'
import Btn from '../../components/btn'

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return (
      <View style={styles.noItemsContainer}>
        <Text style={styles.noItemsTxt}>No Items in your cart</Text>
      </View>
    )
  }
  else {
    return (
      <View style={{ flex: 1 }}>
        <CartHeader title='My Cart' />
        <ScrollView>
          <CartList cartItems={cartItems} />
          <PromoCodeInput />
          <ReciptComponent />
          <View style={styles.btnWrap}>
            <Btn width={SIZES.fullWidth} txt='CheckOut' bgColor={COLORS.primary} txtColor={COLORS.white} onPress={() => { }} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default CartScreen

const styles = StyleSheet.create({
  noItemsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noItemsTxt: {
    ...FONTS.h3,
    color: COLORS.black
  },
  btnWrap: {
    width: SIZES.fullWidth,
    paddingHorizontal: 1.5 * SIZES.padding2,
    marginVertical: SIZES.margin
  }
})