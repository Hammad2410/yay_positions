import React, { useState } from 'react';
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
import { Content, Container, Tabs, Tab } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import CandidateTab from '../Components/CandidateTab';
import { deleteResume } from '../redux/actions/candidate';
import { connect } from 'react-redux';
import { getCandidateProfile, updateResume } from '../redux/actions/candidate';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
import ButtonP from '../Components/ButtonP';
var RNFS = require('react-native-fs');

const MyResume = ({ navigation, auth, deleteResume, updateResume }) => {
  const [showModal, setShowModal] = useState(false);
  const [Resume, setResume] = useState('');

  const openResume = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      RNFS.readFile(res.uri, 'base64').then((res1) => {
        setResume('data:' + res.type + ';base64,' + res1);
      });

      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  const onPressResume = () => {
    updateResume(Resume);
  };
  return (
    <Container>
      <MyHeader navigation={navigation} />
      <Content>
        <View style={{ flex: 1 }}>
          <View style={{ marginLeft: 40 }}>
            <Text style={styles.text}>My Resumes</Text>
            <View style={styles.line}></View>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ marginLeft: 35 }}
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
              style={{ marginLeft: 25 }}
              onPress={() => deleteResume()}>
              <View style={styles.button}>
                <Text style={styles.btext}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <ProfileText nametext="Add Resume" marginLeftt={-235} />
            <View
              style={{
                height: hp('5%'),
                width: wp('80%'),
                borderColor: '#707070',
                borderWidth: 0.5,
                borderRadius: 5,
                fontSize: 12,
                padding: 10,
                marginBottom: 15,
                alignSelf: 'center',
                flexDirection: 'row',
                marginLeft: -6,
              }}>
              <TouchableOpacity
                onPress={() => openResume()}
                style={{
                  borderColor: '#707070',
                  backgroundColor: '#E4E4E4',
                  width: 90,
                }}>
                <Text style={{ textAlign: 'center' }}>Choose File</Text>
              </TouchableOpacity>
              {Resume === '' ? (
                <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                  No File Chosen
                </Text>
              ) : (
                <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                  Resume Added
                </Text>
              )}
            </View>
            <View style={{ marginLeft: -200 }}>
              <ButtonP
                Bwidth={wp('30%')}
                NameButton="Save Resume"
                buttonAction={onPressResume}
              />
            </View>
          </View>
        </View>

        <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
          <View style={{ flex: 1 }}>
            {auth.profile.Resumes.length > 0 &&
              auth.profile.Resumes[0].ResumePath.includes('.pdf') ? (
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
            ) : (
              <Image
                source={{
                  uri:
                    auth.profile.Resumes.length > 0
                      ? 'https://yaypositions.org' +
                      auth.profile.Resumes[0].ResumePath
                      : null,
                }}
                resizeMode="contain"
                style={{ flex: 1 }}
              />
            )}
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

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { deleteResume, updateResume };

export default connect(mapStateToProps, mapDispatchToProps)(MyResume);
