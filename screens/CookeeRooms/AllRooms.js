import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Button,
    TextInput,
    FlatList,
    SafeAreaView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { db } from "../../firebase";
import { doc, getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";
import themes from '../../assets/themes/themes';
import { ListItem, SearchBar } from "react-native-elements";
import { ActivityIndicator } from 'react-native';
import RoomItem from './RoomItem';
import FilterButton from './FilterButton';
import SortButton from './SortButton';

const DATA = ['Test1', 'califonria', 'three'];
// const DATA2 = [{Day: 'Test1', Room: 'italin'}, {Day: 'califonria' }, {Day :'three'}];


export default function AllRooms({ navigation }) {
    // loading data from firebase
    // Get all documents from a collection
    const getAllDocuments = async () => {
        let allDocs = await getDocs(collection(db, "rooms"));
        // saving the array of documents (objects)
        const myArray = allDocs.docs.map((document) => {
            return document.data();
        })
        updateRooms(myArray);
        setFilterData(myArray);
    };

    // use effect for the firebase access
    useEffect(() => {
        getAllDocuments();
    }, [])


    const [DATA3, setRooms] = useState([]);
    const updateRooms = (data) => {
        // console.log("Inside update rooms");
        setRooms(data);
    }

    console.log('outside of functions');
    console.log(DATA3);
    console.log('done with outside');

    //////////////////////
    // working on text input here
    const [text, setText] = useState('');
    const [filteredData, setFilterData] = useState([]);
    const filterSearchResults = (value) => {
        setText(value);

        // if nothing, show all states
        if (!value) {
            setFilterData(DATA3);
        } else {
            // else filter by states that include text
            setFilterData(DATA3.filter((room) => room.Room.toLowerCase().includes(value.toLowerCase())));
        }
    };

    const renderItem = (item) => (
        <RoomItem
            room={item.Room}
            day={item.Day}
            imageurl={item.Image}
            screen={item.Screen}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}> Select a curated community cooking experience </Text>
                {/* </View>
                <View style={styles.flexChild2}> 
                    <SearchBar style={styles.searchBar}
                    placeholder="Search Here..."
                    /> */}

            </View>
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
                <View style={styles.searchButtons}>
                    <FilterButton title="Filter" />
                    <SortButton title="Sort"/>
                </View>
            </View>

            <SafeAreaView style={styles.rooms}>
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
    container: {
        flex: 1, // take up entire screen
        backgroundColor: themes.bgSecondary,
        padding: 8,
        justifyContent: 'space-evenly',
    },
    top: {//background container for three red boxes
        display: "flex",
        flex: 0.5, // take up entire screen
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'red',
        width: "100%",
    },
    search: {
        flex: 1.3,
        alignItems: "stretch",
        // backgroundColor: 'blue',
        width: "100%",
        flexDirection: 'column',
    },
    searchButtons: { 
        padding: 10,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    rooms: {
        flex: 8,
        width: "100%",
        padding: 8,
    },
    text: {
        fontSize: 14,
        color: themes.text,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "100%",
    },
    flexChild3: { //the thre boxes
        // flex: 0.3,
        backgroundColor: 'green',
        width: '100%',
        height: '20%',
        padding: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end", // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
        alignItems: "center" // if flexDirection === "row", alignItems handles y-axis, else: x-axis
    },
    sortButton: {
        display: "flex",
        justifyContent: "center",
        borderColor: "black",
        backgroundColor: "orange",
        borderWidth: 1,
        width: '25%',
        height: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,

    },
    filterButton: {
        display: "flex",
        justifyContent: "center",
        borderColor: "black",
        backgroundColor: "orange",
        borderWidth: 1,
        width: 24,
        height: 24,
        width: '25%',
        height: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,

    },

});