import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


const JobApply = ({ navigation, bottom }) => {
  return (


    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[styles.view, { marginBottom: bottom }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12, paddingHorizontal: 12 }}>
          <Text style={styles.text}>Marketing Manager</Text>
          <TouchableOpacity>
            <Image source={require('../assests/image/heart.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}> New York, USA</Text>
        <Text style={styles.text2}> {'\t'}Applied </Text>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Job Type:</Text>
          <Text style={styles.text3}> Full Time</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Level:</Text>
          <Text style={styles.text3}>Skilled Worker</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Experience:</Text>
          <Text style={styles.text3}>2 years</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Qualification:</Text>
          <Text style={styles.text3}>Bachelor</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Salary Type:</Text>
          <Text style={styles.text3}>Hourly</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Salary Range:</Text>
          <Text style={styles.text3}>200000-300000</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 12, marginTop: 10 }}>
          <Text style={styles.text}>Remote Or In House:</Text>
          <Text style={styles.text3}>Remote</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 12, marginTop: 10 }}>
          <Text style={styles.text3}> Catalogue all visual assets for marketing department.
          Update marketing calendar with ongoing initiatives and
          holiday details.
          Familiarity with WordPress a plus.
</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 12, marginTop: 25 }}>
          <Text style={styles.text3}> Chef Daniel Boulud’s The Dinex Group is seeking a
          dynamic Marketing Manager to assist the department and
          build awareness for Daniel Boulud and his restaurants.
          This position will play a key role in the public-facing
          marketing initiatives of the company.

</Text>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 12, marginTop: 20 }}>
          <Text style={styles.text}>Essential Duties and Responsibilities</Text>
          <Text style={[styles.text3, { marginTop: 10, marginBottom: 15 }]}> Chef Daniel Boulud’s The Dinex Group is seeking a
          dynamic Marketing Manager to assist the department and
          build awareness for Daniel Boulud and his restaurants.
          This position will play a key role in the public-facing
          marketing initiatives of the company.

</Text>
        </View>


      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Apply</Text>
      </TouchableOpacity>
    </View>

  )
}
export default JobApply;

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