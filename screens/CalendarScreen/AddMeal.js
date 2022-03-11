import React, { useState, useEffect } from 'react';
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
    TextInput
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import themes from '../../assets/themes/themes';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import TextField from './TextField';
import SaveToCalButton from './SaveToCalButton';
import SavedToCalButton from './SavedToCalButton';

export default function AddMeal({ navigation }) {
    const [save, setSaved] = useState(SaveToCalButton)

    const DATA = [
        {
            id: '1',
            placeholder: 'Date: '
        },
        {
            id: '2',
            placeholder: 'From: '
        },
        {
            id: '3',
            placeholder: 'To: '
        },
        {
            id: '4',
            placeholder: 'Location: '
        },
        {
            id: '5',
            placeholder: 'Details: '
        },
    ];

    const renderItem = (item) => (
        <TextField
            placeholder={item.placeholder}
            id={item.id}
        />
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
                    <Text style={styles.title}>ADD MEAL PLAN</Text>
                    <Text style={styles.text}>Add location, time, and meal details</Text>
                </View>
                <View style={styles.headerR}>
                </View>
            </View>

            <View style={styles.calendar}>
                <Calendar theme={{
                    arrowColor: 'orange',
                    selectedDayTextColor: 'black',
                    todayTextColor: themes.buttonBackground,
                    textMonthFontFamily: 'MontserratBold',
                    textDayHeaderFontFamily: 'MontserratBold',
                }}
                    // Collection of dates that have to be marked. Default = {}
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    markedDates={{
                        '2022-03-18': { selected: true, marked: true, selectedColor: themes.buttonBackground, activeOpacity: 0 },
                    }}
                />
            </View>
            <View style={styles.details}>
                <FlatList
                    data={DATA} // the array of data that the FlatList displays
                    renderItem={({ item }) => renderItem(item)} // function that renders each item
                    keyExtractor={(item) => item.id} // unique key for each item
                />
            </View>
            <View style={styles.save}>
                {/* <SaveToCalButton/> */}
                <Pressable onPress={() => setSaved(SavedToCalButton)}>
                    {save}
                </Pressable>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: themes.bgSecondary,
        width: '100%',
    },
    header: { ///
        flex: 1,
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
    calendar: {
        flex: 4,
    },
    details: {
        flex: 4,
        alignItems: 'center',
    },
    save: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});