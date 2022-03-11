import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable, FlatList, Image } from 'react-native';
import TextFieldStop from './TextFieldStop';

import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
import { Ionicons } from '@expo/vector-icons';
// import themes from '../../assets/themes/themes';
import DoneBut from './DoneBut';

export default function StopIngr({ navigation }) {
  const DATA = [
    {
      id: '1',
      placeholder: 'Pasta'
    },
    {
      id: '2',
      placeholder: 'Pasta Sauce'
    },
    {
      id: '3',
      placeholder: 'Onion'
    },
    {
      id: '4',
      placeholder: 'Basil'
    },
    {
      id: '5',
      placeholder: 'Cheese'
    },
  ];

  const renderItem = (item) => (
    <TextFieldStop
      placeholder={item.placeholder}
      id={item.id}
    />
    // <Text> {item.placeholder}</Text>,
    // <Text>{item.id}</Text>
  );
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable style={styles.BackButtonBox} onPress={() => navigation.navigate('AddIngr')}>
          <Ionicons name="chevron-back" size={35} color="black" />
        </Pressable>
      </View>
      <View style={styles.mid}>

        <View style={styles.mid1}>
          <Pressable onPress={() => navigation.navigate('ListenIngr')}>
            <Image source={require('../../../assets/pantry/CookeeOff.png')} />
          </Pressable>
        </View>
        <View style={styles.mid2}>
          <Text style={themes.pantryText}>TAP COOKEE TO RESUME VOICE TO TEXT OR TAP INGREDIENT TO EDIT</Text>

        </View>

        <View style={styles.mid3}>
          <FlatList
            data={DATA} // the array of data that the FlatList displays
            renderItem={({ item }) => renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id} // unique key for each item
          />
        </View>
        <View style={styles.mid4}>
          <DoneBut></DoneBut>
        </View>
      </View>
      <View style={styles.right}>

      </View>

    </View>





  );
}
{/* // placeholderTextColor={'#283'} */ }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themes.bgSecondary,
  },
  left: {
    flex: .1,
    //backgroundColor: 'red',
    paddingTop: 12,
    paddingLeft: 12,
  },
  mid: {

    flex: .8,
  },
  right: {

    flex: .1,
  },
  midCol: {
    flex: 1,
    flexDirection: 'column',
  },
  mid1: {
    flex: .45,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid2: {
    flex: .1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid3: {
    flex: .3,
 
    
  },
  mid4: {
    flex: .1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


