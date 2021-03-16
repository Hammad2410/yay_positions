import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deleteJob } from '../redux/actions/employer';
import { selectJob } from '../redux/actions/candidate';

const Jobcard = ({ navigation, item, deleteJob, selectJob }) => {
  return (
    <View style={styles.view}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.view1}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text2}>Title</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Level</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Experience</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Location</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Remote or Inhouse</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Posted Date</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text3}>{item.Title}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.Level}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.Experience}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.Location}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.RemoteOrInHouse}</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{
                fontSize: 13,
                color: '#000000',
                //fontFamily: 'Segoe UI',
                paddingVertical: 20, paddingRight: 5
              }}>{item.PostedDate.substr(0, 10)}</Text>
              <Text style={{
                fontSize: 13,
                color: '#000000',
                //fontFamily: 'Segoe UI',
                paddingVertical: 20,
              }}>{item.PostedDate.substr(11, 5)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => {
            navigation.navigate('EditJob', { job: item });
          }}>
          <Text style={styles.btntext}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            selectJob(item);
            navigation.navigate('Applyjob', { role: 'employer' });
          }}>
          <Text style={styles.btntext}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => deleteJob(item.Id)}>
          <Text style={styles.btntext}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => {
            navigation.navigate('AppliedCandidates', { id: item.Id });
          }}>
          <Text style={styles.btntext}>Candidates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#707070',
    fontSize: 20,
  },

  line: {
    height: 5,
    width: wp('11%'),
    backgroundColor: '#009961',
    borderColor: '#707070',
    borderWidth: 2,
    marginTop: 10,
  },

  text1: {
    fontSize: 13,
    color: '#009961',
    //fontFamily: 'Segoe UI',
  },

  view: {
    paddingBottom: 10,
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },

  view1: {
    width: wp('40%'),
    height: 360,
    backgroundColor: '#001F3F',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 10,
    marginVertical: 14,
  },

  text2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    //fontFamily: 'Segoe UI',
    paddingVertical: 20,
    paddingLeft: 20,
  },

  view2: {
    width: wp('40%'),
    height: 360,
    backgroundColor: 'white',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 10,
    marginVertical: 14,
  },

  text3: {
    fontSize: 13,
    color: '#000000',
    //fontFamily: 'Segoe UI',
    paddingVertical: 20,
    textAlign: 'right',
  },

  btn: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  btntext:
  {
    //fontFamily: 'Segoe UI',
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  btn2: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#B81717',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  btn1: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  btn3: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#6C757D',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },


  btntext1:
  {
    //fontFamily: 'Segoe UI',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  text4: {
    fontSize: 13,
    color: '#000000',
    //fontFamily: 'Segoe UI',
    paddingVertical: 20,
    marginLeft: 20,
  },
});

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { deleteJob, selectJob };

export default connect(mapStateToProps, mapDispatchToProps)(Jobcard);
