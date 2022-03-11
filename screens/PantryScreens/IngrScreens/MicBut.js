import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../../assets/themes/themes';
import { Feather } from '@expo/vector-icons';

export default function MicBut({ bgColor }) {
    const navigation = useNavigation();
    return (
        <Pressable style= {styles.press} onPress={() => navigation.navigate('AddIngr')}>
            <View style={styles.button} backgroundColor={bgColor}>
                {/* <Feather name="mic" size={45} color="black" /> */}
                <Text style={styles.text}>
                    VOICE
                </Text>
              
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    press: {
        // width: '50%',
        // width: 130,
        // backgroundColor: 'pink',
    },
    button: {
        // width: "60%",
        width: 100,
        // height:85,
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderTopLeftRadius: 35,
        borderBottomStartRadius: 35,
        // borderBottomEndRadius
        // borderRadius: 1px 0, 0, 4px;
        // borderRadius: 35,
        borderColor: themes.buttonBackground,
        borderWidth: 1,
        // paddingHorizontal: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 15,
        alignItems: 'center',
        // margin: 5,
    },

    text: {
        fontSize: 19,
        fontFamily: 'MontserratSemiBold',
        // padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: "black",
    }
});
