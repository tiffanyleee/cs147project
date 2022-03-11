import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import themes from '../../assets/themes/themes';
import MonthViewButton from './MonthViewButton';
import WeekViewButton from './WeekViewButton';
import PlusButton from '../../components/PlusButton';
import EditButton from './EditButton';
// utilizing react native calendar
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';


export default function DayPlan3() {
  return (
    <View style={styles.container}>
      <View style={styles.homeCal}>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>BREAKFAST</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 7:30am</Text>
            </View>
          </View>
          <Text style={themes.time}>Eggs and Toast</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>LUNCH</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 12:10pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Pack Tuna Sandwich and Apples</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>DINNER</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 5:50pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Terun with lab</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  homeCal: {
    height: '100%',
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  mealRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  calItem: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
  },
  time: {
    fontFamily: 'WorkSans',
    fontSize: 15,
    flexDirection: 'row',
    padding: 5,
  },
  sync: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  syncImage: {
    height: '40%',
    width: '70%',
  },
});