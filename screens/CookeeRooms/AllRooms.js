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
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { db } from "../../firebase";
import { doc, getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";
import themes from '../../assets/themes/themes';
import { ListItem, SearchBar } from "react-native-elements";
import { ActivityIndicator } from 'react-native';
import RoomItem from './RoomItem';

const DATA = ['Test1', 'califonria', 'three'];
// const DATA2 = [{Day: 'Test1', Room: 'italin'}, {Day: 'califonria' }, {Day :'three'}];


export default function AllRooms({ navigation }) {
    // loading data from firebase
    //////////////////////
    // Get all documents from a collection
    const getAllDocuments = async () => {
        let allDocs = await getDocs(collection(db, "rooms"));
        // saving the array of documents (objects)
        const myArray = allDocs.docs.map((document) => {
            return document.data();
        })
        updateRooms(myArray);
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
    const [states, setStates] = useState(DATA);

    const filterSearchResults = (value) => {
        setText(value);

        // if nothing, show all states
        if (!value) {
            setStates(DATA);
        } else {
            // else filter by states that include text
            setStates(DATA.filter((state) => state.includes(value)));
        }
    };

    const renderItem = (item) => (
        <>
            {/* <Image style={{height: 400, width: 400}} source={{uri :'https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg'}} /> */}
            <RoomItem
                room={item}
            // id={item.id}
            //imagePath={item.imagePath} 
            />
        </>
    );



    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.flexChild1}>
                    <Text style={styles.text}> Join our curated community cooking experiences </Text>
                    {/* </View>
            <View style={styles.flexChild2}> 
                <SearchBar style={styles.searchBar}
                placeholder="Search Here..."
                /> */}
                    {/*<View > 
                <Image source={require('../../assets/rooms/magnifyGlass.png')} style={styles.magnifyGlass} />
            </View>*/}
                    {/* </View>
            <View style={styles.flexChild3}> 
            <Button title= "sort" style={styles.sortButton}></Button> 
            <Button title= "filter" style={styles.filterButton}></Button> */}

                    <TextInput
                        style={styles.input}
                        onChangeText={filterSearchResults}
                        value={text}
                        placeholder="Placeholder"
                    />
                    {states.map((state) => {
                        return <Text>{state}</Text>;
                    })}
                </View>

            </View>

            {/* create a flatlist of all the rooms, the data, and the image */}
            <FlatList
                data={DATA} // the array of data that the FlatList displays
                renderItem={({ item }) => renderItem(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
            />

            <View style={styles.bottom}>

                <View style={styles.roomsTile}>
                    <Pressable onPress={() => navigation.navigate('RoomInfo')}>
                        <Image source={require('../../assets/rooms/italian.png')} style={styles.image} />
                    </Pressable>
                    <Text style={themes.header}>ITALIAN NIGHT: LASAGNA</Text>
                    <Text style={themes.time}>Starting now</Text>
                </View>
                <View style={styles.roomsTile}>
                    <Pressable onPress={() => navigation.navigate('RoomInfo')}>
                        <Image source={require('../../assets/rooms/french.png')} style={styles.image} />
                    </Pressable>
                    <Text style={themes.header}>FRENCH NIGHT: ESCARGOT</Text>
                    <Text style={themes.time}>Tomorrow at 7pm</Text>
                </View>

            </View>
        </View>
    );
    //<Button title="to room info" onPress={() => navigation.navigate('RoomInfo')}/>
}

const styles = StyleSheet.create({
    roomsTile: {
        flexDirection: 'row',
    },
    image: {
        marginBottom: 5,
        height: 120,
        width: 120,
        borderRadius: 15,
    },
    container: {
        flex: 1, // take up entire screen
        backgroundColor: themes.bgSecondary,
        padding: 8,
        justifyContent: 'center',
    },
    bottom: {
        display: 'flex',
        flex: 4, // take up entire screen
        //backgroundColor: 'blue',
        marginHorizontal: 12,
        flexDirection: "column",

    },
    top: {//background container for three red boxes
        display: "flex",
        flex: 1.5, // take up entire screen
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        color: themes.text,
    },
    flexChild1: { //the thre boxes
        flex: .3,
        width: '100%',
        height: '20%',
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
        alignItems: "center" // if flexDirection === "row", alignItems handles y-axis, else: x-axis
    },
    flexChild2: { //the thre boxes
        flex: .5,
        width: '100%',
        height: '20%',
        padding: 4,
        display: "flex",
        justifyContent: "center", // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
        alignItems: "center"
        // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
        // if flexDirection === "row", alignItems handles y-axis, else: x-axis
    },
    searchBar: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: themes.searchBar,
        width: '100%',
        height: '100%',
        borderRadius: 25,
        paddingRight: 15,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    flexChild3: { //the thre boxes
        flex: 0.3,
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