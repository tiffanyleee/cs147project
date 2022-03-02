import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

export default function ScreenToImplement({ route, navigation }) {
  const { message } = route.params;

  const [diceValue, setDiceValue] = useState("")

  return (
    <View style={styles.screenToImplement}>
      <Text style={styles.screenToImplement}>Screen To Implement</Text>
      <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />

      <Button title="Dice Roll" onPress={() => setDiceValue(rollDice())} />
      <Text>Dice Value: {diceValue}</Text>
      <Text>{message}</Text>

      <GoBackButton title="Go Back To home screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  screenToImplement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenToImplementText: {
    fontSize: 32,
  },
});