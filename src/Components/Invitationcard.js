import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  RefreshControl,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import {connect} from 'react-redux';
import {WebView} from 'react-native-webview';
import {
  changeCandidateId,
  deleteInvite,
  rescheduleInvite,
  createRoom,
  hireCandidate,
} from '../redux/actions/employer';

const Invitationcard = ({
  item,
  navigation,
  employer,
  changeCandidateId,
  deleteInvite,
  rescheduleInvite,
  createRoom,
  hireCandidate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hireModalVisible, setHireModalVisible] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [datename, setDateName] = useState('mm/dd/yy');
  const [DatemodalVisible, setDateModalVisible] = useState(false);
  const DateModal = () => {
    setDateModalVisible(!DatemodalVisible);
  };
  const [openCall, setOpenCall] = useState(false);

  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.view1}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text2}>Company Name</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Phone</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Status</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Meeting Date</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                marginLeft: 10,
                width: wp('40%'),
              }}></View>
            <Text style={styles.text2}>Is Hired</Text>
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
            <Text style={styles.text3}>{item.Company.CompanyName}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.Company.PhoneNo}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <Text style={styles.text3}>{item.Status}</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#000000',
                  // fontFamily: 'Segoe UI',
                  paddingVertical: 20,
                  paddingRight: 5,
                }}>
                {new Date(item.CallDateTime).toUTCString()}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={styles.text4}>{item.IsHired.toString()}</Text>
              <TouchableOpacity disabled={true} style={styles.btn1}>
                <Text style={styles.btntext1}>Hired</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                width: wp('43%'),
              }}></View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (item.RoomKey != null) {
              setOpenCall(true);
            } else {
              createRoom(item.InviteId);
            }
          }}>
          <Text style={styles.btntext}>
            {item.RoomKey != null ? 'Join Call' : 'Create Room'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.btntext}>Reschdule</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            // alert(item.CandidateId)
            changeCandidateId(item.CandidateId);
            navigation.navigate('CProfile');
          }}>
          <Text style={styles.btntext}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => deleteInvite(item.InviteId)}>
          <Text style={styles.btntext}>Delete</Text>
        </TouchableOpacity>
      </View>
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
              <View style={{marginLeft: -30}}>
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
                  // setSentInvite(true);
                  rescheduleInvite(item.InviteId, datename);
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Reschedule</Text>
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
                paddingHorizontal: '24%',
                paddingVertical: 4,
                color: 'black',
              }}>
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={openCall}>
        <WebView
          source={{uri: 'https://hiring.daily.co/' + item.RoomKey}}
          geolocationEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          onNavigationStateChange={(state) => {
            if (state.canGoBack) {
              setOpenCall(false);
              setHireModalVisible(true);
            }
          }}
        />
      </Modal>
      <Modal
        transparent={true}
        visible={hireModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setHireModalVisible(!hireModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Did you Hire?</Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={[
                  styles.button,
                  {backgroundColor: '#EA3A3A', marginLeft: -17},
                ]}
                onPress={() => {
                  // setSentInvite(true);
                  hireCandidate(item.InviteId);
                  setHireModalVisible(!hireModalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, {backgroundColor: '#007AFF'}]}
                onPress={() => setHireModalVisible(!hireModalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    height: 460,
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },

  view1: {
    width: wp('38%'),
    height: 340,
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
    height: 340,
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

  btn: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },

  btntext: {
    // fontFamily: 'Segoe UI',
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
    marginVertical: 10,
    marginHorizontal: 5,
  },

  btn1: {
    width: wp('25%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 5,
  },

  btntext1: {
    // fontFamily: 'Segoe UI',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  text4: {
    fontSize: 13,
    color: '#000000',
    // fontFamily: 'Segoe UI',
    paddingVertical: 20,
    marginLeft: 20,
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

    height: 30,
  },

  buttonClose: {
    backgroundColor: 'rgba(0,54,168,1)',
  },
  textStyle: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -6,
    fontSize: 16,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    marginTop: 8,
    textAlign: 'center',
    width: 160,
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

const mapDispatchToProps = {
  changeCandidateId,
  deleteInvite,
  rescheduleInvite,
  createRoom,
  hireCandidate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invitationcard);
