import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    procuctCard: {
        position: "relative",
        alignItems: "center",
        marginHorizontal : 1.5 *SIZES.padding2
    },
    imgContainer: {
        backgroundColor: COLORS.socendry,
        width: 200,
        height: 250,
        borderRadius: SIZES.radius2,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    img: {
        width: 150,
        height: 200,
        resizeMode: "contain"
    },
    iconBtn: {
        position: "absolute",
        top: 10,
        right: 15
    },
    favIcon: {
        width: SIZES.iconSize,
        height: SIZES.iconSize,
    },
    name: {
        color: COLORS.black,
        ...FONTS.body4,
        marginVertical: 2* SIZES.margin,
        maxWidth : 150,
        textAlign : "center"
    },
    price: {
        color: COLORS.primary,
        ...FONTS.h3,
        fontWeight: "800"
    }
});

export default styles;