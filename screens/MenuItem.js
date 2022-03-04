import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from 'react-native';
import { Themes } from "../assets/themes";
import { useNavigation } from '@react-navigation/native';


export default function GroceryItem({ name, id, nav }) {
    const navigation = useNavigation();

    return (
        <View style={styles.item}>
            <Pressable onPress={() => navigation.navigate(nav)}>
                <Text style={[styles.name, { color: 'black' }]}>{name}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Themes.buttonBackground,
        padding: 16,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});