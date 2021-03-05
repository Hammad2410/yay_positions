import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import MyHeader from '../Components/LoginSignupHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import CandidateTab from '../Components/CandidateTab';


var filter = [
  { label: "Full Time", value: 0 },
  { label: "Part Time", value: 1 },
  { label: "Internship", value: 2 },
  { label: "Temporary", value: 4 },
  { label: "Permanent", value: 5 },
  { label: "Contract", value: 6 },
  { label: " Freelance", value: 7 },
];

var salary = [
  { label: "Hourly", value: 0 },
  { label: "Weekly", value: 1 },
  { label: "Monthly", value: 2 },
  { label: "Yearly", value: 4 },

];

var job = [
  { label: "High School", value: 0 },
  { label: "Bachelors", value: 1 },
  { label: "Masters", value: 2 },
  { label: "Doctorate", value: 4 },
  { label: "Diploma", value: 5 },
  { label: "MBBS", value: 6 },

];


const Filter = ({ navigation }) => {


return (
<Container style={{backgroundColor:'white'}} >
<MyHeader  navigation={navigation}/>
<Content >
<View style={{flex:1}}>
<View style={{marginLeft:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={styles.text}>Search Filters</Text>
<TouchableOpacity>
<Text style={styles.text1}>Clear all</Text>
</TouchableOpacity>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Job Type</Text>
    <RadioForm
          radio_props={filter}
          initial={0}
          onPress={(value) => {(value.toString(), ToastAndroid.SHORT)}}
          buttonSize={8}
          buttonOuterSize={20}
          selectedButtonColor={'green'}
          selectedLabelColor={'#000000'}
          buttonColor={'#707070'}
          labelStyle={{ fontSize: 13}}
          style={{marginTop:15}}
      
        />
    
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Salary Type</Text>
    <RadioForm
          radio_props={salary}
          initial={0}
          onPress={(value) => {(value.toString(), ToastAndroid.SHORT)}}
          buttonSize={8}
          buttonOuterSize={20}
          selectedButtonColor={'green'}
          selectedLabelColor={'#000000'}
          buttonColor={'#707070'}
          labelStyle={{ fontSize: 13}}
          style={{marginTop:15}}
      
        />
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Skills</Text>
    <DropDownPicker
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#009961'}}
/>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Applyjob')}}>
<Text style={styles.btntext}>Search</Text>
</TouchableOpacity>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Job Experience</Text>
    <DropDownPicker
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#009961'}}
/>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:20}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Job Qualification</Text>
    <RadioForm
          radio_props={job}
          initial={0}
          onPress={(value) => {(value.toString(), ToastAndroid.SHORT)}}
          buttonSize={8}
          buttonOuterSize={20}
          selectedButtonColor={'green'}
          selectedLabelColor={'#000000'}
          buttonColor={'#707070'}
          labelStyle={{ fontSize: 13}}
          style={{marginTop:15}}
      
        />
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Salary Range</Text>
    <DropDownPicker
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#009961'}}
/>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Applyjob')}}>
<Text style={styles.btntext}>Search</Text>
</TouchableOpacity>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginBottom:25,marginTop:20}}/>
</View>
</Content>
<CandidateTab navigation={navigation} First={'#E4E4E4'} Second={'#E4E4E4'} Third={'#E4E4E4'} Fourth={'#009961'} Fifth={'#E4E4E4'}/>

</Container>
  )    

}
export default Filter;

const styles = StyleSheet.create({

  text: {
    color: '#707070',
    fontSize: 17,
    fontFamily: 'Segoe UI',
  },

  text1: {
    color: '#707070',
    fontSize: 12,
    paddingRight: 40,
    paddingTop: 5
  },
  text2: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Segoe UI',
  },
  btn: {
    width: wp('20%'),
    height: 35,
    backgroundColor: '#17A2B8',
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',

  },
  btntext:
  {
    fontFamily: 'Segoe UI',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  }

})