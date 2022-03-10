import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import themes from '../../assets/themes/themes';
import MonthViewButton from './MonthViewButton';
import WeekViewButton from './WeekViewButton';

export default function CalendarHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={themes.header}>MEAL PLANS</Text>
        <View style={styles.view}>
          <MonthViewButton textColor='white' bgColor={themes.bgSecondary}/>
          <WeekViewButton bgColor={themes.buttonBackground}/>
        </View>
      </View>
      <View style={styles.calendar}>
        <Text>Calendar</Text>
      </View>
      <View style={styles.day}>
        <Text>day</Text>
      </View>
      <View style={styles.sync}>
        <Text>sync</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  top: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  calendar: {
    flex: 4,
    backgroundColor: 'pink',
  },
  day: {
    flex: 4,
    backgroundColor: 'blue',
  },
  sync: {
    flex: 1,
    backgroundColor: 'green',
  },
});