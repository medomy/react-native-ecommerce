import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container : {
        paddingVertical : SIZES.padding,
        width : SIZES.fullWidth,
        flexDirection : "row",
        justifyContent : "space-between",
        marginVertical : SIZES.margin,
        backgroundColor : COLORS.transparent,
        paddingHorizontal :1.5* SIZES.padding2,
        alignItems : "center"
    },
    iconMargin : {
        marginHorizontal : 0.8 *SIZES.margin2
    },
    otherIcons : {
        flexDirection : "row"
    }
});


export default styles