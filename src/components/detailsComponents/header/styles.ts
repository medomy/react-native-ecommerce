import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    headerContainer: {
        position: "absolute",
        top: 2 * SIZES.margin2,
        flexDirection: "row",
        paddingHorizontal: 1.5 * SIZES.padding2,
        justifyContent: "space-between",
        width : SIZES.fullWidth
    },
    btn: {
        width: 2 * SIZES.iconSize2,
        height: 2 * SIZES.iconSize2,
        borderRadius: SIZES.iconSize2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        marginHorizontal: SIZES.margin
    },
    row: {
        flexDirection: "row"
    }

});

export default styles;