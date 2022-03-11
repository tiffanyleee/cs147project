import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, Pressable } from 'react-native';
import themes from '../../assets/themes/themes';
import MonthViewButton from './MonthViewButton';
import WeekViewButton from './WeekViewButton';
import PlusButton from '../../components/PlusButton';
import EditButton from './EditButton';
// utilizing react native calendar
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import DayPlan1 from './DayPlan1';
import DayPlan2 from './DayPlan2';
import DayPlan3 from './DayPlan3';
import DayPlan4 from './DayPlan4';

var MyArray = [DayPlan1, DayPlan2, DayPlan3, DayPlan4];
function pickMeal() {
  return MyArray[Math.floor(Math.random() * MyArray.length)];
}


export default function CalendarHome({ navigation }) {
  const [mealSelection, setMealSelection] = useState(DayPlan1)
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={themes.header}>MEAL PLANS</Text>
        <View style={styles.view}>
          <MonthViewButton textColor='white' bgColor={themes.bgSecondary} />
          <WeekViewButton bgColor={themes.buttonBackground} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ width: 60, height: 40 }}>
            <PlusButton screen='AddMeal' />
          </View>
          <View style={{ width: 60, height: 40 }}>
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
          onDayPress={day => {
            setMealSelection(pickMeal())
          }}
          markingTyle={'custom'}
          // markedDates={{
          //   '2022-03-18': { selected: true, marked: true, selectedColor: themes.buttonBackground, activeOpacity: 0 },
          // }}
        />
      </View>
      <View style={styles.homeCal}>
        {mealSelection}
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
    flex: 1.8,
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
    flex: 3.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.bgPrimary,
    borderRadius: 20,
    margin: 20,
    marginTop: 50,
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