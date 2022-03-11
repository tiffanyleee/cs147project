import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../../assets/themes/themes';
import { SimpleLineIcons } from '@expo/vector-icons';
import MicBut from './MicBut';

export default function TypeBut({ bgColor }) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.press} onPress={() => navigation.navigate('TypeIngr')}>
        <View style={styles.button} backgroundColor={bgColor}>
            {/* <SimpleLineIcons name="pencil" size={45} color="black" /> */}
            <Text style={styles.text}>
              TEXT
            </Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    // width: 130,
    // backgroundColor: 'cyan',
    // justifyContent:'flex-end',
},
    button: {
        // width: "75%",
        borderTopLeftRadius: 35,
        borderBottomStartRadius: 35,
        width: 100,
        // height:85,
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        // borderRadius: 35,
        borderColor: themes.buttonBackground,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 15,
        alignItems: 'center',
        // margin: 5,
        borderColor: themes.buttonBackground,
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
