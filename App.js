import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';
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
  /* 
  TODO: 
  - implement a custom component in ./components/ScreenToImplement.js (further specifications there)
  - import that screen to App.js
  - add that new screen to the stack navigator
  - let users navigate to it from a different screen
  */
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
          // name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          name="Home" component={HomeScreen} options={{ 
            headerTitle: "Cookie", headerStyle: {backgroundColor: 'pink'}, headerTitleStyle: { fontSize: 32, fontWeight: 'bold'},
            headerLeft: () => <Button title="back" />,
            headerRight: () => <Button title="next" />
            // Pressable:
            // <Pressable>
              // <Image ... />
            // </Pressable/>
           }}
        />

        {/* <Stack.Screen name="Home" component={HomeScreen} options={{
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {navigation.navigate('ScreenOne')}}
              // title="Left"
            />
          ),
        }}/>    */}
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        {/* <Stack.Screen name="ScreenToImplement" component={ScreenToImplement} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>  */}

            
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
    width: 20, 
    height: 20,
    // alignItems: 'center',
  },
});