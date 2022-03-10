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


export default function GreekRoom({ navigation }) {
    const DATA = [
        {
            id: '4',
            title: '1 Onion',
        },
        {
            id: '5',
            title: '1lb Chickpeas',
        },
        {
            id: '6',
            title: '0.5 Cup Parmesan',
        },
        {
            id: '7',
            title: 'Salt',
        },
        {
            id: '8',
            title: 'Pepper',
        },
        {
            id: '9',
            title: 'Garlic',
        },
        {
            id: '10',
            title: 'Herbs',
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={themes.time}>{title}</Text>
        </View>
    );

    const renderItem = (item) => (
        <Item title={item.title} style={themes.text}/>
    );


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerL}>
                    <Pressable style={styles.BackButtonBox} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={35} color="black" />
                    </Pressable>
                </View>

                <View style={styles.headerM}>
                    <Text style={styles.title}>GREEK NIGHT: FALAFEL</Text>
                </View>
                <View style={styles.headerR}>
                </View>
            </View>

            <View style={styles.photo}>
                <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5f6e378c4acbe8022119165f/1625177035198-H8IVYC05ML6O24WCMMVA/PitaGreek_IG_3pitas_20201121.png?format=1000w' }} style={styles.image} />
            </View>

            <View style={styles.joinBut}>
                <JoinButton title="JOIN" />
            </View>


            <View style={styles.details}>
                <View style={styles.detailsrow}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text style={themes.time}> By Chef Mars</Text>
                </View>
                <View style={styles.detailsrow}>
                    <FontAwesome5 name="calendar-alt" size={24} color="black" />
                    <Text style={themes.time}>  Monday, February 9 2022</Text>
                </View>
                <View style={styles.detailsrow}>
                    <FontAwesome5 name="clock" size={24} color="black" />
                    <Text style={themes.time}> 7:00 - 8:30PM</Text>
                </View>
            </View>

            <View style={styles.titleBox}>
                <Text style={styles.title}>INGREDIENTS</Text>
            </View>

            <SafeAreaView style={styles.ingredients}>
                <FlatList
                    data={DATA} // the array of data that the FlatList displays
                    renderItem={({ item }) => renderItem(item)} // function that renders each item
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
        paddingHorizontal: 16

    },
    header: { ///
        flex: .8,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerL: {
        flex: 0.1,
    },
    BackButtonBox: {
        //paddingLeft: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerM: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'MontserratBold',
        fontWeight: 'bold',
        fontSize: 20,
    },

    headerR: {
        flex: 0.1,
    },

    photo: { ///
        flex: 3,
    },
    image: {
        width: undefined,
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        alignSelf: 'center',
    },

    joinBut: { ///
        flex: .8,
        justifyContent: 'center',
    },

    details: { ///
        flex: 1.3,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        //backgroundColor: themes.bgPrimary,
        borderRadius: 20,
        padding: 6,
        //width: '100%',
    },
    detailsrow: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 3,
        margin: 5,
    },

    titleBox: { ///
        flex: .5,
        justifyContent: 'center',
    },

    ingredients: { ////
        flex: 3,
    },
    item: {
        //marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: themes.bgPrimary,
        //borderRadius: 8,
    },
});