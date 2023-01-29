import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { Color } from '../../../types/color'
import ColorCard from '../colorCard'

const colors: Color[] = [
    {
        name: "fohlo2y",
        hex: COLORS.firstColor
    },
    {
        name: "light blue",
        hex: COLORS.lightBlue
    },
    {
        name: "black",
        hex: COLORS.black
    },
    {
        name: "light pink",
        hex: COLORS.lightPink
    },
    {
        name: "light violit",
        hex: COLORS.lightViolit
    },

]
interface props {
    setColorForCart: (c: Color) => void
}
const ColorsList = ({ setColorForCart }: props) => {
    const [selectedColor, setSelectedColor] = useState<Color>({
        name: "fohlo2y",
        hex: COLORS.firstColor
    });
    const selectColor = (c: Color) => {
        setSelectedColor(c);
        setColorForCart(c);
    }
    const listRenderer: ListRenderItem<Color> = ({ item }) => (<ColorCard color={item} selectedColor={selectedColor} selectColor={selectColor} />)

    return (
        <View style={styles.container}>
            <Text style={styles.colorTxt}>Color : {selectedColor.name}</Text>
            <FlatList
                data={colors}
                renderItem={listRenderer}
                keyExtractor={(item) => item.hex}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default ColorsList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin2
    },
    colorTxt: {
        color: COLORS.darkgray,
        fontWeight: "900",
        ...FONTS.h3,
        marginBottom: SIZES.margin
    }
})