import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// import ScreenOne from '../ScreenOne';
// import ScreenTwo from '../ScreenTwo';
// import ScreenToImplement from '../ScreenToImplement';
import { Themes } from "../../assets/themes";
import themes from '../../assets/themes/themes';
// import text from '../../assets/themes/text';
// import { Feather } from '@expo/vector-icons';
// import CalendarButton from '../HomeScreen/CalendarButton';
// import CookeeRoomsButton from './CookeeRoomsButton';
// import PantryButton from './PantryButton';
// import PlusButton from './PlusButton';
// import { WebView } from 'react-native-webview';
// import { Linking } from 'react-native';


export default function PantryScreen({ navigation }) {
  return (
    <View style={styles.PantryScreen}>

      <Image source={require('../../assets/pantryimg.jpeg')}style={styles.top}>

      </Image>
      <View style={styles.middle}>
        <Text>Hello</Text>
      </View>

      <View style={styles.bottom}>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PantryScreen: {
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
    backgroundColor: themes.bgSecondary,
  },
  text: {
    fontSize: 32,
  },
  top: {
    backgroundColor: 'purple',
    flex: 1,
  },

  // middle: {
  //   display: "flex",
  //   backgroundColor: 'yellow'
  //   flex: 1,
    
  // },
  // bottom: {
  //   display: flex,
  //   backgroundColor: 'blue'
  //   flex: 1,
  
  // },
});