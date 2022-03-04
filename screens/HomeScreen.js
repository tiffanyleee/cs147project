import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Button,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenToImplement from './ScreenToImplement';
import { Themes } from "../assets/themes";
import themes from '../assets/themes/themes';
import text from '../assets/themes/text';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.homeScreen}>
        <View style={styles.homeCal}>
          <View style={styles.calItem}>
            <View style={styles.mealRow}>
              <Text style={themes.header}>BREAKFAST</Text>
              <Text style={themes.time}>9:30am</Text>
            </View>
            <Text style={themes.time}>Pack bagel and fruit cup</Text>
          </View>
          <View style={styles.calItem}>
            <Text style={styles.header}>LUNCH</Text>
          </View>
          <View style={styles.calItem}>
            <Text style={themes.header}>DINNER</Text>
          </View>
        </View>
        <View style={styles.homePantry}>
          <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')} /> 
        </View>
        <View style={styles.homeRooms}>
          <Button title="Cookee Rooms" onPress={() => navigation.navigate('ScreenTwo')} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    homeScreen: {
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeScreenText: {
      fontSize: 32,
    },
    homeCal: {
      height: '100%',
      width: '90%',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Themes.buttonBackground,
      margin: 20,
    },
    calItem: {
      padding: 5,
      flexDirection: 'column',
    },
    mealRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    homePantry: {
      height: '100%',
      width: '90%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      },
    homeRooms: {
      height: '100%',
      width: '90%',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      margin: 20,
    },
    header: {
      fontFamily: 'Montserrat',
      fontSize: 20,
    },
    time: {
      fontFamily: 'WorkSans',
      fontSize: 15,
    },
  });