import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../../types/cartItem'
import { Product } from '../../types/product'

export interface CartSlice {
    cartItems: CartItem[],
    totalItems: number,
    totalPrice: number
}

const initialState: CartSlice = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, payload: PayloadAction<{ userId: number, item: CartItem }>) => {
            //const cartItem = state.cartItems.find((it)=> it.id === payload.payload.item.id);
            if (state.cartItems.find((it) => it.id === payload.payload.item.id && it.userId === payload.payload.userId)) {
                state.cartItems.find((it) => it.id === payload.payload.item.id && it.userId === payload.payload.userId)!.count += 1;
            }
            else {
                state.cartItems.push({ ...payload.payload.item });
            }
            state.totalItems = state.cartItems.length;
            state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
        },
        removeFromCart: (state, payload: PayloadAction<{ productId: number }>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== payload.payload.productId);
            state.totalItems = state.cartItems.length;
            state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
        },
        increaseElement: (state, payload: PayloadAction<{ productId: number }>) => {
            state.cartItems.find((item) => item.id === payload.payload.productId)!.count += 1;
            state.totalItems = state.cartItems.length;
            state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
        },
        decreaseElement: (state, payload: PayloadAction<{ productId: number }>) => {
            if (state.cartItems.find((item) => item.id === payload.payload.productId)!.count > 1) {
                state.cartItems.find((item) => item.id === payload.payload.productId)!.count -= 1;
                state.totalItems = state.cartItems.length;
                state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
            }
        },
        setCart: (state, payload: PayloadAction<CartItem[]>) => {
            state.cartItems = payload.payload;
            state.totalItems = state.cartItems.length;
            state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
        }
    }
})
export const { addToCart, removeFromCart, increaseElement, decreaseElement, setCart } = cartSlice.actions

export default cartSlice.reducer;