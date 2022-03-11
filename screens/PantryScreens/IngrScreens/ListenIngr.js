import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Button, Image } from 'react-native';

import { WebView } from 'react-native-webview';
import Video from 'react-native-video';

import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
// import themes from '../../assets/themes/themes';

export default function ListenIngr({ navigation }) {
    const vidUrl = 'https://www.canva.com/design/DAE6o2JeTHU/YZgvAxIpll1rO7rACVJZuQ/watch?utm_content=DAE6o2JeTHU&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel';
    const imageUrl = 'https://th.bing.com/th/id/R.4858fac6c0f359eb5d8f3a7f986c358e?rik=6z9Q1IB%2fIMrFmg&riu=http%3a%2f%2fwww.goldenplantainchips.com%2fsites%2fdefault%2ffiles%2fBunch+of+plantains.jpg&ehk=8P3xKB9a7ezgzZtipv3KqPwqS3bRL88o6AkmLxb9VEQ%3d&risl=&pid=ImgRaw&r=0'

    return (
        <View style={styles.container}>
            <View style={styles.left}>

            </View>
            <View style={styles.mid}>
                <View style={styles.mid1} >
                <Pressable onPress={() => navigation.navigate('StopIngr')}>
                    <Image source={require('../../../assets/pantry/CookeeOn.png')} />
                </Pressable>
                </View>


                <View style={styles.mid2} >
                <Text style={themes.pantryText}>TAP COOKEE TO STOP VOICE TO TEXT</Text>
                </View>
                <View tyle={styles.mid3}>

                {/* <Video source={require('../../../assets/greeking.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //    onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
                  {/* <Image source={{uri: imageUrl}} style={styles.image} /> */}
                </View>
                
            </View>
            <View style={styles.right}>

            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        resizeMode: 'contain',
      
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: themes.bgSecondary,
    },
    left: {
        flex: .1,
        //backgroundColor: 'red',
        paddingTop: 12,
        paddingLeft: 12,
    },
    mid: {

        flex: .8,
    },
    right: {

        flex: .1,
    },
    // mid1: {
    //     flex: .45,
    //     flexDirection:'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   mid2: {
    //     flex: .1,
    //     flexDirection:'column',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //   },
    mid1: {
        paddingTop: 10,
        flex: .45,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      mid2: {
        flex: .4,
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    //   mid3: {
    //     flex: .45,

    //     paddingHorizontal: 20,
    //   }, 
});


