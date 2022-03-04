import {useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';
import HomeScreen from './screens/HomeScreen';
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
  });
  
  if (!fontsLoaded) return <AppLoading />;;


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#87CEEB',
          // },
          // headerTitleStyle: {
          //   color: 'white',
          //   height: '100%',
          //   width: '100%',
          //   fontWeight: 'bold',
          //   backgroundColor: 'green',
          // },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "COOKEE",
            headerStyle: { backgroundColor: 'black'},
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white' },
            safeAreaInsets: {left:10, right:10},

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage} />
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white"/>
            </Pressable>),
          })}
        />

        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={({ navigation }) => ({
            headerTitle: "ScreenOneChange",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white'},

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
          name="Menu"
          component={Menu}
          options={({ navigation }) => ({
            headerTitle: "Menu",
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold', color: 'white'}, paddingStart: 50,

            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu-sharp" size={30} color="white" marginRight={10}/>
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