import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles  = StyleSheet.create({
    container : {
        paddingHorizontal : 1.5 * SIZES.padding2,
        paddingVertical : SIZES.padding,
        marginVertical : SIZES.margin,
        justifyContent : "center",
        width : SIZES.fullWidth
    },
    title : {
        ...FONTS.h1,
        fontWeight : "800"
    }
});

export default styles;