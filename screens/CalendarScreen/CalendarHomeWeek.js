import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, Alert, TouchableOpacity, Modal } from 'react-native';
import themes from '../../assets/themes/themes';
import MonthViewButton from './MonthViewButton';
import WeekViewButton from './WeekViewButton';
import PlusButton from '../../components/PlusButton';



export default function CalendarHomeWeek({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (    
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={themes.header}>MEAL PLANS</Text>
                <View style={styles.view}>
                    <MonthViewButton bgColor={themes.buttonBackground} />
                    <WeekViewButton bgColor={themes.bgSecondary} />
                </View>
                {/* <PlusButton title="+"/> */}
            </View>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text style={themes.header}>ITALIAN COOKEE ROOM</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.calendar}>
                <Pressable
                    onPress={() => setModalVisible(true)}
                >
                    <View style={styles.calendar}>
                        <Image source={require('../../assets/rooms/Calendar.png')} style={styles.image} />
                    </View>
                </Pressable>
            </View>

            {/* <View style={styles.top}> */}
            {/* <Text style={themes.header}>MEAL PLANS</Text> */}
            {/* <View style={styles.view}>
                    <MonthViewButton bgColor={themes.buttonBackground} />
                    <WeekViewButton bgColor={themes.bgSecondary} />
                </View> */}
            {/* <PlusButton title="+"/> */}
            {/* </View> */}
            {/* <View style={styles.calendar}>
                <Pressable onPress={() => navigation.navigate('CalendarHome')}>
                    <Image source={require('../../assets/rooms/Calendar.png')} style={styles.image} />
                </Pressable>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        // alignItems: "center",
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: "center",
    },
    top: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    view: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center'
    },
    calendar: {
        flex: 5,
        padding: 5,
    },
    image: {
        width: '100%',
    },
    modalView: {
        margin: 20,
        backgroundColor: themes.bgPrimary,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});