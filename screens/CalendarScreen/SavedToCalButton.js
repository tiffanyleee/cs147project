import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import themes from '../../assets/themes/themes';
import { MaterialIcons } from '@expo/vector-icons';

export default function SavedToCalButton() {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.name}>SAVED</Text>
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
        backgroundColor: themes.bgSecondary,
        shadowColor: themes.buttonBackground,
        shadowOpacity: 0.5,
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
        color: themes.buttonBackground,
        fontFamily: 'MontserratBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
