import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import MicBut from './MicBut';
import TypeBut from './TypeBut';
import { Ionicons } from '@expo/vector-icons';

import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
// import themes from '../../assets/themes/themes';

export default function AddIngr({ navigation }) {
  return (
    <View>
      <Pressable style={styles.BackButtonBox} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={35} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ListenIngr')}>
        <Image source={require('../../../assets/pantry/CookeeOff.png')} />
      </Pressable>
      {/* Image source={require('../../assets/rooms/italian.png')} */}
      <Text>TAP COOKEE TO START DICTATING INGREDIENTS OR SELECT THE PENCIL TO TYPE INGREDIENTS</Text>
      <MicBut bgColor={themes.bgSecondary} />
      <TypeBut bgColor={themes.buttonBackground}/>



      {/* width={48} height={48} >  */}

    </View>
    // <View style={styles.screenTwo}>
    //   <Text style={styles.screenTwoText}>Screen Two</Text>
    //   <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
    //   <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

    //   <GoBackButton title="Go Back To Screen One"/>
    // </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});


