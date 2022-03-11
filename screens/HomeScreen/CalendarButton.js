import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import themes from '../../assets/themes/themes';

export default function CalendarButton({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('CalendarHome')}>
                <View style={styles.button}>
                    <Text style={[styles.name]}>{title}</Text>
                    <AntDesign name="calendar" size={24} color="white" />
                </View>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    button: {
        //width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: themes.buttonBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,
        paddingLeft: 5,
        paddingRight: 10,
        alignItems: 'center',
        marginRight: 10,
        marginTop: 10,
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'MontserratBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
});