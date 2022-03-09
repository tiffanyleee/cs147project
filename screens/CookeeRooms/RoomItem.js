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



// export default function RoomItem({ room, id, imagePath }) {
export default function RoomItem({ room, day, imageurl, screen }) {
    const navigation = useNavigation(); 

    return (
        <View style={styles.item}>
            <Pressable onPress={() => navigation.navigate(screen)}>
                <Image style={styles.image} source={{uri : imageurl}} /> 
            </Pressable>
            <View style={styles.textSection}>
                <Pressable onPress={() => navigation.navigate(screen)}>
                    <Text style={[themes.header]}>{room}</Text>
                    <Text style={[themes.time]}>{day}</Text>
                </Pressable>
            </View>
      {/* <Image source={imagePath} style={styles.image} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSection: {
        flex: 1,
        padding: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        padding: 4,
    },
    image: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        margin: 5,
        resizeMode: 'contain',
        borderRadius: 15,
    },
});