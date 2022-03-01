import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export default function YellowButton(props) {
    // props = {
    //  onPress,
    //  title
    //}
    // props.printFunction();

    return (
        <Pressable onPress={props.onPress} >
            <Text>{props.title}</Text>
            <Image />
        </Pressable>
    )
}

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