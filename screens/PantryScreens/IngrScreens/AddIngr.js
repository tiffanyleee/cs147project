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
      <View style={styles.topHalf}>
        <View style={styles.left}>
          <Pressable style={styles.BackButtonBox} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={35} color="black" />
          </Pressable>
        </View>
        <View style={styles.mid}>
          <View style={styles.midCol}>
            <View style={styles.topCol}>
              <Pressable style={styles.press} onPress={() => navigation.navigate('ListenIngr')}>
              <Image style= {styles.image} source={require('../../../assets/cookeeQ.png')} />
              </Pressable>
            </View>
            <View style={styles.centerCol}>
              <Text style={themes.pantryText} >TAP COOKEE TO START DICTATING INGREDIENTS OR SELECT TEXT BUTTON TO TYPE INGREDIENTS</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.right} />

      </View>
      <View style={styles.bottomHalf}>
          <View style={styles.botCol}>
            <MicBut style={styles.mic} bgColor={themes.bgSecondary} />
            <TypeBut style={styles.voz} bgColor={themes.buttonBackground} />
          </View>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  // mic: {
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  // },
  image: {
    // width: undefined,
    // width: '100%',
    height: '78%',
    aspectRatio: 1,
    borderRadius: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    overflow: 'hidden',
},
  bottomHalf: {
    flex: .75,
    flexDirection: 'column',
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  topHalf: {
    flex: 1.6,
    flexDirection: 'row',
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'purple'
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: themes.bgSecondary,
  },
  left: {
    flex: .1,
    // backgroundColor: 'red',
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
    flexDirection: 'column',
  },
  topCol: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:60,
  },
  centerCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  botCol: {
    flex: .45,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // // paddingHorizontal: 20,
  },

});


