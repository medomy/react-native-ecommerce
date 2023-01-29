import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    btn: {
        borderRadius: SIZES.btnRadius,
        padding: 1.8 * SIZES.padding,
        alignItems: "center",
        justifyContent: "center",
        //alignSelf: "center"
    }
});

export default styles;