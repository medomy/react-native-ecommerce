import { useEffect, useState } from "react"
import SignedUser from "../types/user"
import { getUserAsyncStorage } from "../services/asyncStorageUser";

export const useSignedUser = () => {
    const [userAndLoading, setUserAndLoading] = useState<{
        signedUser: SignedUser | null,
        isLoading: boolean
    }>({
        signedUser: null,
        isLoading: true
    });
    const setData = async () => {
        const _user = await getUserAsyncStorage();
        setUserAndLoading({
            signedUser: _user,
            isLoading: false
        });
    }
    useEffect(() => {
        setData();
    }, []);
    return userAndLoading;
}