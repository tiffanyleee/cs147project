import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import GoBackButton from './GoBackButton';

export default function ScreenOne({ navigation }) {
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>Settings!!</Text>
      <GoBackButton title="Go Back To Menu"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});