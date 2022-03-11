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
        <Text style={themes.pantryText}>BEGIN TYPING INGREDIENTS OR SELECT THE VOICE BUTTON TO USE DICTATION</Text>
      </View>
      <View style={styles.col3}>
     
            <View style={styles.plus}>
                <Entypo name="plus" size={30} color="white" />
            </View>
      
      </View>
      <View style={styles.col4}>
        <FlatList
          data={DATA} // the array of data that the FlatList displays
          renderItem={({ item }) => renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id} // unique key for each item
        />
      </View>
      <View style={styles.col56}>
        <View style={styles.col5}>

          <MicBut bgColor={themes.buttonBackground} />
          <TypeBut bgColor={themes.bgSecondary} />
        </View>
        <View style={styles.col6}>
          <DoneBut></DoneBut>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    paddingTop: 12,
  },
  col2: {
    flex: .2,
    paddingHorizontal: 12,
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
    // backgroundColor:'cyan',
  },

  col4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'purple',
  },
  col5: {
    // flex: .4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
 
    // backgroundColor:'red',

  },
  col6: {
    // flex: .35,
    flexDirection: 'row',
    // flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //   backgroundColor:'brown',
  },
  col56: {
    flex: .75,
    flexDirection: 'column',
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: 'green',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
  },
  col3: {
    flex: .2,
    paddingRight: 45,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    // backgroundColor:'purple',

  },
  plus: {
    //width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    // width: 100,
    backgroundColor: themes.buttonBackground,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
    borderRadius: 35,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
},


});


