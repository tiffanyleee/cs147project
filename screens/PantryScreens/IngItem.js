import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from 'react-native';
import themes from '../../assets/themes/themes';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Linking } from 'react-native';


export default function IngItem({ title, amount, imageurl, brand }) {
    return (

        <View style={styles.item}>
            <View style={styles.c1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={themes.time}>{title}</Text>
            </View>
            <View style={styles.c2}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth :1,
    borderBottomColor: '#000',
    
      
    },
    c1: {
        
      
        flexDirection: 'row',
        alignItems: 'center',
      
    },

});