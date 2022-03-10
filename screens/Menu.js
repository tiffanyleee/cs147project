import React, {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, FlatList, Pressable} from 'react-native'; 
import themes from '../assets/themes/themes';
import MenuItem from './MenuItem'; 

export default function Menu({ route, navigation }) {
    const DATA = [
        {
          id: '1',
          name: 'HOME',
          nav: 'Home',
        },
        {
          id: '2',
          name: 'CALENDAR',
          nav: 'CalendarHome',
        },
        {
          id: '3',
          name: 'PANTRY',
          nav: 'PantryScreen',
        },
        {
          id: '4',
          name: 'COOKEE ROOMS',
          nav: 'AllRooms',
        },
        {
            id: '5',
            name: 'SETTINGS',
            nav: 'ScreenOne',
          },
      ];

      const renderItem = (item) => (
        <MenuItem
          name={item.name}
          id={item.id} 
          nav={item.nav}
          />
      );
    

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={themes.header}>MENU</Text>
          </View>
            <FlatList
                data={DATA} // the array of data that the FlatList displays
                renderItem={({item}) => renderItem(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
            />
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  screenToImplementText: {
    fontSize: 32,
  },
  header: {
    padding: 10,
  },
  item: {
  },
});