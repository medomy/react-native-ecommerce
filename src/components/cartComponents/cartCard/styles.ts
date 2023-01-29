import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin
    },
    cardRow: {
        flexDirection: "row",
        width: "100%",
        position: "relative"
    },
    imgContainer: {
        backgroundColor: COLORS.socendry,
        width: "40%",
        height: 150,
        alignItems: "flex-end",
        borderRadius: SIZES.radius2,
        flexDirection: "row",
        justifyContent: "center"
    },
    img: {
        width: "80%",
        height: 120,
        resizeMode: "contain",
    },
    detailsView: {
        marginHorizontal: SIZES.margin2,
        width: "60%"
    },
    productName: {
        ...FONTS.h3,
        fontWeight: "800",
        color: COLORS.primary,
        // marginBottom: SIZES.margin2
    },
    sizeTxt: {
        ...FONTS.body3,
        fontWeight: "700",
        color: COLORS.darkgray,
        marginVertical: SIZES.margin
    },
    priceTxt: {
        ...FONTS.body2,
        fontWeight: "900",
        color: COLORS.black,
        marginVertical: SIZES.margin
    },
    lastPart: {
        //alignSelf: "flex-end",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0
    },
    counterPart: {
        flexDirection: "row",
        alignItems: "center"
    },
    counterbtn: {
        width: 25,
        height: 25,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.black,
        borderWidth: 1
    },
    counterTxt: {
        marginHorizontal: SIZES.margin,
        fontWeight: "bold",
        color: COLORS.black
    }
});

export default styles;