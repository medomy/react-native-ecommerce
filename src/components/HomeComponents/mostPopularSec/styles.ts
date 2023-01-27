import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.fullWidth,
        paddingHorizontal: 1.5 * SIZES.padding2,
        paddingVertical: SIZES.padding,
        marginVertical: SIZES.margin
    },
    title: {
        ...FONTS.h2,
        fontWeight: "bold",
        color: COLORS.black
    },
    subTitle: {
        ...FONTS.body4,
        color: COLORS.darkgray,
        fontWeight: "700"
    }

});

export default styles;