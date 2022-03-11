import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
} from 'react-native';
import themes from '../../../assets/themes/themes';


export default function TextFieldStop({ placeholder }) {
    const [text, setText] = useState('');

    return (
        <View style={styles.item}>
            <TextInput
                style={styles.name}
                onChangeText={setText}
                value={text}
                placeholder={placeholder}
                placeholderTextColor = 'black'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: themes.textInput,
        padding: 14,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
    name: {
        fontFamily: 'WorkSans',
        fontSize: 15,
        color: 'black',
        width: '100%',
        height: 18,
    },
    
});