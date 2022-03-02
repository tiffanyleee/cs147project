import React, {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, FlatList, Pressable} from 'react-native'; 
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
          name: 'Calendar',
          nav: 'ScreenOne',
        },
        {
          id: '3',
          name: 'Pantry',
          nav: 'ScreenOne',
        },
        {
          id: '4',
          name: 'Cookee Rooms',
          nav: 'ScreenOne',
        },
        {
            id: '5',
            name: 'Settings',
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
        <SafeAreaView style={styles.screenToImplement}>
            <FlatList
                data={DATA} // the array of data that the FlatList displays
                renderItem={({item}) => renderItem(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
            />
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
  screenToImplement: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenToImplementText: {
    fontSize: 32,
  },
});