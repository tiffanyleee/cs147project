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


export default function IngItem({ title, amount, imageurl, brand}) {
    return (
        <View style={styles.item}>
            <Text>
                {title}
                 {/* {amount} {imageurl} {brand} */}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'red',
        // padding: 5,
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    // child1: {
    //     flex: .2,
    // },
    // child2: {
    //     flex: .6
    // },
    // child3: {
    //     flex: .2,
    // },
    // textSection: {
    //     flex: 1,
    //     padding: 5,
    // },
    // name: {
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     marginBottom: 5,
    // },
    // info: {
    //     fontSize: 16,
    //     color: 'black',
    //     borderWidth: 1,
    //     padding: 4,
    // },
    // image: {
    //     height: 100,
    //     width: 100,
    //     overflow: 'hidden',
    //     margin: 5,
    //     resizeMode: 'contain',
    //     borderRadius: 15,
    // },
});