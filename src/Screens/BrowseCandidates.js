import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader'
import Candidatecard from '../Components/Candidatecard'


const BrowseCandidates = ({ navigation }) => {
return (
<Container style={{backgroundColor:'white'}} >
<MyHeader navigation={navigation}/>
<Content >
<View style={{flex:1}}>
    <View style={{marginLeft:40}}>
<Text style={styles.text}>Browse Candidates</Text>
<View style={styles.line}>
</View>
</View>
<View style={{alignItems:'flex-end',marginTop:15,marginRight:25}}>
    <TouchableOpacity  onPress={() => {navigation.navigate('Efilter')}}>
    <Text style={styles.text1}>Search Filters</Text>
    </TouchableOpacity>
</View>
<Candidatecard />
<Candidatecard   bottom={'10%'}/>
</View>
</Content>
</Container>
  )    
}
export default BrowseCandidates;
const styles = StyleSheet.create({
    text:{
        color:'#707070',
        fontSize:20,
    },
    line:{
        height:5,
        width:wp('11%'),
        backgroundColor:'#009961',
        borderColor:'#707070',
        borderWidth:2,
        marginTop:10
    },
    text1:{
        fontSize:13,
        color:'#009961',
        fontFamily:'Segoe UI',
      
    },


})