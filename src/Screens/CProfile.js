import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader';
import Profile from '../Components/CProfile';
import EmployerTab from '../Components/EmployerTab';
import Icons from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {
  markFavorite,
  sendInvite,
  getCandidateProfile,
} from '../redux/actions/employer';
import DatePicker from 'react-native-date-picker';

const CProfile = ({
  navigation,
  employer,
  markFavorite,
  sendInvite,
  getCandidateProfile,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sentInvite, setSentInvite] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [datename, setDateName] = useState('mm/dd/yy');
  const [DatemodalVisible, setDateModalVisible] = useState(false);
  const DateModal = () => {
    setDateModalVisible(!DatemodalVisible);
  };

  useEffect(() => {
    getCandidateProfile();
    console.log('Profile : ', employer.candidateProfile);
  }, [employer.candidateId]);

  return (
    <Container style={{backgroundColor: 'white'}}>
      <MyHeader navigation={navigation} />
      <Content>
        {employer.candidateProfile != null ? (
          <View style={{flex: 1}}>
            <View style={{marginLeft: 25}}>
              <Text style={styles.text}>Candidate Profile</Text>
              <View style={styles.line}></View>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
              <TouchableOpacity
                disabled={sentInvite || employer.candidateProfile.InInvited}
                onPress={() => setModalVisible(true)}>
                <View
                  style={{
                    flex: 1,
                    borderColor: '#707070',
                    borderWidth: 0.5,
                    borderRadius: 5,
                    width: '55%',
                    height: 30,
                    marginBottom: 15,
                    marginLeft: 100,
                    marginTop: 5,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    {sentInvite || employer.candidateProfile.InInvited
                      ? ' Invited'
                      : 'Send Invite'}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => markFavorite(employer.candidateProfile.Profile)}
                style={{marginLeft: 140}}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginTop: 5,
                  }}>
                  <Icons color={'#001F3F'} name={'square-o'} size={35}></Icons>
                  <Icons
                    color={'green'}
                    name={
                      employer.favorites.filter(
                        (item1) =>
                          item1.CandidateId ==
                          employer.candidateProfile.Profile.CandidateId,
                      ).length == 0
                        ? 'heart-o'
                        : 'heart'
                    }
                    size={15}
                    style={{marginTop: -27, marginRight: 6.5}}></Icons>
                </View>
              </TouchableOpacity>
            </View>

            <Profile bottom={10} navigation={navigation} />
          </View>
        ) : (
          <ActivityIndicator
            size={'large'}
            color={'#009961'}
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
        )}
      </Content>
      <Modal
        animationType="slide"
        transparent={true}
        visible={DatemodalVisible}>
        <View
          style={{
            width: wp('100%'),
            height: '23%',
            marginTop: '5%',
            backgroundColor: 'white',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          <DatePicker
            style={{marginHorizontal: '10%'}}
            date={date}
            androidVariant="nativeAndroid"
            mode="datetime"
            minimumDate={new Date()}
            style={{
              width: wp('50%'),
              marginTop: '3%',
              marginLeft: '20%',
            }}
            onDateChange={(date) => setDate(date)}
          />
          <TouchableOpacity
            style={{
              borderRadius: 5,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              marginVertical: '3%',
              marginLeft: '3%',
              borderColor: 'grey',
              borderWidth: 1,
              backgroundColor: '#fff',
              width: wp('22%'),
              height: hp('5%'),
              alignItems: 'center',
            }}
            onPress={() => {
              setDateName(date.toString().substr(0, 21));
              setDateModalVisible(false);
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Date Time for call</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: hp('5%'),
                  width: wp('60%'),
                  borderColor: '#707070',
                  borderWidth: 0.5,
                  borderRadius: 5,
                  fontSize: 12,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => DateModal()}>
                  <Text
                    style={{
                      color: '#707070',
                      marginLeft: '5%',
                    }}>
                    {datename}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: -30,
                }}>
                <TouchableOpacity onPress={() => DateModal()}>
                  <Icon
                    name="calendar"
                    size={20}
                    color="#707070"
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 25,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: '#EA3A3A',
                    marginLeft: -12,
                    alignItems: 'center',
                  },
                ]}
                onPress={() => {
                  setSentInvite(true);
                  sendInvite(
                    employer.candidateProfile.Profile.CandidateId,
                    datename,
                  );
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Send Invitation</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  {backgroundColor: '#007AFF', marginRight: -10},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <EmployerTab
        navigation={navigation}
        EFirst={'#E4E4E4'}
        ESecond={'#E4E4E4'}
        EThird={'#E4E4E4'}
        EFourth={'#009961'}
        EFifth={'#E4E4E4'}
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
    fontSize: 12,
    color: 'black',
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 5,
    paddingTop: 15,
  },
  text2: {
    fontSize: 12,
    color: 'black',
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
  },
  text3: {
    fontSize: 12,
    color: 'black',
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    marginLeft: 50,
    paddingRight: 5,
    paddingTop: 15,
  },
  input: {
    width: wp('22%'),
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    borderColor: '#707070',
    fontSize: 10,
  },
  text4: {
    fontSize: 12,
    color: '#666666',
    // fontFamily: 'Segoe UI',
    marginLeft: 20,
    paddingTop: 15,
  },
  text5: {
    fontSize: 12,
    color: '#666666',
    // fontFamily: 'Segoe UI',
    marginLeft: 80,
    paddingTop: 15,
  },
  text6: {
    fontSize: 12,
    color: '#666666',
    // fontFamily: 'Segoe UI',
    paddingTop: 15,
  },
  textinput: {
    height: hp('4%'),
    width: wp('25%'),
    flex: 1,
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 5,
    alignContent: 'center',
    marginBottom: 15,
    marginLeft: 100,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',

    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    height: '25%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: 'rgba(0,54,168,1)',
  },
  textStyle: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',

    fontSize: 16,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '400',

    textAlign: 'center',
    marginBottom: 5,
  },
  modalInput: {
    height: hp('5%'),
    width: wp('60%'),
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 12,
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
});

const mapStateToProps = ({employer}) => ({employer});

const mapDispatchToProps = {markFavorite, sendInvite, getCandidateProfile};

export default connect(mapStateToProps, mapDispatchToProps)(CProfile);
