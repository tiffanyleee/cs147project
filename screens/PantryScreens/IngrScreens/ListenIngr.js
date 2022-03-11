import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, Button, Image } from 'react-native';

import { WebView } from 'react-native-webview';
import Video from 'react-native-video';

import GoBackButton from '../../GoBackButton';
import themes from '../../../assets/themes/themes';
// import themes from '../../assets/themes/themes';

export default function ListenIngr({ navigation }) {
    const vidUrl = 'https://www.canva.com/design/DAE6o2JeTHU/YZgvAxIpll1rO7rACVJZuQ/watch?utm_content=DAE6o2JeTHU&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel';
    const imageUrl = 'https://th.bing.com/th/id/R.4858fac6c0f359eb5d8f3a7f986c358e?rik=6z9Q1IB%2fIMrFmg&riu=http%3a%2f%2fwww.goldenplantainchips.com%2fsites%2fdefault%2ffiles%2fBunch+of+plantains.jpg&ehk=8P3xKB9a7ezgzZtipv3KqPwqS3bRL88o6AkmLxb9VEQ%3d&risl=&pid=ImgRaw&r=0'
    const dots = require('../../../assets/pantry/dots.gif');
    const circ = require('../../../assets/pantry/circles.gif');
    // const dotsgif = require('../../../assets/pantry/dots2.gif');
    // const dots = require('../../../assets/pantry/finalDots.gif');
    return (
        <View style={styles.container}>
            <View style={styles.left}/>
           
            <View style={styles.mid}>
                <View style={styles.mid1} >

                    <Pressable onPress={() => navigation.navigate('StopIngr')}>
                        <ImageBackground source={circ} style={styles.CirImage}>
                             <Image source={require('../../../assets/cookeeQ.png')} style={styles.image} />
                        </ImageBackground>
                        {/* <Image style={styles.image} source={require('../../../assets/pantry/CookeeOn.png')} /> */}
                    </Pressable>
                </View>


                <View style={styles.mid2} >
                    <Text style={themes.pantryText}>TAP COOKEE TO STOP VOICE TO TEXT</Text>
                </View>
                <View style={styles.mid3}>

                    {/* <Video source={require('../../../assets/greeking.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //    onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
                    <Image source={dots} style={styles.Dotsimage} />
                    
                    {/* <Video source={dots}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        // onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} /> */}


                </View>

            </View>
            <View style={styles.right}/>

          
        </View>



    );
}

const styles = StyleSheet.create({
    // image: {
    //     height: 100,
    //     width: 100,
    //     overflow: 'hidden',
    //     resizeMode: 'contain',

    // },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    Dotsimage: {
        width: undefined,
        height: '60%',
        aspectRatio: 1,
        // borderRadius: 15,
        alignSelf: 'center',
    },
    CirImage: {
        // width: undefined,
        // width: '100%',
        height: '100%',
        aspectRatio: 1,
        // borderRadius: 15,
        alignSelf: 'center',
        resizeMode: 'contain',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    image: {
        // width: undefined,
        // width: '100%',
        height: '60%',
        aspectRatio: 1,
        borderRadius: 40,
        alignSelf: 'center',
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: themes.bgSecondary,
        // backgroundColor: 'red',
        // backgroundColor: 'black',

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
        paddingTop: 30,
        flex: .45,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mid2: {
        flex: .1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
      mid3: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center',

        // paddingHorizontal: 20,
      }, 
});


