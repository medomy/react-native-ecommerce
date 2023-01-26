import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container : {
        width : SIZES.fullWidth,
        paddingHorizontal :1.5* SIZES.padding2,
        marginVertical : SIZES.margin
    },
    img : {
        width : SIZES.fullWidth,
        height : 0.25 * SIZES.fullScreenHeight,
        borderRadius : SIZES.radius2
    }
});

export default styles;