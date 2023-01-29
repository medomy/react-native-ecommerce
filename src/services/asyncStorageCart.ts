// addToCart: (state, payload: PayloadAction<{ userId: number, item: CartItem }>) => {
//     //const cartItem = state.cartItems.find((it)=> it.id === payload.payload.item.id);
//     if (state.cartItems.find((it) => it.id === payload.payload.item.id && it.userId === payload.payload.userId)) {
//         state.cartItems.find((it) => it.id === payload.payload.item.id && it.userId === payload.payload.userId)!.count += 1;
//     }
//     else {
//         state.cartItems.push({ ...payload.payload.item });
//     }
//     state.totalItems = state.cartItems.length;
//     state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
// },
// removeFromCart: (state, payload: PayloadAction<{ productId: number, userId: number }>) => {
//     state.cartItems = state.cartItems.filter((item) => item.id !== payload.payload.productId && item.userId !== payload.payload.userId);
//     state.totalItems = state.cartItems.length;
//     state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
// },
// increaseElement: (state, payload: PayloadAction<{ userId: number, productId: number }>) => {
//     state.cartItems.find((item) => item.id === payload.payload.productId && item.userId === payload.payload.userId)!.count += 1;
//     state.totalItems = state.cartItems.length;
//     state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
// },
// decreaseElement: (state, payload: PayloadAction<{ userId: number, productId: number }>) => {
//     state.cartItems.find((item) => item.id === payload.payload.productId && item.userId === payload.payload.userId)!.count -= 1;
//     state.totalItems = state.cartItems.length;
//     state.totalPrice = state.cartItems.reduce((a, b) => a + b.count * b.price, 0);
// },

import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItem } from "../types/cartItem";

class AsyncStorageCartItems {
    static async getCartItems(): Promise<CartItem[] | null> {
        try {
            const cartItems = await AsyncStorage.getItem('cartItems');
            return cartItems ? JSON.parse(cartItems!) : null;
        } catch (e) {
            throw new Error(`could not get items , ${e}`)
        }
    }
    static async addToCartItems(item: CartItem) {
        try {
            const cartItems = await this.getCartItems();
            if (cartItems) {
                if (cartItems.find((it: CartItem) => it.id === item.id && it.userId === item.userId)) {
                    cartItems.find((it: CartItem) => it.id === item.id && it.userId === item.userId)!.count += 1;
                    await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
                }
                else {
                    cartItems.push(item);
                    await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
                }
            }
            else {
                await AsyncStorage.setItem("cartItems", JSON.stringify([item]));
            }
        } catch (e) {
            throw new Error(`could not add to cart , ${e}`)
        }
    }
    static async getCartItemsByUserId(userId: number): Promise<CartItem[]> {
        try {
            const cartItems = await this.getCartItems();
            return cartItems!.filter((it) => it.userId === userId);
        } catch (err) {
            throw new Error(`could not get items , ${err}`)
        }
    }
    // in case of mutations we make a set function 
    static async setCartItemsAsyncStorage(cartItems: CartItem[]) {
        try {
            await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch (e) {
            throw new Error(`could not set items , ${e}`)
        }
    }

    // increase and decrease funcs
    static async increaseElementCountAsyncStorage(id: number) {
        try {
            const items = await this.getCartItems();
            items!.find((item) => item.id === id)!.count += 1;
            await this.setCartItemsAsyncStorage(items!);
        } catch (err) {
            throw new Error(`can not increase , ${err}`)
        }
    }
    static async decreaseElementCountAsyncStorage(id: number) {
        try {
            const items = await this.getCartItems();
            if (items!.find((item) => item.id === id)!.count > 1) {
                items!.find((item) => item.id === id)!.count += 1;
                await this.setCartItemsAsyncStorage(items!);
            }
        } catch (err) {
            throw new Error(`can not decrease , ${err}`)
        }
    }
    // remove item
    static async removeItemAsyncStorage(id: number) {
        try {
            const items = await this.getCartItems();
            let _items = items?.filter((item) => item.id !== id);
            await this.setCartItemsAsyncStorage(_items!);
        } catch (e) {
            throw new Error(`can not decrease , ${e}`);
        }
    }
}
export default AsyncStorageCartItems;