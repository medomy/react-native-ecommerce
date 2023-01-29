import { useDispatch } from "react-redux";
import AsyncStorageCartItems from "../services/asyncStorageCart";
import { getUserAsyncStorage } from "../services/asyncStorageUser";
import { setCart } from "../store/slices/cartSlice";
import { useEffect } from "react";

//set the initial values for cart states in redux to what is in async storage
export function useInitCartItems() {
    const dispatch = useDispatch();

    const setData = async () => {
        try {
            const user = await getUserAsyncStorage();
            const cartItems = await AsyncStorageCartItems.getCartItemsByUserId(user.id);
            dispatch(setCart(cartItems));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        setData();
    }, [])
}