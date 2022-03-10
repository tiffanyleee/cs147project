import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../../assets/themes/themes';

export default function IngButton({ bgColor, ingPressed, action}) {
  return (
    <Pressable onPress={() => {this.props.action}}>
        <View style={styles.button} backgroundColor={bgColor}>
            <Text style={styles.name} >INGREDIENTS</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
        borderRadius: 20,
        borderColor: themes.buttonBackground,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 10,
        alignItems: 'center',
        margin: 5,
    },
    name: {
        fontSize: 19,
        fontFamily: 'MontserratSemiBold',
        padding: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'black'
    },
});
