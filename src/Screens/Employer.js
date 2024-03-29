import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import EmployerDrawer from '../Components/EmployerDrawer';
import { connect } from 'react-redux';
import { resetUserLoggedIn, logout } from '../redux/actions/auth';
import {
  browseCandidate,
  getJobs,
  getFavorites,
  getHiredCandidates,
  getCompanyProfile,
  getInvitations,
} from '../redux/actions/employer';
import EmployerTab from '../Components/EmployerTab';

import { NavigationContainer, CommonActions } from '@react-navigation/native';

const Employer = ({
  navigation,
  browseCandidate,
  employer,
  getJobs,
  getFavorites,
  getHiredCandidates,
  getCompanyProfile,
  getInvitations,
  resetUserLoggedIn,
  auth,
  logout,
}) => {
  useEffect(() => {
    browseCandidate();
    getJobs();
    getFavorites();
    getHiredCandidates();
    getCompanyProfile();
    getInvitations();
    resetUserLoggedIn();
    // logout();
  }, []);

  const onRefresh = () => {
    browseCandidate();
    getJobs();
    getFavorites();
    getHiredCandidates();
    getCompanyProfile();
    getInvitations();
    resetUserLoggedIn();
    // setRefreshing(true);
    // fetchData().then(() => {
    //   setRefreshing(true);
    // });
  };
  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Content
        refreshControl={
          <RefreshControl refreshing={employer.loading} onRefresh={onRefresh} />
        }>
        <EmployerDrawer navigation={navigation} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={{ paddingLeft: 25 }}
              name="arrow-back-outline"
              size={20}
              color="#E4E4E4"
            />
          </TouchableOpacity>
          <Text style={styles.text}>
            Hello {auth.profile != null && auth.profile.CompanyName}{' '}
          </Text>
        </View>
        <View style={{ marginLeft: 30, marginTop: 18 }}>
          <Text style={styles.text1}>All Applicants</Text>
        </View>
        <View style={[styles.view, { backgroundColor: '#001F3F' }]}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 41,
              // fontFamily: 'Calibri',
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 15,
            }}>
            {employer.candidates.length}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text2}>All Applicants</Text>
            <Icon
              style={{ paddingRight: 15, paddingBottom: 10 }}
              name="stats-chart-sharp"
              size={45}
              color="#24963E"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 1,
              backgroundColor: '#24963E',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Text style={styles.text3}>More info</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BrowseCandidates');
                }}>
                <Icon
                  style={{ paddingRight: 15, paddingBottom: 10 }}
                  name="arrow-forward-circle"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 30, marginTop: 18 }}>
          <Text style={styles.text1}>All Jobs</Text>
        </View>
        <View style={styles.view}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 41,
              // fontFamily: 'Calibri',
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 15,
            }}>
            {employer.jobs.length}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text2}>All Jobs</Text>
            <Icon
              style={{ paddingRight: 15, paddingBottom: 10 }}
              name="stats-chart-sharp"
              size={45}
              color="#24963E"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 1,
              backgroundColor: '#24963E',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Text style={styles.text3}>More info</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Jobs');
                }}>
                <Icon
                  style={{ paddingRight: 15, paddingBottom: 10 }}
                  name="arrow-forward-circle"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Login' }, //to go to initial stack screen
                ],
              }),
            ),
              logout();
          }}>
          <Text style={{ marginTop: '35%', marginLeft: '80%' }}>Log Off</Text>
        </TouchableOpacity>
      </Content>
      <EmployerTab
        navigation={navigation}
        EFirst={'#E4E4E4'}
        ESecond={'#E4E4E4'}
        EThird={'#E4E4E4'}
        EFourth={'#E4E4E4'}
        EFifth={'#E4E4E4'}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#001F3F',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    // fontFamily: 'Segoe UI',
    fontWeight: '500',
    marginRight: 70,
    marginBottom: 2,
  },
  view: {
    backgroundColor: '#28A745',
    marginTop: '2%',
    marginHorizontal: '7%',
    borderRadius: 12,
    height: 200,
  },
  text: {
    fontSize: 12,
    color: '#001F3F',
    // fontFamily: 'Segoe UI',
    fontWeight: '500',
    paddingRight: 25,
    paddingTop: 4,
  },
  text1: {
    fontSize: 16,
    color: '#666666',
    // fontFamily: 'Segoe UI',
  },
  text2: {
    fontSize: 16,
    color: 'white',
    // fontFamily: 'Segoe UI',
    paddingLeft: 20,
    paddingTop: 20,
  },
  text3: {
    fontSize: 16,
    color: 'white',
    // fontFamily: 'Segoe UI',
    paddingTop: 5,
    paddingRight: 5,
  },
});

const mapStateToProps = ({ employer, auth }) => ({ employer, auth });

const mapDispatchToProps = {
  browseCandidate,
  getJobs,
  getFavorites,
  getHiredCandidates,
  getCompanyProfile,
  getInvitations,
  resetUserLoggedIn,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Employer);
