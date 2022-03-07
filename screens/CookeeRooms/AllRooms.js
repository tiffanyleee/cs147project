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
            <Text style={styles.screenOneText}>All Rooms</Text>
            <Button title="to room info" onPress={() => navigation.navigate('RoomInfo')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.bgSecondary,
    },
    screenOneText: {
        fontSize: 32,
    },
});