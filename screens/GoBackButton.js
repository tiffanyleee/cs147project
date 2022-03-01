import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBackButton({ title }) {
  // 
  const navigation = useNavigation();
  return (
    <Button title={title} onPress={() => navigation.goBack()} />
  );
}

const styles = StyleSheet.create({});