import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Header } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Welcome = ({ navigation }) => {
return (
<Container>

<Content contentContainerStyle={{ flex: 1 }}>
<View >
    <Image resizeMode="cover" style={styles.image} source={require('../assests/image/welcome.png')}></Image>
    <Image  style={styles.image1} source={require('../assests/image/text.png')}></Image>
</View>
</Content>
</Container>
  )    
}
export default Welcome;
const styles = StyleSheet.create({

    image:{
        height:hp('130%'),
    },
    image1:{marginTop:40,
        height:hp('90%'),
        marginLeft:15,
        position:'absolute'
    },

})