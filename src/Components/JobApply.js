import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left, Item } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
const JobApply = ({ navigation, bottom,candidate,jobDetail }) => {
  useEffect(() => {
    console.log(candidate.jobDetail)
}, [])
  
  return (


    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[styles.view, { marginBottom: bottom }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12, paddingHorizontal: 12 }}>
          <Text style={styles.text}>{candidate.jobDetail.Title}</Text>
          <TouchableOpacity>
            <Image source={require('../assests/image/heart.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
        <Text style={styles.text}>Location:</Text>
        <Text style={styles.text1}>{candidate.jobDetail.Location}</Text>
        </View>
        
        {
                            candidate.jobDetail.IsApplied === 'false'?
                            <Text style={[styles.text,{marginLeft:12}]}> Applied </Text>
                            :
                            <Text style={[styles.text,{marginLeft:12,marginTop:5}]}>Not Applied </Text>
                            }
       

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Job Type:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.JobType}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Level:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.Level}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Experience:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.Experience}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Qualification:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.Qualification}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Salary Type:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.SalaryType}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Salary Range:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.SalaryRange}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Remote Or In House:</Text>
          <Text style={styles.text3}>{candidate.jobDetail.RemoteOrInHouse}</Text>
        </View>
       
        <View style={{ flexDirection: 'column', marginHorizontal: 12, marginTop: 25 }}>
        <Text style={styles.text}>Description</Text>
          <Text style={styles.text3}>{candidate.jobDetail.JobDescription}
</Text>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 12, marginTop: 20 }}>
          <Text style={styles.text}>Essential Duties and Responsibilities</Text>
          <Text style={[styles.text3, { marginTop: 10, marginBottom: 15 }]}>{candidate.jobDetail.Detail}</Text>
        </View>


      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Apply</Text>
      </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
  view: {
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',

  },
  text1: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingLeft: 12
  },
  text2: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingLeft: 10
  },
  text3: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingLeft: 4,
    textAlign: 'left',

  },
  btn: {
    width: wp('30%'),
    height: 45,
    backgroundColor: '#17A2B8',
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 25

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

const mapStateToProps = ({ candidate }) => ({ candidate })


export default connect(mapStateToProps)(JobApply);