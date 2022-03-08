import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function CalendarHome({ navigation }) {
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>CalendarHome</Text>
      <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('ScreenTwo')}/>
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