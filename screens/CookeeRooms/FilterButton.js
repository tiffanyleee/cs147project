import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../assets/themes/themes';
import { AntDesign } from '@expo/vector-icons'; 


export default function FilterButton({ title }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('AllRooms')}>
        <View style={styles.button}>
            <Text style={[styles.name]}>{title}</Text>
            <AntDesign name="filter" size={24} color="white" />
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: themes.buttonBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        marginRight: 5,
    },
    name: {
        fontSize: 19,
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
