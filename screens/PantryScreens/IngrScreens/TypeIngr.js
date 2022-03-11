import * as React from 'react';
import { Text, View, StyleSheet, Pressable, FlatList, Button, Image } from 'react-native';

import TextField from '../../../components/TextField';
import MicBut from './MicBut';
import TypeBut from './TypeBut';
import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PlusButton from '../../../components/PlusButton';
import DoneBut from './DoneBut';
// import themes from '../../assets/themes/themes';

export default function TypeIngr({ navigation }) {

  const DATA = [
    {
      id: '1',
      placeholder: 'Ingredient: '
    },
    {
      id: '2',
      placeholder: 'Ingredient: '
    },
    {
      id: '3',
      placeholder: 'Ingredient: '
    },
    {
      id: '4',
      placeholder: 'Ingredient: '
    },
    {
      id: '5',
      placeholder: 'Ingredient: '
    },
  ];

  const renderItem = (item) => (
    <TextField
      placeholder={item.placeholder}
      id={item.id}
    />

  );


  return (
 
    <View style={styles.container}>
      <View style={styles.col1}>
        <Pressable style={styles.BackButtonBox} onPress={() => navigation.navigate('PantryScreen')}>
          <Ionicons name="chevron-back" size={35} color="black" />
        </Pressable>

      </View>
      <View style={styles.col2}>
        <Text style={themes.pantryText}>BEGIN TYPING INGREDIENTS OR SELECT VOICE TO USE DICTATION TO ADD INGREDIENTS</Text>
      </View>
      <View style={styles.col3}>
        <PlusButton style={styles.plus} screen='TypeIngr' />
      </View>
      <View style={styles.col4}>
        <FlatList
          data={DATA} // the array of data that the FlatList displays
          renderItem={({ item }) => renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id} // unique key for each item
        />
      </View>
      <View style={styles.col5}>

        <MicBut bgColor={themes.buttonBackground} />
        <TypeBut bgColor={themes.bgSecondary} />
      </View>
      <View style={styles.col6}>
      
        <DoneBut></DoneBut>
      </View> 


       {/* <View style={styles.container}>
        <View backgroundColor='orange' style={styles.button}>
          <Entypo name="plus" size={30} color="white" />
        </View>
      </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.bgSecondary,
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',

  },

  BackButtonBox: {
    //flex: 1,
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
      // backgroundColor:'pink',
  },
  col1: {
    flex: .2,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:'pink',
      flexDirection:'row',
      justifyContent: 'flex-start',
      paddingLeft: 12,
      paddingTop: 12,
  },
  col2: {
    flex: .2,
    paddingHorizontal:12,
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
      // backgroundColor:'cyan',
  },
  col3: {
    flex: .2,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
    backgroundColor:'green',
    
  },
  col4: {
    flex: 1,
    justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'purple',
  },
  plus: {
    // width: '50%',
      // backgroundColor:'purple',
  },
  col5: {
    flex: .4,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: '16%',
      // backgroundColor:'red',

  },
  col6: {
    flex: .35,

    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //   backgroundColor:'brown',
  },


});


