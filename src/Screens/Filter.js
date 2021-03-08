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

var Skills =[
  {label: 'Select', value: 0, },
{label: 'Analytical Skills', value:1, },
{label: 'Application Development', value: 2, }, 
{label: 'Architecture', value: 3,},
{label: 'Arts', value: 4,},
{label: 'Communication Skills', value: 5, },
{label: 'Cooking', value: 6, },
{label: 'Culinary Arts', value: 7,}, 
{label: 'Data Network', value: 8,},
{label: 'Designing', value: 9,},  
{label: 'Development', value: 10,},
{label: 'Education', value: 11,}, 
{label: 'Flexibility', value: 12,},  
{label: 'Food Products', value: 13,}, 
{label: 'IT Engineering', value: 14,}, 
{label: 'JS', value: 15,}, 
{label: 'Managment', value: 16,}, 
{label: 'Medical and Healthcare', value: 17,},
{label: 'Modeling', value: 18,},
{label: 'Office Managment', value: 19},
{label: 'Painting', value: 20},
{label: 'Patience', value: 21},
{label: 'Php', value: 22}, 
{label: 'Problem Solving', value: 23},
{label: 'SEO', value: 24},
{label: 'SMM', value: 25},
{label: 'Stress Managment', value: 26,},
{label: 'Team Managment', value: 27,},
{label: 'Team Work', value: 28,},
{label: 'Technical', value: 29,},
{label: 'Trainings', value: 30,},             
]
var Jexp =[

{label: '1 year', value: '1year',},
{label: '2 years', value: '2years', },
{label: '3 years', value: '3years', },
{label: '4 years', value: '4years', },
{label: '5 years', value: '5years', },
{label: '6 years', value: '6years', },
{label: '7 years', value: '7years', },
{label: '8 years', value: '8years', },
{label: '9 years', value: '9years', },
{label: '10 years', value: '10years', },
{label: '10+years', value: '10+years', },
    ]
var SRange =[
{label: 'Select', value: 'Select', },
{label: '$50,000-$100,000', value: 'S1', },
{label: '$200,000-$300,000', value: 'S2', }, 
{label: '$300,000-$400,000', value: 'S3',},
{label: '$400,000-$500,000', value: 'S4',},
{label: '$500,000-$600,000', value: 'S5', },
{label: '$600,000-$700,000', value: 'S6', },
{label: '$700,000-$800,000', value: 'S7',}, 
{label: '$800,000-$900,000', value: 'S8',},
{label: '$900,000-$1,000,000', value: 'S9',},  
]
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
    items={Skills}
    itemStyle={{
      justifyContent: 'flex-start'
  }}
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#ffffff'}}
/>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Applyjob')}}>
<Text style={styles.btntext}>Search</Text>
</TouchableOpacity>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginTop:15}}/>
    <View style={{flexDirection:'column',marginTop:'3%',marginLeft:'10%'}}>
    <Text style={styles.text2}>Job Experience</Text>
    <DropDownPicker
    items={Jexp}
    itemStyle={{
      justifyContent: 'flex-start'
  }}
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#ffffff'}}
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
    items={SRange}
    itemStyle={{
      justifyContent: 'flex-start'
  }}
    placeholder={'Select your skills'}
    placeholderStyle={{color:'#000000',fontSize:12}}
    arrowSize={20}
    arrowColor={'#47525E'}
    containerStyle={{height:50,width:wp('80%')}}
    style={{backgroundColor: '#fffff',borderColor:'#707070',marginTop:10}}
    dropDownStyle={{backgroundColor: '#ffffff'}}
/>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Applyjob')}}>
<Text style={styles.btntext}>Search</Text>
</TouchableOpacity>
    </View>
    <View style={{borderWidth:1,borderColor:'#E4E4E4',marginHorizontal:'8%',marginBottom:80,marginTop:20}}/>
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