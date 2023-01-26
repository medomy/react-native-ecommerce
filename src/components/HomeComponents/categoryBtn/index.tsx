import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode';
import styles from './styles';
import { COLORS } from '../../../constants';

interface props {
    selectedCategory: string,
    selectCategory: (category: string) => void,
    category: string
}
export default function CategoryBtn({ selectCategory, selectedCategory, category }: props) {
    const isSelected = category === selectedCategory;
    const isDark = useIsDarkMode();
    return (
        <TouchableOpacity
            style={[styles.btn, { backgroundColor: isSelected && isDark ? COLORS.white : isSelected && !isDark ? COLORS.primary : !isSelected && isDark ? COLORS.primary : COLORS.white }]}
            onPress={() => selectCategory(category)}>
            <Text style={[styles.txt, { color: isSelected && isDark ? COLORS.black : isSelected && !isDark ? COLORS.white : !isSelected && isDark ? COLORS.white : COLORS.primary }]}>{category}</Text>
        </TouchableOpacity >
    )
}