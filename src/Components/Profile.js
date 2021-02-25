import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader'


const Profile = ({ navigation,bottom }) => {
return (
    <View style={{flex:1}}>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view1}>
<Image source={require('../assests/image/profile.png')}  style={{marginTop:20}}/>
<Text style={styles.text1}>Jason Jackson</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Email Address</Text>
<Text style={styles.text3}>abc@gmail.com</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Gender</Text>
<Text style={styles.text3}>male</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Salary Range</Text>
<Text style={styles.text3}>50000-100000</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Qualification</Text>
<Text style={styles.text3}>Bachelors</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10,marginBottom:35}}/>

</View>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Custom Fields </Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Country</Text>
<Text style={styles.text3}>Canada</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Level</Text>
<Text style={styles.text3}>Skilled Work</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Experience</Text>
<Text style={styles.text3}>1 year</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10,marginBottom:35}}/>

</View>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Skills and Tools</Text>
</View>

<Text style={styles.text2}>Application Development</Text>


<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>

<Text style={styles.text2}>Architecture</Text>

<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>

<Text style={styles.text2}>Arts</Text>

<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10,marginBottom:35}}/>

</View>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Educational Info</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Degree</Text>
<Text style={styles.text3}>60</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Institute Name</Text>
<Text style={styles.text3}>Test</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Start Date</Text>
<Text style={styles.text3}>12-24-2019</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>End Date</Text>
<Text style={styles.text3}>02-11-2021</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Qualification Title</Text>
<Text style={styles.text3}>Test</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Grade</Text>
<Text style={styles.text3}>A</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>

<Text style={styles.text5}>Description</Text>
<Text style={styles.text3}>I am a creative designer ………….</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10,marginBottom:35}}/>

</View>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Job Experience </Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Organization Name</Text>
<Text style={styles.text3}>Test</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Your Role</Text>
<Text style={styles.text3}>Test</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>Start Date</Text>
<Text style={styles.text3}>12-24-2019</Text>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text2}>End Date</Text>
<Text style={styles.text3}>02-11-2021</Text>
</View>

<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10}}/>

<Text style={styles.text5}>Description</Text>
<Text style={styles.text3}>I am a creative designer ………….</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',alignItems:'center',marginHorizontal:10,marginBottom:35}}/>

</View>
<View style={[styles.view,{marginBottom:bottom}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Resumes</Text>
</View>

<TouchableOpacity style={styles.btn1}>
<Text style={styles.btntext}>View</Text>
</TouchableOpacity>

</View>
<View style={[styles.view,{marginBottom:30}]}>
        <View style={styles.view2}>
<Text style={styles.text4}>Resumes</Text>
</View>

<Image resizeMode="contain" source={require('../assests/image/resume.png')} style={{margin:15}}></Image>

</View>
</View>

  )    
}
export default Profile;

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
    view:{
        flexDirection:'column',
        alignSelf:'center',
        width:wp('90%'),
        backgroundColor:'white',
        marginTop:15,
        borderRadius:12,
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        shadowColor:'#000',
      shadowOffset: { width: 0, height: 2 },
      },
      view1:{
        width:wp('90%'),
        backgroundColor:'#001F3F',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        alignItems:'center',
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        paddingBottom:15,
        shadowColor:'#000',
      shadowOffset: { width: 0, height: 2 },
      },
      view2:{
        width:wp('90%'),
        backgroundColor:'#001F3F',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        padding:10,
        shadowColor:'#000',
      shadowOffset: { width: 0, height: 2 },
      },
      text1:{
            color:'white',
            fontSize:19,
            fontFamily:'Segoe UI',
            fontWeight:'500',
            paddingTop:2
        },
        text2:{
            color:'black',
            fontSize:13,
            fontFamily:'Segoe UI',
            fontWeight:'bold',
            padding:15
        },
        text3:{
            color:'black',
            fontSize:13,
            fontFamily:'Segoe UI',
            padding:15
        },
        text4:{
            color:'white',
            fontSize:17,
            fontFamily:'Segoe UI',
            fontWeight:'500',
            margin:5
        },
        text5:{
            color:'black',
            fontSize:13,
            fontFamily:'Segoe UI',
            fontWeight:'bold',
            paddingTop:15,
            paddingHorizontal:15
        },
        btn1:{
            width:wp('25%'),
            height:40,
            backgroundColor:'white',
            borderRadius:8,
            justifyContent: 'center',
        marginVertical:10,
        marginLeft:15,
        borderColor:'black',
        borderWidth:1
          
        },
        btntext:
        { fontFamily:'Segoe UI',
           fontSize:13,
            textAlign: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold'
        }
   
})