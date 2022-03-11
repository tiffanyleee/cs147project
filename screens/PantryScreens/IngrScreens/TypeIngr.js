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
    // <Text> {item.placeholder}</Text>,
    // <Text>{item.id}</Text>
  );


  return (
    <View>
      <Pressable style={styles.BackButtonBox} onPress={() => navigation.navigate('PantryScreen')}>
        <Ionicons name="chevron-back" size={35} color="black" />
      </Pressable>

      {/* <PlusButton screen='TypeIngr'/> */}

      <PlusButton screen='PantryScreen'/>
      <Text>BEGIN TYPING INGREDIENTS OR SELECT VOICE TO USE DICTATION TO ADD INGREDIENTS</Text>
      <View style={styles.container}>
            <View backgroundColor='orange' style={styles.button}>
                <Entypo name="plus" size={30} color="white" />
            </View>
    </View>
      <View>
        <FlatList
          data={DATA} // the array of data that the FlatList displays
          renderItem={({ item }) => renderItem(item)} // function that renders each item
                    keyExtractor={(item) => item.id} // unique key for each item
                />
      </View>

      
      

      <MicBut bgColor={themes.buttonBackground} />
      <TypeBut bgColor={themes.bgSecondary} />
      <DoneBut></DoneBut>

    </View>
    // <View style={styles.screenTwo}>
    //   <Text style={styles.screenTwoText}>Screen Two</Text>
    //   <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
    //   <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

    //   <GoBackButton title="Go Back To Screen One"/>
    // </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});


