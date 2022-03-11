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

import ScreenOne from '../ScreenOne';

import ScreenToImplement from '../ScreenToImplement';
import { Themes } from "../../assets/themes";
import themes from '../../assets/themes/themes';
import text from '../../assets/themes/text';
import { Feather } from '@expo/vector-icons';
import CalendarButton from './CalendarButton';
import CookeeRoomsButton from './CookeeRoomsButton';
import PantryButton from './PantryButton';
import PlusButton from '../../components/PlusButton';
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeCal}>
        <CalendarButton title="FRIDAY, MARCH 11" />
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>BREAKFAST</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 9:30am</Text>
            </View>
          </View>
          <Text style={themes.time}>Pack bagel and fruit cup</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>LUNCH</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 1:00pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Meet Timi at Coupa</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>DINNER</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 7:15pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Trader Joe's Gnocci and brussel sprouts</Text>
        </View>
      </View>

      <View style={styles.homePantry}>
        <View style={styles.homePantryButtons}>
          <PantryButton title="YOUR PANTRY" />
          <PlusButton screen='AddIngr'/>
        </View>
        <Text style={themes.time}>View current ingredients and recipes</Text>
        <View style={styles.pantryItems}>
          <Text style={styles.text}>35 Items</Text>
          <Text style={styles.text}>10 Recipes</Text>
        </View>
      </View>

      <View style={styles.homeRooms}>
        <CookeeRoomsButton title="COOKEE ROOMS" />
        <Text style={themes.time}>Join upcoming community cooking experiences</Text>
        <View style={styles.roomsTile}>

          <View style={styles.roomsDetails}>
            <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jMq8lEu-of0')}>
              <Image source={require('../../assets/rooms/italian.png')} style={styles.image} />
            </Pressable>
            <Text style={themes.header}>ITALIAN NIGHT: LASAGNA</Text>
            <Text style={themes.time}>Starting now</Text>
          </View>

          <View style={styles.roomsDetails}>
            <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pEQ7_6ZE_Yw')}>
              <Image source={require('../../assets/rooms/french.png')} style={styles.image} />
            </Pressable>
            <Text style={themes.header}>FRENCH NIGHT: ESCARGOT</Text>
            <Text style={themes.time}>Tomorrow at 7pm</Text>
          </View>
        </View>
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
    backgroundColor: themes.bgSecondary,
  },
  homeScreenText: {
    fontSize: 32,
  },
  homeCal: {
    height: '100%',
    width: '95%',
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: themes.bgPrimary,
    margin: 20,
    borderRadius: 20,
    paddingLeft: 10,
  },
  calItem: {
    width: '95%',
    padding: 5,
    flexDirection: 'column',
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homePantry: {
    height: '100%',
    width: '95%',
    flex: 2,
    // alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: themes.bgPrimary,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pantryItems: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    textAlignVertical: 'center',
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
  homeRooms: {
    height: '100%',
    width: '95%',
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: themes.bgPrimary,
    margin: 20,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
  roomsTile: {
    flexDirection: 'row',
    width: '100%',
  },
  roomsDetails: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 5,
  },
  image: {
    marginBottom: 5,
    height: 120,
    width: 120,
    borderRadius: 15,
  },
  homePantryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    // fontWeight: 'bold',
    fontFamily: 'MontserratBold',
    fontSize: 20,
    flex: 1,
  },
  time: {
    fontFamily: 'WorkSans',
    fontSize: 15,
    flexDirection: 'row',
    padding: 5,
  },
});