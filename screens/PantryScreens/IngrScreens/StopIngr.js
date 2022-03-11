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
          <Pressable style={styles.press} onPress={() => navigation.navigate('ListenIngr')}>
            <Image style= {styles.image} source={require('../../../assets/cookeeQ.png')} />
          </Pressable>
        </View>
        <View style={styles.mid2}>
          <Text style={themes.pantryText}>TAP COOKEE TO RESUME VOICE TO TEXT OR TAP AN INGREDIENT TO EDIT</Text>

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
  // press:{
  //   backgroundColor:'pink',
  // },
  image: {
    // width: undefined,
    // width: '.02%',
    height: '90%',
    aspectRatio: 1,
    borderRadius: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    overflow: 'hidden',
},
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themes.bgSecondary,
    
    // backgroundColor: 'purple',
  },
  left: {
    flex: .1,
    //backgroundColor: 'red',
    paddingTop: 12,
    paddingLeft: 12,
  },
  mid: {
    // backgroundColor: 'red',
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
    flex: .395,
    flexDirection:'column',
    justifyContent: 'flex-start',
    paddingTop: 60,
    alignItems: 'center',
  },
  mid2: {
    flex: .08,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mid3: {
    flex: .35,
 
    
  },
  mid4: {

    flex: .12,
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


