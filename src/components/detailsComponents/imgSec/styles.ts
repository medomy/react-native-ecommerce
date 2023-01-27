import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.socendry,
        width: SIZES.fullWidth,
        height: 0.5 * SIZES.fullScreenHeight,
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative"
    },
    img: {
        width: "60%",
        height: 0.4 * SIZES.fullScreenHeight,
        resizeMode: "contain"
    }
});

export default styles;