import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import SignedUser from '../../types/user'
import { changeUserProfilePic, getUserAsyncStorage, logOutAsyncStorage } from '../../services/asyncStorageUser';
import ProfileCircle from '../../components/profileComponents/profileCircle';
import ProfileInfoSec from '../../components/profileComponents/infoSec';
import { useGetUserByIdQuery } from '../../store/slices/authSlice';
import { COLORS, SIZES } from '../../constants';
import InfoRowProfile from '../../components/profileComponents/infoRow';
import Btn from '../../components/btn';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProfileScreen = () => {
    const [user, setUser] = useState<SignedUser | null>();
    const reduxUser = useSelector((state: RootState) => state.cart.user);
    const navigation = useNavigation();
    const getUser = async () => {
        const _user = await getUserAsyncStorage();
        setUser(_user);
    }
    useEffect(() => {
        getUser();
    }, [])
    const { data, isLoading } = useGetUserByIdQuery(reduxUser ? reduxUser.id : 1);
    const setProfilePic = async (uri: string) => {
        await changeUserProfilePic(uri);
        await getUser();
    }
    const logOut = async () => {
        await logOutAsyncStorage();
        navigation.navigate("login" as never);
    }
    const goToLogin = () => {
        navigation.navigate("login" as never);
    }
    if (user) {
        return (
            <View style={{ flex: 1 }}>
                <ProfileCircle profilePic={user.img!} changeProfilePic={setProfilePic} />
                <ProfileInfoSec userName={user.userName} />
                {data ? <View style={{ marginVertical: SIZES.margin }}>
                    <InfoRowProfile title={"email"} subTitle={data.email} />
                    <InfoRowProfile title='city' subTitle={data.address.city} />
                    <InfoRowProfile title='street' subTitle={data.address.street} />
                    <InfoRowProfile title='mobile number' subTitle={data.phone} />
                </View> : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: SIZES.margin2 }}>
                    <ActivityIndicator color={COLORS.tintColor} size={SIZES.iconSize} />
                </View>}

                <View style={styles.btnWrap}>
                    <Btn bgColor={COLORS.tintColor} txtColor={COLORS.white} txt={"log out"} width={SIZES.fullWidth} onPress={logOut} />
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Btn bgColor={COLORS.tintColor} txtColor={COLORS.white} txt={"log in"} width={"50%"} onPress={goToLogin} />
            </View>
        );
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    btnWrap: {
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,

    }
})