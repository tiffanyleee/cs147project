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
    <View style={styles.main}>
      <View style={styles.left}>
        <Pressable style={styles.BackButtonBox} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={35} color="black" />
        </Pressable>
      </View>
      <View style={styles.mid}>
        <View style={styles.midCol}>
          <View style={styles.topCol}>
            <Pressable onPress={() => navigation.navigate('ListenIngr')}>
              <Image source={require('../../../assets/pantry/CookeeOff.png')} />
            </Pressable>
          </View>
          <View style={styles.centerCol}>
            <Text style={themes.pantryText} >TAP COOKEE TO START DICTATING INGREDIENTS OR SELECT THE PENCIL TO TYPE INGREDIENTS</Text>
          </View>
          <View style={styles.botCol}>
            <MicBut bgColor={themes.bgSecondary} />
            <TypeBut bgColor={themes.buttonBackground} />
          </View>
        </View>
      </View>
      <View style={styles.right} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themes.bgSecondary,
  },
  left: {
    flex: .1,
    //backgroundColor: 'red',
    paddingTop: 12,
    paddingLeft: 12,
  },
  mid: {
    flex: .8
  },
  right: {
    flex: .1,
    //backgroundColor: 'red',
  },
  midCol: {
    flex: 1,
    flexDirection:'column',
  }, 
  topCol: {
    flex: .45,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  centerCol: {
    flex: .1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  botCol: {
    flex: .45,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 20,
  }, 
});


