import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable, FlatList, Image } from 'react-native';
import TextField from '../../../components/TextField';

import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
import { Ionicons } from '@expo/vector-icons';
// import themes from '../../assets/themes/themes';
import DoneBut from './DoneBut';

export default function StopIngr({ navigation }) {
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
      <Pressable style={styles.BackButtonBox} onPress={() => navigation.navigate('AddIngr')}>
        <Ionicons name="chevron-back" size={35} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ListenIngr')}>
        <Image source={require('../../../assets/pantry/CookeeOff.png')} />
      </Pressable>
      <Text>TAP COOKEE TO RESUME VOICE TO TEXT OR TAP INGREDIENT TO EDIT</Text>

      <View>
        <FlatList
          data={DATA} // the array of data that the FlatList displays
          renderItem={({ item }) => renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id} // unique key for each item
        />
      </View>
      <DoneBut></DoneBut>

      {/* width={48} height={48} >  */}

    </View>
    // <View style={styles.screenTwo}>
    //   <Text style={styles.screenTwoText}>Screen Two</Text>
    //   <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
    //   <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

    //   <GoBackButton title="Go Back To Screen One"/>
    // </View>
  );
}
// placeholderTextColor={'#283'}

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


