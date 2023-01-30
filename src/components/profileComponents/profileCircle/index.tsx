import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
interface props {
    profilePic: string,
    changeProfilePic: (uri: string) => void,
}
const ProfileCircle = ({ profilePic, changeProfilePic }: props) => {

    const openImgPicker = async () => {
        try {
            // const img = await ImagePicker.openPicker({
            //     width: 300,
            //     height: 300,
            //     cropping: true
            // })
            // changeProfilePic(img.path);
            const result = await launchImageLibrary({
                mediaType: "photo"
            });
            if (result.assets) {
                changeProfilePic(result!.assets[0]!.uri!)
            }
        } catch (err) { console.warn(err) }
    }
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: profilePic }}
                style={styles.circle}
                resizeMode='contain'
            />
            <TouchableOpacity style={styles.btn} onPress={openImgPicker}>
                <Icon name='upload' size={0.8 * SIZES.iconSize2} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileCircle

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        position: "relative"
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: COLORS.black,
        borderWidth: 2
    },
    btn: {
        position: "absolute",
        bottom: -10,
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.tintColor
    }

})