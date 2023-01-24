import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    formWrap: {
        padding: SIZES.padding,
        width: SIZES.fullWidth
    },
    title: {
        ...FONTS.h1,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: SIZES.margin
    },
    formControl: {
        marginVertical: 0.5 * SIZES.margin,
        width: SIZES.fullWidth,
        padding: 0.5 * SIZES.padding,
        alignSelf : "center"
    },
    input: {
        width: SIZES.fullWidth,
        padding: SIZES.padding2,
        // borderColor: COLORS.primary,
        borderWidth: 0.7,
        marginTop: 4,
        borderRadius: SIZES.radius2
    },
    label: {
        ...FONTS.body3
    },
    btnWrap: {
        width: SIZES.fullWidth,
        marginVertical: SIZES.margin
    },
    btnsWrap: {
        justifyContent: "center",
        alignItems: "center"
    },
    btnsWrapTxt: {
        ...FONTS.h3,
        fontWeight: "700"
    }
})

export default styles;