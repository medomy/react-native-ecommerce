import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
interface props {
    description: string
}
const ExpandableDescription = ({ description }: props) => {
    const [isExpandable, setIsExpandable] = useState<boolean>(false);
    const [height] = useState(new Animated.Value(0));

    const expandOrShrink = () => {
        setIsExpandable(val => !val);
    }
    useEffect(() => {
        Animated.timing(height, {
            toValue: isExpandable ? 100 : 0,
            duration: 600,
            useNativeDriver: false
        }).start();
        console.log(isExpandable, height);
    }, [isExpandable])
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <TouchableOpacity style={styles.row} onPress={expandOrShrink}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    {isExpandable ? <Icon name='keyboard-arrow-up' size={SIZES.iconSize2} color={COLORS.black} />
                        : <Icon name='keyboard-arrow-down' size={SIZES.iconSize2} color={COLORS.black} />}
                </TouchableOpacity>
                <Animated.View style={[styles.descriptionTxt, { height: height }]}>
                    <Text style={styles.desc} numberOfLines={5}>{description}</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default ExpandableDescription

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,
    },
    descriptionContainer: {
        //marginHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin,
        paddingVertical: SIZES.padding2,
        alignItems: "center",
        width: SIZES.fullWidth,
        borderRadius: SIZES.btnRadius,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS.darkgray,
        backgroundColor: COLORS.white,
        alignSelf: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding
    },
    descriptionTitle: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.black
    },
    descriptionTxt: {
        marginVertical: SIZES.margin,
        color: COLORS.black,
        paddingHorizontal: SIZES.padding
    },
    desc: {
        textAlign: "left",
        ...FONTS.body3,
        color: COLORS.black
    }

})