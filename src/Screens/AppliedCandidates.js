import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader';
import Candidatecard from '../Components/Candidatecard';
import EmployerTab from '../Components/EmployerTab';
import {connect} from 'react-redux';
import {getAppliedCandidates} from '../redux/actions/employer';

const AppliedCandidates = ({
  navigation,
  employer,
  getAppliedCandidates,
  route,
}) => {
  useEffect(() => {
    getAppliedCandidates(route.params.id);
  }, [route.params]);

  return (
    <Container style={{backgroundColor: 'white'}}>
      <MyHeader navigation={navigation} />
      {employer.loading ? (
        <ActivityIndicator
          size={'large'}
          color={'#009961'}
          style={{justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <>
          <Content>
            <View style={{flex: 1}}>
              <View style={{marginLeft: 40}}>
                <Text style={styles.text}>Applied Candidates</Text>
                <View style={styles.line}></View>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginTop: 15,
                  marginRight: 25,
                }}>
                {/* <TouchableOpacity onPress={() => { navigation.navigate('Efilter') }}>
                                    <Text style={styles.text1}>Search Filters</Text>
                                </TouchableOpacity> */}
              </View>
              {/* <Candidatecard /> */}
              <FlatList
                data={employer.applied}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <Candidatecard
                    navigation={navigation}
                    bottom={'10%'}
                    item={item.User}
                  />
                )}
              />
            </View>
          </Content>
          <EmployerTab
            navigation={navigation}
            EFirst={'#E4E4E4'}
            ESecond={'#E4E4E4'}
            EThird={'#009961'}
            EFourth={'#E4E4E4'}
            EFifth={'#E4E4E4'}
          />
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
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
});
=======
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
        marginTop: 10
    },
    text1: {
        fontSize: 13,
        color: '#009961',
        //fontFamily: 'Segoe UI',

    },


})
>>>>>>> d2552b2e5f31b73f0cfc8cbf7c7f9d3b4ba47b39

const mapStateToProps = ({employer}) => ({employer});

const mapDispatchToProps = {getAppliedCandidates};

export default connect(mapStateToProps, mapDispatchToProps)(AppliedCandidates);
