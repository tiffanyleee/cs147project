import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import GoBackButton from './GoBackButton';

export default function ScreenTwo({ navigation }) {
  return (
    <View style={styles.screenTwo}>
      <Text style={styles.screenTwoText}>Screen Two</Text>
      <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
      <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

      <GoBackButton title="Go Back To Screen One"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});