import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader';
import {connect} from 'react-redux';
import {markFavorite, changeCandidateId} from '../redux/actions/employer';

const Favoritecard = ({
  navigation,
  bottom,
  item,
  markFavorite,
  changeCandidateId,
}) => {
  return (
    <View style={[styles.view, {marginBottom: bottom}]}>
      <TouchableOpacity onPress={() => markFavorite(item)}>
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <Icon color={'#009860'} name={'heart'} size={20}></Icon>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.view1}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text2}>Name</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Profession</Text>
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
            <Text style={styles.text2}>Level</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}></Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text3}>{item.FullName}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('42%'),
              }}></View>
            <Text style={styles.text3}>{item.Profession}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('42%'),
              }}></View>
            <Text style={styles.text3}>{item.Experience}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('42%'),
              }}></View>
            <Text style={styles.text3}>{item.Level}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('42%'),
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text3}>
                {!item.InInvited ? 'Not Invited' : 'Already Invited'}
              </Text>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  changeCandidateId(item.CandidateId);
                  navigation.navigate('CProfile');
                }}>
                <Text style={styles.btntext}>View Profile</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('42%'),
              }}></View>
          </View>
        </View>
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
    // fontFamily: 'Segoe UI',
  },
  view: {
    height: 400,
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  view1: {
    width: wp('38%'),
    height: 320,
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
    // fontFamily: 'Segoe UI',
    padding: 20,
  },
  view2: {
    width: wp('40%'),
    height: 320,
    backgroundColor: 'white',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 10,
    marginVertical: 14,
  },
  text3: {
    fontSize: 13,
    color: '#000000',
    // fontFamily: 'Segoe UI',
    paddingVertical: 20,
    textAlign: 'right',
  },

  btn1: {
    width: wp('19%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 5,
  },
  btntext: {
    // fontFamily: 'Segoe UI',
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({employer}) => ({employer});

const mapDispatchToProps = {markFavorite, changeCandidateId};

export default connect(mapStateToProps, mapDispatchToProps)(Favoritecard);
