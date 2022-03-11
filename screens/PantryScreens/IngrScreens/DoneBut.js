import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../../assets/themes/themes';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function DoneBut() {
  const navigation = useNavigation();
  return (
        <Pressable onPress={() => navigation.navigate('PantryScreen')}>
            <View style={styles.button}>
                <Text style={styles.dButText}>DONE</Text>
              
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
        backgroundColor: themes.buttonBackground,
        borderColor: themes.buttonBackground,
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        alignItems: 'center',
        margin: 5,
    },
    dButText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'MontserratBold',
    //     padding: 10,
        textAlignVertical: 'center',
        textAlign: 'center',
    //     // justifyContent: 'center',
    },




});
