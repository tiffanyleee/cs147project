import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, Alert, TouchableOpacity, Modal } from 'react-native';
import themes from '../../assets/themes/themes';
import MonthViewButton from './MonthViewButton';
import WeekViewButton from './WeekViewButton';
import PlusButton from '../../components/PlusButton';
import EditButton from './EditButton';


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
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ width: 60, height: 40 }}>
                        <PlusButton screen='AddMeal' />
                    </View>
                    <View style={{ width: 60, height: 40 }}>
                        <EditButton />
                    </View>
                </View>
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
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                        <Image source={require('../../assets/rooms/DayDetails.png')} style={styles.details} />
                    </View>
                </View>
            </Modal>

            <View style={styles.calendar}>
                <Pressable
                    onPress={() => setModalVisible(true)}
                >
                    <Image source={require('../../assets/rooms/Calendar.png')} style={styles.image} />
                </Pressable>
            </View>
            <View style={styles.sync}>
                <Image source={require('../../assets/rooms/Synced.png')} style={styles.syncImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        //alignItems: "center",
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
        flex: 4,
        padding: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    modalView: {
        margin: 40,
        height: 230,
        backgroundColor: themes.bgPrimary,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        alignItems: "flex-end",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    details: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        padding: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: themes.buttonBackground,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    sync: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    syncImage: {
        width: '50%',
        height: '100%',
        resizeMode: 'contain',
    },
});