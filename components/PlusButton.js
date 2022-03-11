import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../assets/themes/themes';
import { Entypo } from '@expo/vector-icons'; 

export default function CookeeRoomsButton({ screen }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate(screen)}>
            <View style={styles.button}>
                <Entypo name="plus" size={30} color="white" />
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '90%',
    },
    button: {
        //width: "100%",
        flexDirection: "row",
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
