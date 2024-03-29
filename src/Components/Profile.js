import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader';
import {connect} from 'react-redux';
import {getCandidateProfile} from '../redux/actions/candidate';
import Pdf from 'react-native-pdf';
import {Avatar} from 'react-native-paper';
const Profile = ({navigation, bottom, auth, getCandidateProfile}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getCandidateProfile();
  }, []);

  return (
    <View style={{flex: 1}}>
      {auth.profile != null ? (
        <>
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view1}>
              <Avatar.Image
                source={{
                  uri:
                    'https://yaypositions.org/' +
                    auth.profile.Profile.ProfileImage,
                }}
                size={80}
                style={{alignSelf: 'center', marginTop: 20}}
              />
              {/* <Image source={require('../assests/image/profile.png')} style={{ marginTop: 20 }} /> */}
              {/* <Image source={{uri: 'https://yaypositions.org/' + auth.profile.Profile.ProfileImage  }} resizeMode={'contain'} style={{ marginTop: 20, height:50,width:50,borderRadius:5 }} /> */}
              <Text style={styles.text1}>{auth.profile.Profile.Name}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Email Address</Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  // fontFamily: 'Segoe UI',
                  padding: 15,
                }}>
                {auth.profile.Profile.Email}
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
              <Text style={styles.text3}>{auth.profile.Profile.Gender}</Text>
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
                {auth.profile.Profile.SalaryRange}
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
                {auth.profile.Profile.Qualification}
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
              <Text style={styles.text3}>{auth.profile.Country}</Text>
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
              <Text style={styles.text3}>{auth.profile.Profile.Level}</Text>
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
                {auth.profile.Profile.Experience}
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
            {auth.profile.Skills.map((item) => (
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
          {auth.profile.EducationalInfos.map((item) => (
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
          {auth.profile.JobExperiences.map((item) => (
            <View style={[styles.view, {marginBottom: bottom}]}>
              <View style={styles.view2}>
                <Text style={styles.text4}>Job Experience </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text2}>Organization Name</Text>
                <Text style={styles.text3}>{item.OrganizationName}</Text>
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
                <Text style={styles.text3}>{item.YourRole}</Text>
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
                <Text style={styles.text3}>{item.JobStartDate}</Text>
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
                <Text style={styles.text3}>{item.JobEndDate}</Text>
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
              <Text style={styles.text3}>{item.DescriptionJob}</Text>
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
          <View style={[styles.view, {marginBottom: bottom}]}>
            <View style={styles.view2}>
              <Text style={styles.text4}>Resumes</Text>
            </View>

            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                if (auth.profile.Resumes.length > 0) {
                  setShowModal(true);
                } else {
                  alert('Resume not found');
                }
              }}>
              <Text style={styles.btntext}>View</Text>
            </TouchableOpacity>
          </View>
          {auth.profile.PortFolios.length > 0 && (
            <View style={[styles.view, {marginBottom: 30}]}>
              <View style={styles.view2}>
                <Text style={styles.text4}>Resumes</Text>
              </View>
              {auth.profile.PortFolios.map((item) => (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://yaypositions.org' + item.Path,
                  }}
                  style={{margin: 15, width: 100, height: 100}}></Image>
              ))}
              {/* <Image
                            resizeMode="contain"
                            source={require('../assests/image/resume.png')}
                            style={{ margin: 15 }}></Image> */}
            </View>
          )}
          <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
            <View style={{flex: 1}}>
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
                  style={{flex: 1}}
                />
              )}
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
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = {getCandidateProfile};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
