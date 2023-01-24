import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#141414",
    socendry: "#e9e9e9",
    tintColor: "#fb975e",
    black: "black",
    white: "white",
    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    danger: "#df4759"
}

export const SIZES = {
    margin: 8,
    margin2: 12,
    padding: 8,
    padding2: 12,
    fullScreenWidth: width,
    fullScreenHeight: height,
    fullWidth: "100%",
    iconSize: 25,
    iconSize2: 20,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    radius: 30,
    radius2: 15,
    btnRadius: 8
}

export const FONTS = {
    largeTitle: { fontFamily: "Lato-Black", fontSize: SIZES.largeTitle, lineHeight: 40 },
    h1: { fontFamily: "Lato-Black", fontSize: SIZES.h1, lineHeight: 30 },
    h2: { fontFamily: "Lato-Bold", fontSize: SIZES.h2, lineHeight: 24 },
    h3: { fontFamily: "Lato-Bold", fontSize: SIZES.h3, lineHeight: 20 },
    h4: { fontFamily: "Lato-Bold", fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: "Lato-Regular", fontSize: SIZES.body1 },
    body2: { fontFamily: "Lato-Regular", fontSize: SIZES.body2 },
    body3: { fontFamily: "Lato-Regular", fontSize: SIZES.body3 },
    body4: { fontFamily: "Lato-Regular", fontSize: SIZES.body4 },
    body5: { fontFamily: "Lato-Regular", fontSize: SIZES.body5 },
}

