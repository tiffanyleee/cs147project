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


// export default function RoomItem({ room, id, imagePath }) {
export default function RecipieItem({ title, rating, imageurl, time}) {
    const navigation = useNavigation(); 

    return (
        <View style={styles.item}>
            <Pressable style={styles.child1} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jMq8lEu-of0')}>
                <Image style={styles.image} source={{uri : imageurl}} /> 
            </Pressable>
            <View style={styles.child2} style={styles.textSection}>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jMq8lEu-of0')}>
                    <Text > {title}</Text>
                    <Text > {rating}</Text>
                </Pressable>
            </View>
            <View style={styles.child3}>
              <Entypo name="dots-three-vertical" size={30} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        // padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    child1: {
        flex: .2,
    },
    child2: {
        flex: .6
    },
    child3: {
        flex: .2,
    }
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