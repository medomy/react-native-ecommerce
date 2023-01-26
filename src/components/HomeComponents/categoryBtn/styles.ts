import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 1.5 * SIZES.padding2,
        paddingVertical:1.5* SIZES.padding,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.btnRadius,
        paddingHorizontal:1.5* SIZES.padding2
    },
    txt: {
        ...FONTS.body3
    }
});

export default styles;