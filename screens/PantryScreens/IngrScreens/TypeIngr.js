import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Button, Image } from 'react-native';

import MicBut from './MicBut';
import TypeBut from './TypeBut';
import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
import { Ionicons } from '@expo/vector-icons';
// import themes from '../../assets/themes/themes';

export default function TypeIngr({ navigation }) {
  
  return (
    <View>
      <Pressable style={styles.BackButtonBox} onPress={() =>  navigation.navigate('PantryScreen')}>
        <Ionicons name="chevron-back" size={35} color="black" />
      </Pressable>

  
      <Text>BEGIN TYPING INGREDIENTS OR SELECT VOICE TO USE DICTATION TO ADD INGREDIENTS</Text>
      <MicBut bgColor={themes.buttonBackground}/> 
      <TypeBut bgColor={themes.bgSecondary}/>

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


