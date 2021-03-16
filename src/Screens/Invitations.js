import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader';
import CandidateTab from '../Components/CandidateTab';
import CandidateInvitation from '../Components/CandidateInvitation';
import { connect } from 'react-redux';

const Invitations = ({ navigation, candidate }) => {
  return (
    <Container style={{ backgroundColor: 'white' }}>
      <MyHeader navigation={navigation} />
      <Content>
        <View style={{ flex: 1 }}>
          <View style={{ marginLeft: 40 }}>
            <Text style={styles.text}>Invitations</Text>
            <View style={styles.line}></View>
          </View>
          <FlatList
            data={candidate.invitations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <CandidateInvitation item={item} />}
          />
        </View>
      </Content>
      <CandidateTab
        navigation={navigation}
        First={'#E4E4E4'}
        Second={'#E4E4E4'}
        Third={'#E4E4E4'}
        Fourth={'#E4E4E4'}
        Fifth={'#009961'}
      />
    </Container>
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
    height: 460,
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  view1: {
    width: wp('38%'),
    height: 370,
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
    padding: 20
  },
  view2: {
    width: wp('40%'),
    height: 370,
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
    width: wp('30%'),
    height: 45,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btntext:
  {
    //fontFamily: 'Segoe UI',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({ candidate }) => ({ candidate });

export default connect(mapStateToProps)(Invitations);
