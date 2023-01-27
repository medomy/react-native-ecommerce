import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { FlatList } from 'react-native';
import { ListRenderItem } from 'react-native';
import SizeCard from '../sizesCard';

const SizesList = () => {
    const [selectedSize, setSelectedSize] = useState<"s" | "m" | "l" | "xl" | "xxl">("s");
    const sizes = useRef<("s" | "m" | "l" | "xl" | "xxl")[]>([
        "s", "m", "l", "xl", "xxl"
    ])
    const selectSize = (size: "s" | "m" | "l" | "xl" | "xxl") => {
        setSelectedSize(size);
    }
    const listRenderer: ListRenderItem<"s" | "m" | "l" | "xl" | "xxl"> = ({ item }) => (<SizeCard size={item} selectedSize={selectedSize} select={selectSize} />);

    return (
        <View style={styles.container}>
            <Text style={styles.sizeTxt}>Size : {selectedSize}</Text>
            <FlatList
                data={sizes.current}
                renderItem={listRenderer}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator = {false} />
        </View>
    )
}

export default SizesList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 1.5 * SIZES.padding2,
        marginVertical: SIZES.margin2
    },
    sizeTxt: {
        color: COLORS.darkgray,
        fontWeight: "900",
        ...FONTS.h3,
        marginBottom: SIZES.margin
    }
})