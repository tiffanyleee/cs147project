import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export default function YellowButton(props) {
    // props = {
    //  onPress,
    //  title
    //  icon
    //}
    // props.printFunction();

    return (
        <Pressable onPress={props.onPress} >
            <Text style={styles.yellowButtonText}>{props.title}</Text>
            <Image style={styles.yellowButtonIcon}>{props.icon}</Image>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    yellowButtonText: {
      justifyContent: 'center',
      fontSize: 15,
      fontColor: 'white',
    },
    yellowButtonIcon: {
        height: 20,
        width: 20,
    },
    press: {
        flexDirection: 'row',
        backgroundColor: themes.buttonBackground,
        borderWidth: 0,
        borderRadius: 10,
        elevation: 3,
        overflow: 'hidden',
      },
});

// in import 
// function handlePress() {
//  magic more magic, all the magic
//}
// <YellowButton onPress={handlePress} />

// note: we do not need to define a specific function (we're using something called an anonmyous function)
// <YellowButton 
//  printFunction ={ () => console.log("I am a print function, yay!")}
  //  title = {"Yay"}
//  onPress={() => {
//  magic more magic, all the magic
//}} />