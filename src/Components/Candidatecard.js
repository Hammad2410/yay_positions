import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader';
import {connect} from 'react-redux';
import {
  sendInvite,
  markFavorite,
  changeCandidateId,
} from '../redux/actions/employer';
import DatePicker from 'react-native-date-picker';

const Candidatecard = ({
  navigation,
  bottom,
  item,
  sendInvite,
  markFavorite,
  employer,
  changeCandidateId,
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
  return (
    <View style={[styles.view, {marginBottom: bottom}]}>
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  sendInvite(item.CandidateId, datename);
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

      <TouchableOpacity onPress={() => markFavorite(item)}>
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <Icon color={'#001F3F'} name={'square-o'} size={35}></Icon>
          <Icon
            color={'green'}
            name={
              employer.favorites.filter(
                (item1) => item1.CandidateId == item.CandidateId,
              ).length == 0
                ? 'heart-o'
                : 'heart'
            }
            size={15}
            style={{marginTop: -27, marginRight: 6.5}}></Icon>
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
              {!item.InInvited && (
                <TouchableOpacity
                  disabled={sentInvite}
                  style={styles.btn}
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Text style={styles.btntext}>
                    {sentInvite ? 'Invite Sent' : 'Send Invitation'}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  // alert(item.CandidateId)
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
      <View>
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
              <Text style={{}}>DONE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
<<<<<<< HEAD
    // fontFamily: 'Segoe UI',
=======
    //fontFamily: 'Segoe UI',

>>>>>>> d2552b2e5f31b73f0cfc8cbf7c7f9d3b4ba47b39
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
<<<<<<< HEAD
    // fontFamily: 'Segoe UI',
    padding: 20,
=======
    //fontFamily: 'Segoe UI',
    padding: 20
>>>>>>> d2552b2e5f31b73f0cfc8cbf7c7f9d3b4ba47b39
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
<<<<<<< HEAD
    // fontFamily: 'Segoe UI',
=======
    //fontFamily: 'Segoe UI',
>>>>>>> d2552b2e5f31b73f0cfc8cbf7c7f9d3b4ba47b39
    paddingVertical: 20,
    textAlign: 'right',
  },
  btn: {
    width: wp('25%'),
    height: 40,
    backgroundColor: '#1492E6',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginRight: 5,
  },
  btn1: {
    width: wp('19%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
  },
<<<<<<< HEAD
  btntext: {
    // fontFamily: 'Segoe UI',
=======
  btntext:
  {
    //fontFamily: 'Segoe UI',
>>>>>>> d2552b2e5f31b73f0cfc8cbf7c7f9d3b4ba47b39
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
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

const mapDispatchToProps = {sendInvite, markFavorite, changeCandidateId};

export default connect(mapStateToProps, mapDispatchToProps)(Candidatecard);
