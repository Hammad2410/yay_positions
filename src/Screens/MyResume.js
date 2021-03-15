import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
import {Content, Container, Tabs, Tab} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import CandidateTab from '../Components/CandidateTab';
import {deleteResume} from '../redux/actions/candidate';
import {connect} from 'react-redux';
import {getCandidateProfile} from '../redux/actions/candidate';
import Pdf from 'react-native-pdf';

const MyResume = ({navigation, auth, deleteResume}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <MyHeader navigation={navigation} />
      <Content>
        <View style={{flex: 1}}>
          <View style={{marginLeft: 40}}>
            <Text style={styles.text}>My Resumes</Text>
            <View style={styles.line}></View>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginLeft: 35}}
              onPress={() => {
                if (auth.profile.Resumes.length > 0) {
                  setShowModal(true);
                } else {
                  alert('Resume not found');
                }
              }}>
              <View style={styles.button}>
                <Text style={styles.btext}>View</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 25}}
              onPress={() => deleteResume()}>
              <View style={styles.button}>
                <Text style={styles.btext}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
          <View style={{flex: 1}}>
            <Pdf
              source={{
                uri:
                  auth.profile.Resumes.length > 0
                    ? 'https://yaypositions.org' +
                      auth.profile.Resumes[0].ResumePath
                    : null,
              }}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`current page: ${page}`);
              }}
              onError={(error) => {
                console.log(error);
              }}
              onPressLink={(uri) => {
                console.log(`Link presse: ${uri}`);
              }}
              style={styles.pdf}
            />
          </View>
        </Modal>
      </Content>
      <CandidateTab
        navigation={navigation}
        First={'#E4E4E4'}
        Second={'#009961'}
        Third={'#E4E4E4'}
        Fourth={'#E4E4E4'}
        Fifth={'#E4E4E4'}
      />
    </Container>
  );
};
// export default MyResume;
const styles = StyleSheet.create({
  btext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
  },
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

  button: {
    height: hp('4.5%'),
    width: wp('20%'),
    backgroundColor: '#001F3F',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    alignContent: 'center',
    marginBottom: 15,

    marginTop: 30,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = {deleteResume};

export default connect(mapStateToProps, mapDispatchToProps)(MyResume);
