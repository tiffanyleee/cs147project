import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../../assets/themes/themes';
import { Feather } from '@expo/vector-icons';

export default function MicBut({ bgColor }) {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('AddIngr')}>
            <View style={styles.button} backgroundColor={bgColor}>
                <Feather name="mic" size={45} color="black" />
              
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 35,
        borderColor: themes.buttonBackground,
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        alignItems: 'center',
        margin: 5,
    },
});
