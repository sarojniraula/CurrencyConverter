import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'

import colors from "../constants/colors"

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 16,
        color: colors.text
    },
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})

export const RowItem = ({title, rightIcon, onPress}) => {
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
            {rightIcon}
        </TouchableOpacity>
    )
}

export const SafeView = () => <View style={styles.container} />

export const RowSeparator = () => <View style={styles.separator} />