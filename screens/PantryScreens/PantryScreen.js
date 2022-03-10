import React, { useEffect, useState } from 'react';
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

import { Linking } from 'react-native';
import { Themes } from "../../assets/themes";
import themes from '../../assets/themes/themes';
import { ImageBackground } from 'react-native';
import PlusButton from '../../components/PlusButton';
import RecipeItem from './RecipeItem';
import RecpButton from './RecpButton';
import IngButton from './IngButton';
import IngItem from'./IngItem';
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
    imageurl: 'https://cdn-brilio-net.akamaized.net/news/2021/06/06/207299/1488567-10-resep-buncis-santan.jpg',
    time: '60 mins',
  },
  {
    id: "2",
    title: "Ayam Kecap Manis",
    rating: '3.9',
    imageurl: "https://i.pinimg.com/originals/68/6f/e3/686fe39cd97238d70523c789f983ae8f.jpg",
    time: '20 mins',
  },
  {
    id: "3",
    title: "Cumi Saus Telur Asin",
    rating: '2.9',
    imageurl: "https://th.bing.com/th/id/OIP.fMvKbIywcYlQFAyUKHbxsAHaHa?pid=ImgDet&rs=1",
    time: '30 mins',
  },
  ];

  const INGR = [
  {
    id: "1",
    title: "sugar",
    rating: '4 cups',
    imageurl: 'https://th.bing.com/th/id/R.00744a1415356ee0255cd89a38983007?rik=WYeT8DmRNF%2bEsg&riu=http%3a%2f%2fwww.healthyblackwoman.com%2fwp-content%2fuploads%2f2013%2f04%2fsugar.jpg&ehk=h%2bW37w4gMGrEISK3XxuIN4Rvv9mAXbw707pIRT9L65A%3d&risl=&pid=ImgRaw&r=0',
    time: '',
  },
  {
    id: "2",
    title: "pasta sauce",
    rating: '1 jar',
    imageurl: "https://images.albertsons-media.com/is/image/ABS/960061499?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    time: 'Barilla',
  },
  // {
  //   id: "3",
  //   title: "pasta sauce",
  //   amount: '1 jar',
  //   imageurl: "https://th.bing.com/th/id/OIP.fMvKbIywcYlQFAyUKHbxsAHaHa?pid=ImgDet&rs=1",
  //   brand: 'Classico',
  // },
  ];



export default function PantryScreen({ navigation }) {
///Bottom Component that Displays Conditionally
    const Bottom = ({ingPressed}) => {
      let content
    
      if (ingPressed) {
        content = (
          // <Text> {filteredData.toString()}</Text>
          <FlatList
                data = {filteredData}    // the array of data that the FlatList displays
                renderItem={({ item }) => renderItem(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
                // renderIng={({ing}) => renderIng(ing)} // function that renders each item
                // keyExtractor={(ing) => ing.id} // unique key for each item
                /> 
        )
      } else {
        content = (
        <FlatList 
              data = {filteredData}    // the array of data that the FlatList displays
              renderItem={({ item }) => renderItem(item)} // function that renders each item
              keyExtractor={(item) => item.id} // unique key for each item
          /> 
        )
      }
    
      return <View>{content}</View>
    }

      //////////////////////
    // working on text input here
    const [ingBg, settingBg] = useState(themes.bgSecondary);
    const [recBg, settingRBg] = useState(themes.buttonBackground);
    const [ingPressed, setPressed] = useState(true);
    const [text, setText] = useState('');
    const [allData, setAll] = useState(filteredData);
    const [filteredData, setFilterData] = useState([]);

    const filterSearchResults = (value) => {
        setText(value);

        // if nothing, show all states
        if (!value) {
            setFilterData(allData);
        } else {
            // else filter by states that include text
            setFilterData(allData.filter((recORing) => recORing.title.toLowerCase().includes(value.toLowerCase())));
        }
    };

    const ingPressedHandle = () =>  {
      setPressed(true);
      setFilterData(INGR);
      setAll(INGR);
      settingBg(themes.bgSecondary);
      settingRBg(themes.buttonBackground);
     }
     const recPressedHandle = () =>  {
      setPressed(false);
      setFilterData(DATA);
      setAll(DATA);
      settingBg(themes.buttonBackground);
      settingRBg(themes.bgSecondary);
     }
    //  handler() {


    const renderItem = (item) => (
        <RecipeItem
            title={item.title}
            rating={item.rating}
            imageurl={item.imageurl}
            time={item.time}
        />
    );
    const renderIng = (ing) => (
      <IngItem
          title={ing.title}
          amount={ing.amount}
          imageurl={ing.imageurl}
          brand={ing.brand}
      />
  );
  
    
  // use effect for the firebase access
    useEffect(() => {
      setFilterData(INGR);
    }, [])
  
  return (
    <View style={styles.PantryScreen}>
      <ImageBackground source={require('../../assets/pantryimg.jpeg')}style={styles.top}>
        <View style={styles.topBanner}>
            <Text style={themes.header}>WELCOME TO YOUR PANTRY</Text>
            <Text style={{textAlign: 'center'}}>Add ingredients to your pantry and view your recipes</Text>
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
            <Text style={themes.text}>Click the + to tell Cookee what is in your pantry</Text>
          </View>
          <View style={{flex: 1, paddingRight: 10}}>
            <PlusButton title="+" />
          </View>
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
          {/* <Text>test</Text> */}
          {/* <Text>{ingPressed.toString()}</Text> */}
            <Pressable onPress = {ingPressedHandle} >
                <View style={styles.button} backgroundColor={ingBg}>
                    <Text style={styles.butName}>INGREDIENTS</Text>
                </View>
            </Pressable>
            <Pressable onPress = {recPressedHandle} >
                <View style={styles.button} backgroundColor={recBg}>
                    <Text style={styles.butName} >RECIPES</Text>
                </View>
            </Pressable>
          {/* <IngButton bgColor={themes.bgSecondary} ingPressed={ingPressed} action={this.handler}/>
          <RecpButton bgColor={themes.buttonBackground} ingPressed={ingPressed} action={this.handler}/> */}
          
        </View>
      </View>

      <SafeAreaView style={styles.bottom}>
        <Bottom ingPressed={ingPressed}/>
        {/* <FlatList
                data = {filteredData}    // the array of data that the FlatList displays
                renderIng={({ing}) => renderIng(ing)} // function that renders each item
                keyExtractor={(ing) => ing.id} // unique key for each item
                />  */}
      </SafeAreaView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight: 10,
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: themes.buttonBackground,
},
  butName: {
    fontSize: 19,
    fontFamily: 'MontserratSemiBold',
    padding: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: "black",
},
  PantryScreen: {
    flex: 1,
    
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor: 'red'
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
    padding: 12,
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
    padding: 4,
    flex: 4,
    flexDirection: 'column',
    margin: 5, 
  },
  mid2: {
    flex: 1, 
    //backgroundColor: 'pink',

  },
  search: {
    flex: 1.3,
    alignItems: "stretch",
    // backgroundColor: 'blue',
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
},
  mid3: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    //backgroundColor: 'green',
  },
  bottom: {
    display: 'flex',
    //backgroundColor: 'blue',
    flex: 1,
    //padding: 30,
  
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
  // ing: {
  //   fontFamily: 'WorkSans',
  //   fontSize: 16,
  //   flexDirection: 'row',
  //   padding: 5,
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },
});