import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';


import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
// import themes from '../../assets/themes/themes';

export default function ListenIngr({ navigation }) {
  return (
    <View>
      <Image source={require('../../../assets/pantry/CookeeOff.png')} />
      {/* Image source={require('../../assets/rooms/italian.png')} */}
      <Text>TAP COOKEE TO STOP VOICE TO TEXT</Text>

      {/* width={48} height={48} >  */}
      
    </View>
    // <View style={styles.screenTwo}>
    //   <Text style={styles.screenTwoText}>Screen Two</Text>
    //   <Button title="Go back to Home Screen" onPress={() => navigation.popToTop()} />
    //   <Button title="Go to Screen to Implement" onPress={() => navigation.navigate      ('ScreenToImplement', {message: "testing!"} )} />

    //   <GoBackButton title="Go Back To Screen One"/>
    // </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});


