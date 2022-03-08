import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

// export default function RoomItem({ room, id, imagePath }) {
export default function RoomItem({ room, id }) {
    return (
        <View style={styles.item}>
            <View style={styles.textSection}>
                <Text style={[styles.name]}>{room}</Text>
            </View>
      {/* <Image source={imagePath} style={styles.image} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSection: {
        flex: 1,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        padding: 4,
    },
    image: {
        width: 80,
        height: 80,
        margin: 10,
        resizeMode: 'contain'
    }
});