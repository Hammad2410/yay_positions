import React, { useState } from 'react';
import {   Platform,
    StyleSheet,
    Text,
    View,
    ToastAndroid} from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';


var filter = [
    {label: "Full Time", value: 0},
    {label: "Part Time", value: 1},
    {label: "Internship", value: 2},
    {label: "Temporary", value: 4},
    {label: "Permanent", value: 5},
    {label: "Contract", value: 6},
    {label: " Freelance", value: 6},
  ];

const Radiobtn = ({ navigation }) => {
  
return (

<View style={{flex:1,marginTop:'4%'}}>
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
      
        />
</View>

  )    
}
export default Radiobtn;

const styles = StyleSheet.create({
   


})