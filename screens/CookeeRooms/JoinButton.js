import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../assets/themes/themes';
import { Linking } from 'react-native';

export default function JoinButton({ title }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => Linking.openURL('https://stanford.zoom.us/my/lights?pwd=TmxXUXNTMzVSQ2FINTBiZjRMa3d4QT09')}>
        <View style={styles.button}>
            <Text style={[styles.name]}>{title}</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: themes.buttonBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,
        //margin: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
