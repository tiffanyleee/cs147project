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

import { Themes } from "../../assets/themes";
import themes from '../../assets/themes/themes';
import { ImageBackground } from 'react-native';
import PlusButton from '../../components/PlusButton';
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
      <ImageBackground source={require('../../assets/pantryimg.jpeg')}style={styles.top}>
        <View style={styles.topBanner}>
            <Text style={themes.header}>WELCOME TO YOUR PANTRY</Text>
            <Text style={{textAlign: 'center'}}>Add ingredients to your pantry and view your recipies</Text>
            <View style={styles.pantryItems}>
              <Text style={themes.text}>35 Items</Text>
              <Text style={themes.text}>10 Recipes</Text>
            </View>
        </View>
      </ImageBackground>
      <View style={styles.middle}>
        <View style={styles.mid1}>
          <View style={styles.ingredients}>
            <Text style={themes.header}>ADD INGREDIENTS</Text>
            <Text style={themes.text}>Click the + to tell cookee what is in your pantry</Text>
          </View>
          <View style={{flex: 1, paddingRight: 10}}>
            <PlusButton title="+" />
          </View>
        </View>
        <View style={styles.mid2}>
          <Text>test</Text>
        </View>
        <View style={styles.mid3}>
          <Text>test</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>It's Me</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PantryScreen: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red'
    //backgroundColor: themes.bgSecondary,
  },
  text: {
    fontSize: 32,
  },
  top: {
    flex: .8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBanner: {
    width: '90%',
    // backgroundColor: themes.bgSecondary,
    backgroundColor: themes.bgSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    //borderColor: 'black',
  },
  innerBannerBoxes: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  middle: {
    display: "flex",
    backgroundColor: themes.bgSecondary,
    flex: 1,
    width: '100%',
    padding: 8,
    justifyContent: 'center',
  },
  mid1: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  ingredients: {
    padding: 4,
    flex: 4,
    flexDirection: 'column',
    margin: 5, 
  },
  mid2: {
    flex: 1, 
    backgroundColor: 'pink',
  },
  mid3: {
    flex: 1,
    backgroundColor: 'green',
  },
  bottom: {
    display: 'flex',
    backgroundColor: 'blue',
    flex: 1,
  
  },
  pantryItems: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    margin: 15,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  item: {
    fontFamily: 'WorkSans',
    fontSize: 16,
    flexDirection: 'row',
    padding: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});