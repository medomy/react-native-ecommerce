import AsyncStorage from "@react-native-async-storage/async-storage";
import SignedUser from "../types/user";
import { decodeToken } from "./decodeToken"

export const setUserAsyncStorage = async (token: string) => {
    const data: any = decodeToken(token);
    const signedUser: SignedUser = {
        id: data.sub,
        userName: data.user,
        img: "https://www.w3schools.com/howto/img_avatar.png"
    }
    await AsyncStorage.setItem("signedUser", JSON.stringify(signedUser));
}

export const getUserAsyncStorage = async (): Promise<SignedUser> => {
    const user = await AsyncStorage.getItem("signedUser");
    return JSON.parse(user!);
}

// change pic 
export const changeUserProfilePic = async (uri: string) => {
    const user = await getUserAsyncStorage();
    await AsyncStorage.setItem("signedUser", JSON.stringify({
        ...user,
        img: uri
    }))
}

export const logOutAsyncStorage = async () => {
    await AsyncStorage.removeItem("signedUser");
}