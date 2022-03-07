import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Button,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { db } from "../../firebase";
import { doc, getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";
import themes from '../../assets/themes/themes';
import { ListItem, SearchBar } from "react-native-elements";

export default function AllRooms({ navigation }) {
    // Retrieiving a document from Firestore
    const getDocument = async () => {
        const docRef = doc(db, "rooms", "French-Night");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    };

    // Get all documents from a collection
    const getAllDocuments = async () => {
        let allDocs = await getDocs(collection(db, "rooms"));

        // Printing out the array of documents (objects), probably put this in state variable
        // [ {title: Dawn FM, artist: The Weeknd }, ... ]
        console.log(
            allDocs.docs.map((document) => {
                return document.data();
            })
        );
    };

    useEffect(() => {
        getDocument();
        getAllDocuments();
    }, [])


    return (
        <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.flexChild1}> 
            <Text style={styles.text}> Join our curated community cooking experiences </Text>
            </View>
            <View style={styles.flexChild2}> 
                <SearchBar style={styles.searchBar}
                placeholder="Search Here..."
                />
            {/*<View > 
                <Image source={require('../../assets/rooms/magnifyGlass.png')} style={styles.magnifyGlass} />
            </View>*/}
            </View>
            <View style={styles.flexChild3}> 
            <Button title= "sort" style={styles.sortButton}></Button> 
            <Button title= "filter" style={styles.filterButton}></Button>
            </View>
        </View>
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
        //flexwrap: wrap,
        //width: '100%',
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

    },
    bottom: {
        display:'flex',
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
        flexDirection: "row", 
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
    magnifyGlass: {
        
        
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