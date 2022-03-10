import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Pressable,
  Button,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { Themes } from "../../assets/themes";
import themes from '../../assets/themes/themes';
import { ImageBackground } from 'react-native';
import PlusButton from '../../components/PlusButton';
import RecipieItem from './RecipieItem';
// import text from '../../assets/themes/text';
// import { Feather } from '@expo/vector-icons';
// import CalendarButton from '../HomeScreen/CalendarButton';
// import CookeeRoomsButton from './CookeeRoomsButton';
// import PantryButton from './PantryButton';
// import PlusButton from './PlusButton';
// import { WebView } from 'react-native-webview';
// import { Linking } from 'react-native';

const DATA = [
  {
    id: "1",
    title: "Buncis Kuah Santan",
    rating: '4.9',
    imageurl: 'https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg',
    time: '60 mins',
  },
  {
    id: "2",
    title: "Ayam Kecap Manis",
    rating: '3.9',
    imageurl: "https://howtofeedaloon.com/wp-content/uploads/2017/08/pad-thai-instagram.jpg",
    time: '20 mins',
  },
  {
    id: "3",
    title: "Cumi Saus Telur Asin",
    rating: '2.9',
    imageurl: "https://bakeitwithlove.com/wp-content/uploads/2020/01/Hibachi-Fried-Rice-lg-sq.jpg",
    time: '30 mins',
  },
  ];

export default function PantryScreen({ navigation }) {
      //////////////////////
    // working on text input here
    const [text, setText] = useState('');
    const [filteredData, setFilterData] = useState([]);
    const filterSearchResults = (value) => {
        setText(value);

        // if nothing, show all states
        if (!value) {
            setFilterData(DATA);
        } else {
            // else filter by states that include text
            setFilterData(DATA.filter((room) => room.Room.toLowerCase().includes(value.toLowerCase())));
        }
    };

    const renderItem = (item) => (
        <RecipieItem
            title={item.Title}
            rating={item.Rating}
            imageurl={item.Image}
            time={item.Time}
        />
    );
  return (
    <View style={styles.PantryScreen}>
      <ImageBackground source={require('../../assets/pantryimg.jpeg')}style={styles.top}>
        <View style={styles.topBanner}>
            <Text style={themes.header}>WELCOME TO YOUR PANTRY</Text>
            <Text style={{textAlign: 'center'}}>Add ingredients to your pantry and view your recipies</Text>
            <View style={styles.pantryItems}>
              <Text style={themes.text}>35 Items</Text>
              <Text style={themes.text}>10 Recipes</Text>
            </View>
        </View>
      </ImageBackground>
      <View style={styles.middle}>
        <View style={styles.mid1}>
          <View style={styles.ingredients}>
            <Text style={themes.header}>ADD INGREDIENTS</Text>
            <Text style={themes.text}>Click the + to tell cookee what is in your pantry</Text>
          </View>
          <PlusButton title="+" />
        </View>
        <View style={styles.mid2}>
          <View style={styles.search}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                clearButtonMode="always"
                onChangeText={filterSearchResults}
                value={text}
                placeholder="Search"
                style={{ backgroundColor: themes.searchBar, paddingHorizontal: 20, height: 40, borderRadius: 15 }}
            />
          </View> 
        </View>
        <View style={styles.mid3}>
          <Text>test</Text>
        </View>
      </View>

      <SafeAreaView style={styles.bottom}>
        {/* create a flatlist of all the rooms, the data, and the image */}
        <FlatList
            // ListHeaderComponent={renderHeader}
            data={filteredData} // the array of data that the FlatList displays
            renderItem={({ item }) => renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id} // unique key for each item
        />
      </SafeAreaView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  PantryScreen: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red'
    //backgroundColor: themes.bgSecondary,
  },
  text: {
    fontSize: 32,
  },
  top: {
    flex: .8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBanner: {
    width: '90%',
    // backgroundColor: themes.bgSecondary,
    backgroundColor: themes.bgSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    //borderColor: 'black',
  },
  innerBannerBoxes: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  middle: {
    display: "flex",
    backgroundColor: themes.bgSecondary,
    flex: 1,
    width: '100%',
    padding: 8,
    justifyContent: 'center',
  },
  mid1: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  ingredients: {
    padding: 3,
    flex: 4,
    flexDirection: 'column',
  },
  mid2: {
    flex: 1, 
    backgroundColor: 'pink',
  },
  search: {
    flex: 1.3,
    alignItems: "stretch",
    // backgroundColor: 'blue',
    width: "100%",
    flexDirection: 'column',
},
  mid3: {
    flex: 1,
    backgroundColor: 'green',
  },
  bottom: {
    display: 'flex',
    backgroundColor: 'blue',
    flex: 1,
  
  },
  pantryItems: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    margin: 15,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
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
});