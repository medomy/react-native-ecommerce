import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 1.5 * SIZES.padding2,
        width: SIZES.fullWidth,
        marginVertical:2* SIZES.margin2
    },
    title: {
        ...FONTS.h3,
        fontWeight: "bold",
    },
    ratingAndPrice: {
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        marginVertical : SIZES.margin

    },
    price: {
        ...FONTS.body3,
        color: COLORS.darkgray
    },
    ratingSec: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratingImg: {
        width:  SIZES.iconSize2,
        height:  SIZES.iconSize2,
        marginRight: 0.5 * SIZES.margin,
        resizeMode: "contain"
    },
    rating: {
        ...FONTS.body4,
    },
});

export default styles;