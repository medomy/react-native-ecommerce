import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        width: SIZES.fullWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.margin,
        backgroundColor: COLORS.transparent,
        paddingHorizontal: 1.5 * SIZES.padding2,
        alignItems: "center"
    },
    iconMargin: {
        marginHorizontal: 0.8 * SIZES.margin2,
        position: "relative"
    },
    otherIcons: {
        flexDirection: "row"
    },
    badge: {
        position: "absolute",
        top: -5,
        right: -5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.tintColor,
        justifyContent: "center",
        alignItems: "center"
    },
    numTxt: {
        color: COLORS.white,
        fontSize: 10
    }
});


export default styles