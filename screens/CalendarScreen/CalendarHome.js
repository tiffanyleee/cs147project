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


export default function CalendarHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={themes.header}>MEAL PLANS</Text>
        <View style={styles.view}>
          <MonthViewButton textColor='white' bgColor={themes.bgSecondary} />
          <WeekViewButton bgColor={themes.buttonBackground} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{ width: 60, height: 40}}>
            <PlusButton />
          </View>
          <View style={{ width: 60, height: 40}}>
            <EditButton />
          </View>
        </View>
      </View>
      <View style={styles.calendar}>
        <Calendar theme={{
          arrowColor: 'orange',
          selectedDayTextColor: 'black',
          todayTextColor: themes.buttonBackground,
          textMonthFontFamily: 'MontserratBold',
          textDayHeaderFontFamily: 'MontserratBold',
        }}
          // Collection of dates that have to be marked. Default = {}

          markedDates={{
            '2022-03-04': { selected: true, marked: true, selectedColor: themes.buttonBackground, activeOpacity: 0 },
          }}
        />
      </View>
      <View style={styles.homeCal}>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>BREAKFAST</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 9:30am</Text>
            </View>
          </View>
          <Text style={themes.time}>Pack bagel and fruit cup</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>LUNCH</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 1:00pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Meet Timi at Coupa</Text>
        </View>
        <View style={styles.calItem}>
          <View style={styles.mealRow}>
            <Text style={themes.header}>DINNER</Text>
            <View style={styles.time}>
              <Feather name="clock" size={14} color="black" />
              <Text style={themes.time}> 7:15pm</Text>
            </View>
          </View>
          <Text style={themes.time}>Trader Joe's Gnocci and brussel sprouts</Text>
        </View>
      </View>
      <View style={styles.sync}>
        <Image source={require('../../assets/rooms/Synced.png')} style={styles.syncImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.bgSecondary,
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
  },
  homeCal: {
    height: '100%',
    width: '90%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.bgPrimary,
    borderRadius: 20,
    margin: 20,
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calItem: {
    width: '95%',
    padding: 5,
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