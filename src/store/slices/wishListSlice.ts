import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/product'

export interface WishlistSlice {
    items: Product[],
}

const initialState: WishlistSlice = {
    items: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, product: PayloadAction<Product>) => {
            if (state.items.find((item) => item.id === product.payload.id) === undefined) {
                state.items.push(product.payload);
            }
        },
        removeFromWishlist: (state, product: PayloadAction<Product>) => {
            state.items = state.items.filter((item) => item.id !== product.payload.id)
        }
    }
})

export const { addToWishList, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer