import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import { useGetAllCategoriesQuery } from '../../../store/slices/productSlice'
import { FlatList } from 'react-native'
import { ListRenderItem } from 'react-native'
import CategoryBtn from '../categoryBtn'

interface props {
    selected: string,
    setSelected: (category: string) => void
}
const CategoriesList = ({ selected, setSelected }: props) => {
    const { data } = useGetAllCategoriesQuery();

    const selectCategory = (cat: string) => {
        setSelected(cat);
    }
    const listRenderer: ListRenderItem<string> = ({ item }) => (<CategoryBtn selectedCategory={selected} selectCategory={selectCategory} category={item} />);
    return (
        <View style={styles.container}>
            {data ?
                <FlatList
                    data={["All", ...data]}
                    renderItem={listRenderer}
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                /> : null}
        </View>
    )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.margin
    }
})