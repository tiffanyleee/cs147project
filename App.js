import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';
import Menu from './screens/Menu';
import { Ionicons } from '@expo/vector-icons';
import { stubArray } from 'lodash';

function LogoTitle(props) {
  // return (
  //   <Text>{props}</Text>
  // )
  // return (
  //   <View style={styles.menuBar}>
  //     <View style={{flex: 1}}>
  //     <Text style={styles.menuBarText}>
  //       Left
  //     </Text>
  //     </View>
  //     <View style={{flex: 1}}>
  //     <Image
  //       style={styles.menuBarImage}
  //       source={require('./assets/cookee.png')}
  //     />
  //     </View>
  //     <View style={{flex: 1}}>
  //     <Text style={styles.menuBarText}>
  //       Right
  //     </Text>
  //     </View>
      
  //   </View>
  // );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')}/>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions= {{
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
            headerTitle: "Cookee", 
            headerStyle: {backgroundColor: 'black'}, 
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            
            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>  
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>  
              <Ionicons name="menu-sharp" size={30} color="black" />            
              </Pressable>),
          })}
        />
            
        <Stack.Screen 
          name="ScreenOne" 
          component={ScreenOne}
          options={({ navigation }) => ({
            headerTitle: "ScreenOneChange", 
            headerStyle: {backgroundColor: 'pink'}, 
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            
            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>  
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>  
              <Ionicons name="menu-sharp" size={30} color="black" />            
              </Pressable>),
          })}
        />

        <Stack.Screen 
          name="ScreenTwo" 
          component={ScreenTwo}
          options={({ navigation }) => ({
            headerTitle: "ScreenTwoChange", 
            headerStyle: {backgroundColor: 'pink'}, 
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            
            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>  
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>  
              <Ionicons name="menu-sharp" size={30} color="black" />            
              </Pressable>),
          })}
        />

        <Stack.Screen 
          name="ScreenToImplement" 
          component={ScreenToImplement}
          options={({ navigation }) => ({
            headerTitle: "ScreenToImplementChange", 
            headerStyle: {backgroundColor: 'pink'}, 
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            
            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>  
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>  
              <Ionicons name="menu-sharp" size={30} color="black" />            
              </Pressable>),
          })}
        />

        <Stack.Screen 
          name="Menu" 
          component={Menu}
          options={({ navigation }) => ({
            headerTitle: "Menu", 
            headerStyle: {backgroundColor: 'pink'}, 
            headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            
            headerLeft: () => (<
              Pressable onPress={() => navigation.navigate('Home')}>  
              <Image source={require('./assets/cookee.png')} style={styles.menuBarImage}/>
            </Pressable>),

            headerRight: () => (<
              Pressable onPress={() => navigation.navigate('Menu')}>  
              <Ionicons name="menu-sharp" size={30} color="black" />            
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
    // height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  menuBarText: {
    // padding: 0,
    // height: '100%',
    // width: '100%',
    fontSize: 32,
    textAlign: 'center',
    // flex: 1,
  },
  menuBarImage: {
    // padding: 0,
    // flex: 1,
    width: 32, 
    height: 32,
    // alignItems: 'center',
  },
});