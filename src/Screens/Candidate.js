import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import SideDrawer from '../Components/Drawer';
import {connect} from 'react-redux';
import {resetUserLoggedIn, logout} from '../redux/actions/auth';
import {
  getInvitations,
  getJobs,
  getCandidateProfile,
} from '../redux/actions/candidate';
import CandidateTab from '../Components/CandidateTab';

import {NavigationContainer, CommonActions} from '@react-navigation/native';

const Candidate = (props) => {
  useEffect(() => {
    props.getInvitations();
    props.getJobs();
    props.resetUserLoggedIn();
    props.getCandidateProfile();
    props.logout();
  }, []);

  const onRefresh = () => {
    props.getInvitations();
    props.getJobs();
    props.resetUserLoggedIn();
    props.getCandidateProfile();
    // setRefreshing(true);
    // fetchData().then(() => {
    //   setRefreshing(true);
    // });
  };

  return (
    <Container style={{backgroundColor: 'white'}}>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={props.candidate.loading}
            onRefresh={onRefresh}
          />
        }>
        <SideDrawer navigation={props.navigation} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              style={{paddingLeft: 25}}
              name="arrow-back-outline"
              size={20}
              color="#E4E4E4"
            />
          </TouchableOpacity>

          <Text style={styles.text}>
            Hello{' '}
            {props.auth.profile != null && props.auth.profile.Profile.Email}{' '}
          </Text>
        </View>
        <View style={{marginLeft: 30, marginTop: 18}}>
          <Text style={styles.text1}>All Jobs</Text>
        </View>

        <View style={[styles.view, {backgroundColor: '#001F3F'}]}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 41,
              fontFamily: 'Calibri',
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 15,
            }}>
            {props.candidate.jobs.length}
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text2}>All Jobs</Text>
            <Icon
              style={{paddingRight: 15, paddingBottom: 10}}
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
                  props.navigation.navigate('BrowseJobs');
                }}>
                <Icon
                  style={{paddingRight: 15, paddingBottom: 10}}
                  name="arrow-forward-circle"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginLeft: 30, marginTop: 18}}>
          <Text style={styles.text1}>All invitations</Text>
        </View>
        <View style={styles.view}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 41,
              fontFamily: 'Calibri',
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 15,
            }}>
            {props.candidate.invitations.length}
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text2}>All invitations</Text>
            <Icon
              style={{paddingRight: 15, paddingBottom: 10}}
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
                  props.navigation.navigate('Invitations');
                }}>
                <Icon
                  style={{paddingRight: 15, paddingBottom: 10}}
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
            props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {name: 'Login'}, //to go to initial stack screen
                ],
              }),
            ),
              logout();
          }}>
          <Text style={{marginTop: '35%', marginLeft: '80%'}}>Log Off</Text>
        </TouchableOpacity>
      </Content>
      <CandidateTab
        navigation={props.navigation}
        First={'#E4E4E4'}
        Second={'#E4E4E4'}
        Third={'#E4E4E4'}
        Fourth={'#E4E4E4'}
        Fifth={'#E4E4E4'}
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

const mapStateToProps = ({candidate, auth}) => ({candidate, auth});

const mapDispatchToProps = {
  getInvitations,
  getJobs,
  resetUserLoggedIn,
  getCandidateProfile,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
