import { useEffect, useState } from "react"
import SignedUser from "../types/user"
import { getUserAsyncStorage } from "../services/asyncStorageUser";

export const useSignedUser = () => {
    const [user, setUser] = useState<SignedUser | null>(null);
    const setData = async () => {
        const _user = await getUserAsyncStorage();
        setUser(_user);
    }
    useEffect(() => {
        setData();
    }, []);
    return user;
}