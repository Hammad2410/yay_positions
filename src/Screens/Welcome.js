import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Welcome = ({ navigation }) => {
return (
<Container>
<Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
<View style={{flex:1}}>

    <Image resizeMode="contain" source={require('../assests/image/welcome.png')}></Image>
</View>
</Content>
</Container>
  )    
}
export default Welcome;
const styles = StyleSheet.create({

    image:{
        position:'absolute',
        top:75
    },
    

})