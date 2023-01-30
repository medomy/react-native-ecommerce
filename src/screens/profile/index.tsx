import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SignedUser from '../../types/user'
import { changeUserProfilePic, getUserAsyncStorage } from '../../services/asyncStorageUser';
import ProfileCircle from '../../components/profileComponents/profileCircle';
import ProfileInfoSec from '../../components/profileComponents/infoSec';

const ProfileScreen = () => {
    const [user, setUser] = useState<SignedUser>();
    const getUser = async () => {
        const _user = await getUserAsyncStorage();
        setUser(_user);
    }
    useEffect(() => {
        getUser();
    }, [])
    const setProfilePic = async (uri: string) => {
        await changeUserProfilePic(uri);
        await getUser();
    }
    if (user) {
        return (
            <View style={{ flex: 1 }}>
                <ProfileCircle profilePic={user.img!} changeProfilePic={setProfilePic} />
                <ProfileInfoSec userName={user.userName} />
            </View>
        )
    }
    else {
        return null;
    }
}

export default ProfileScreen

const styles = StyleSheet.create({})