import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import themes from '../../assets/themes/themes';
import { MaterialIcons } from '@expo/vector-icons';

export default function SaveToCalButton() {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.name}>SAVE TO CALENDAR</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: '100%',
        height: '50%',        
        justifyContent: "center",
        backgroundColor: themes.buttonBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'MontserratBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
