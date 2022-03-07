import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GoBackButton from '../GoBackButton';
import { Ionicons } from '@expo/vector-icons';
import themes from '../../assets/themes/themes';
import JoinButton from './JoinButton';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function RoomInfo({ navigation }) {
  const DATA = [
    {
      id: '1',
      title: "16oz Lasagna Noodles",
    },
    {
      id: '2',
      title: '4 Cups Mozzarella',
    },
    {
      id: '3',
      title: '36oz Pasta Sauce',
    },
    {
      id: '4',
      title: '1 Onion',
    },
    {
      id: '5',
      title: '1lb Ground Beef',
    },
    {
      id: '6',
      title: '0.5 Cup Parmasan',
    },
    {
      id: '7',
      title: 'Salt',
    },
    {
      id: '8',
      title: 'Pepper',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Entypo name="dot-single" size={24} color="black" />
      <Text style={themes.time}>{title}</Text>
    </View>
  );

  const renderItem = (item) => (
    <Item title={item.title} />
  );

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={35} color="black" />
        </Pressable>
        <Text style={styles.title}>ITALIAN NIGHT: LASAGNA</Text>
      </View>

      <View style={styles.photo}>
        <Image source={require('../../assets/rooms/italian.png')} style={styles.image} />
      </View>

      <JoinButton title="JOIN" />

      <View style={styles.details}>
        <View style={styles.detailsrow}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={themes.time}>By Chef Bruno</Text>
        </View>
        <View style={styles.detailsrow}>
          <FontAwesome5 name="calendar-alt" size={24} color="black" />
          <Text style={themes.time}> Saturday, February 7 2022</Text>
        </View>
        <View style={styles.detailsrow}>
          <FontAwesome5 name="clock" size={24} color="black" />
          <Text style={themes.time}>7:30 - 8:30PM</Text>
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>INGREDIENTS</Text>
      </View>

      <SafeAreaView style={styles.ingredients}>
        <FlatList
          data={DATA} // the array of data that the FlatList displays
          renderItem={({item}) => renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id} // unique key for each item
        />
      </SafeAreaView>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: themes.bgSecondary,
  },
  header: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    alignContent: 'center',
  },
  title: {
    flex:1,
    fontFamily: 'MontserratBold',
    fontWeight: 'bold',
    fontSize: 20,
    // justifyContent: 'center',
    textAlignVertical: 'center',
    // alignContent: 'center',
    
  },
  photo: {
    flex: 5,
  },
  image: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    alignSelf: 'center',
  },
  details: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: themes.bgPrimary,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    padding: 6,
  },
  detailsrow: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 3,
    margin: 5,
  },
  ingredients: {
    flex: 6,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themes.bgPrimary,
    borderRadius: 8,
  },
});