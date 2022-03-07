import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import GoBackButton from '../GoBackButton';

export default function CookRoom({ navigation }) {
  return (
    <View style={styles.CookRoom}>
      <Text style={styles.CookRoomText}>RoomInfo</Text>
      <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
      <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

      <GoBackButton title="Go Back To Screen One"/>
    </View>
  );
}

const styles = StyleSheet.create({
  CookRoom: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  CookRoomText: {
    fontSize: 32,
  },
});