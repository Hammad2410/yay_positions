import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader';
import {connect} from 'react-redux';
import {getCandidateProfile} from '../redux/actions/employer';
import {Avatar} from 'react-native-paper';
import Pdf from 'react-native-pdf';
const Profile = ({navigation, bottom, employer, getCandidateProfile}) => {
  const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //     getCandidateProfile();
  //     console.log("Profile : ", employer.candidateProfile)
  // }, [employer.candidateId])

  return (
    <View style={{flex: 1}}>
      {employer.candidateProfile != null ? (
        <>
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view1}>
              <Avatar.Image
                source={{
                  uri:
                    'https://yaypositions.org/' +
                    employer.candidateProfile.Profile.ProfileImage,
                }}
                size={80}
                style={{alignSelf: 'center', marginTop: 20}}
              />
              {/* <Image source={require('../assests/image/profile.png')} style={{ marginTop: 20 }} /> */}
              {/* <Image source={{uri: 'https://yaypositions.org/' + employer.candidateProfile.Profile.ProfileImage  }} resizeMode={'contain'} style={{ marginTop: 20, height:50,width:50 }} /> */}
              <Text style={styles.text1}>
                {employer.candidateProfile.Profile.Name}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Email Address</Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 11,
                  // fontFamily: 'Segoe UI',
                  padding: 15,
                }}>
                {employer.candidateProfile.Profile.Email}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Gender</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Profile.Gender}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Salary Range</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Profile.SalaryRange}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Qualification</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Profile.Qualification}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
                marginBottom: 35,
              }}
            />
          </View>
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view2}>
              <Text style={styles.text4}>Custom Fields </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Country</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Country}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Level</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Profile.Level}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Experience</Text>
              <Text style={styles.text3}>
                {employer.candidateProfile.Profile.Experience}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#E4E4E4',
                alignItems: 'center',
                marginHorizontal: 10,
                marginBottom: 35,
              }}
            />
          </View>
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view2}>
              <Text style={styles.text4}>Skills and Tools</Text>
            </View>
            {employer.candidateProfile.Skills.map((item) => (
              <>
                <Text style={styles.text2}>{item}</Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#E4E4E4',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                />
              </>
            ))}
          </View>
          {employer.candidateProfile.EducationalInfos.map((item) => (
            <View style={[styles.view, {marginBottom: bottom}]}>
              <View style={styles.view2}>
                <Text style={styles.text4}>Educational Info</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Degree</Text>
                <Text style={styles.text3}>{item.Degree}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Institute Name</Text>
                <Text style={styles.text3}>{item.InstituteName}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Start Date</Text>
                <Text style={styles.text3}>{item.StartDate}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>End Date</Text>
                <Text style={styles.text3}>{item.EndDate}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Qualification Title</Text>
                <Text style={styles.text3}>{item.QualificationTitle}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Grade</Text>
                <Text style={styles.text3}>{item.Grade}</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />

              <Text style={styles.text5}>Description</Text>
              <Text style={styles.text3}>{item.DescriptionEducational}</Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  marginBottom: 35,
                }}
              />
            </View>
          ))}
          {
            <View style={[styles.view, {marginBottom: bottom}]}>
              <View style={styles.view2}>
                <Text style={styles.text4}>Job Experience </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Organization Name</Text>
                <Text style={styles.text3}>Test</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Your Role</Text>
                <Text style={styles.text3}>Test</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Start Date</Text>
                <Text style={styles.text3}>12-24-2019</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>End Date</Text>
                <Text style={styles.text3}>02-11-2021</Text>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              />

              <Text style={styles.text5}>Description</Text>
              <Text style={styles.text3}>I am a creative designer ………….</Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#E4E4E4',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  marginBottom: 35,
                }}
              />
            </View>
          }
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view2}>
              <Text style={styles.text4}>Resumes</Text>
            </View>

            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                if (employer.candidateProfile.Resumes.length > 0) {
                  setShowModal(true);
                } else {
                  alert('Resume not found');
                }
              }}>
              <Text style={styles.btntext}>View</Text>
            </TouchableOpacity>
          </View>
          {employer.candidateProfile.PortFolios.length > 0 && (
            <View style={[styles.view, {marginBottom: 30}]}>
              <View style={styles.view2}>
                <Text style={styles.text4}>Resumes</Text>
              </View>
              {employer.candidateProfile.PortFolios.map((item) => (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://yaypositions.org' + item.Path,
                  }}
                  style={{margin: 15, width: 100, height: 100}}></Image>
              ))}
            </View>
          )}

          <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
            <View style={{flex: 1}}>
              <Pdf
                source={{
                  uri:
                    employer.candidateProfile.length > 0
                      ? 'https://yaypositions.org' +
                        employer.candidateProfile.Resumes[0].ResumePath
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
        </>
      ) : (
        <ActivityIndicator
          size={'large'}
          color={'#009961'}
          style={{justifyContent: 'center', alignItems: 'center'}}
        />
      )}
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
  view: {
    flexDirection: 'column',
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
    width: wp('90%'),
    backgroundColor: '#001F3F',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  view2: {
    width: wp('90%'),
    backgroundColor: '#001F3F',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  text1: {
    color: 'white',
    fontSize: 19,
    // fontFamily: 'Segoe UI',
    fontWeight: '500',
    paddingTop: 2,
  },
  text2: {
    color: 'black',
    fontSize: 13,
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    padding: 15,
  },
  text3: {
    color: 'black',
    fontSize: 13,
    // fontFamily: 'Segoe UI',
    padding: 15,
  },
  text4: {
    color: 'white',
    fontSize: 17,
    // fontFamily: 'Segoe UI',
    fontWeight: '500',
    margin: 5,
  },
  text5: {
    color: 'black',
    fontSize: 13,
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  btn1: {
    width: wp('25%'),
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  btntext: {
    // fontFamily: 'Segoe UI',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({employer}) => ({employer});

const mapDispatchToProps = {getCandidateProfile};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
