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
import themes from '../assets/themes/themes';


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
        backgroundColor: themes.buttonBackground,
        padding: 14,
        marginVertical: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});