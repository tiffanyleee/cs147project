import { useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';
import HomeScreen from './screens/HomeScreen/HomeScreen';

import AllRooms from './screens/CookeeRooms/AllRooms';
import ItalianRoom from './screens/CookeeRooms/ItalianRoom';
import ChineseRoom from './screens/CookeeRooms/ChineseRoom';
import FrenchRoom from './screens/CookeeRooms/FrenchRoom';
import GreekRoom from './screens/CookeeRooms/GreekRoom';
import KoreanRoom from './screens/CookeeRooms/KoreanRoom';
import ThaiRoom from './screens/CookeeRooms/ThaiRoom';

import CalendarRoom from './screens/CalendarScreen/CalendarHome';

import PantryScreen from './screens/PantryScreens/PantryScreen';


import Menu from './screens/Menu';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    MontserratSemiBold: require('./assets/fonts/MontserratSemiBold.ttf'),
    MontserratBold: require('./assets/fonts/MontserratBold.ttf'),
    WorkSans: require('./assets/fonts/WorkSans.ttf'),
    WorkSansBold: require('./assets/fonts/WorkSansBold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;;


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "COOKEE",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },
            safeAreaInsets: { left: 10, right: 10 },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={({ navigation }) => ({
            headerTitle: "ScreenOneChange",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={({ navigation }) => ({
            headerTitle: "ScreenTwoChange",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="PantryScreen"
          component={PantryScreen}
          options={({ navigation }) => ({
            headerTitle: "PANTRY",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />        

        <Stack.Screen
          name="ScreenToImplement"
          component={ScreenToImplement}
          options={({ navigation }) => ({
            headerTitle: "ScreenToImplementChange",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="AllRooms"
          component={AllRooms}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ItalianRoom"
          component={ItalianRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ChineseRoom"
          component={ChineseRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="FrenchRoom"
          component={FrenchRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="GreekRoom"
          component={GreekRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="KoreanRoom"
          component={KoreanRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ThaiRoom"
          component={ThaiRoom}
          options={({ navigation }) => ({
            headerTitle: "COOKEE ROOMS",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="CalendarHome"
          component={CalendarRoom}
          options={({ navigation }) => ({
            headerTitle: "CALENDAR",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold', color: 'white' },

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={({ navigation }) => ({
            headerTitle: "COOKEE",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' }, paddingStart: 50,

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" marginRight={10} />
            </Pressable>),
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },
  menuBar: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  menuBarText: {
    fontSize: 32,
    textAlign: 'center',
  },
  menuBarImage: {
    width: 32,
    height: 32,
    marginLeft: 15,
  },
  menuBarHamburer: {
    width: 32,
    height: 32,
    marginLeft: 15,
  },
  homeCal: {
    height: '100%',
    width: '90%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    margin: 20,
  },
  calItem: {
    padding: 5,
    flexDirection: 'row',
  },
  homePantry: {
    height: '100%',
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  homeRooms: {
    height: '100%',
    width: '90%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    margin: 20,
  },
});