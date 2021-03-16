import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import MyHeader from '../Components/LoginSignupHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import CandidateTab from '../Components/CandidateTab';
import { applyJobFilter } from '../redux/actions/candidate';
import { connect } from 'react-redux';

var filter = [
  { label: 'All', value: 'All' },
  { label: 'Full Time', value: 'Full Time' },
  { label: 'Part Time', value: 'Part Time' },
  { label: 'Internship', value: 'Internship' },
  { label: 'Temporary', value: 'Temporary' },
  { label: 'Permanent', value: 'Permanent' },
  { label: 'Contract', value: 'Contract' },
  { label: ' Freelance', value: 'Freelance' },
];

var salary = [
  { label: 'All', value: 'All' },
  { label: 'Hourly', value: 'Hourly' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' },
];

var job = [
  { label: 'All', value: 'All' },
  { label: 'High School', value: 'High School' },
  { label: 'Bachelors', value: 'Bachelors' },
  { label: 'Masters', value: 'Masters' },
  { label: 'Doctorate', value: 'Doctorate' },
  { label: 'Diploma', value: 'Diploma' },
  { label: 'MBBS', value: 'MBBS' },
];

var Skills = [
  { label: 'All', value: 'All' },
  { label: 'Analytical Skills', value: 'Analytical Skills' },
  { label: 'Application Development', value: 'Application Development' },
  { label: 'Architecture', value: 'Architecture' },
  { label: 'Arts', value: 'Arts' },
  { label: 'Communication Skills', value: 'Communication Skills' },
  { label: 'Cooking', value: 'Cooking' },
  { label: 'Culinary Arts', value: 'Culinary Arts' },
  { label: 'Data Network', value: 'Data Network' },
  { label: 'Designing', value: 'Designing' },
  { label: 'Development', value: 'Development' },
  { label: 'Education', value: 'Education' },
  { label: 'Flexibility', value: 'Flexibility' },
  { label: 'Food Products', value: 'Food Products' },
  { label: 'IT Engineering', value: 'IT Engineering' },
  { label: 'JS', value: 'JS' },
  { label: 'Managment', value: 'Managment' },
  { label: 'Medical and Healthcare', value: 'Medical and Healthcare' },
  { label: 'Modeling', value: 'Modeling' },
  { label: 'Office Managment', value: 'Office Managment' },
  { label: 'Painting', value: 'Painting' },
  { label: 'Patience', value: 'Patience' },
  { label: 'Php', value: 'Php' },
  { label: 'Problem Solving', value: 'Problem Solving' },
  { label: 'SEO', value: 'SEO' },
  { label: 'SMM', value: 'SMM' },
  { label: 'Stress Managment', value: 'Stress Managment' },
  { label: 'Team Managment', value: 'Team Managment' },
  { label: 'Team Work', value: 'Team Work' },
  { label: 'Technical', value: 'Technical' },
  { label: 'Trainings', value: 'Trainings' },
];
var Jexp = [
  { label: 'All', value: 'All' },
  { label: '1 year', value: '1year' },
  { label: '2 years', value: '2years' },
  { label: '3 years', value: '3years' },
  { label: '4 years', value: '4years' },
  { label: '5 years', value: '5years' },
  { label: '6 years', value: '6years' },
  { label: '7 years', value: '7years' },
  { label: '8 years', value: '8years' },
  { label: '9 years', value: '9years' },
  { label: '10 years', value: '10years' },
  { label: '10+years', value: '10+years' },
];
var SRange = [
  { label: 'Select', value: 'Select' },
  { label: '$50,000-$100,000', value: 'S1' },
  { label: '$200,000-$300,000', value: 'S2' },
  { label: '$300,000-$400,000', value: 'S3' },
  { label: '$400,000-$500,000', value: 'S4' },
  { label: '$500,000-$600,000', value: 'S5' },
  { label: '$600,000-$700,000', value: 'S6' },
  { label: '$700,000-$800,000', value: 'S7' },
  { label: '$800,000-$900,000', value: 'S8' },
  { label: '$900,000-$1,000,000', value: 'S9' },
];
const Filter = ({ navigation, candidate, applyJobFilter }) => {
  const [jobTypeArray, setJobTypeArray] = useState(candidate.jobs);
  const [salaryTypeArray, setSalaryTypeArray] = useState(candidate.jobs);
  const [skillArray, setSkillArray] = useState(candidate.jobs);
  const [experienceTypeArray, setExperienceTypeArray] = useState(
    candidate.jobs,
  );
  const [qualificationTypeArray, setQualificationTypeArray] = useState(
    candidate.jobs,
  );
  const [salaryRangeArray, setSalaryRangeArray] = useState(candidate.jobs);
  const [whatArray, setWhatArray] = useState(candidate.jobs);
  const [whereArray, setWhereArray] = useState(candidate.jobs);
  return (
    <Container style={{ backgroundColor: 'white' }}>
      <MyHeader navigation={navigation} />
      <Content>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
              marginRight: '3%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <TextInput
                placeholder="What"
                style={[styles.textinput]}
                onChangeText={(text) =>
                  setWhatArray(
                    candidate.jobs.filter((item) =>
                      item.Title.toLowerCase().includes(text.toLowerCase()),
                    ),
                  )
                }></TextInput>

              <TextInput
                placeholder="Where"
                style={[styles.textinput, { marginRight: 20 }]}
                onChangeText={(text) =>
                  setWhereArray(
                    candidate.jobs.filter((item) =>
                      item.Location.toLowerCase().includes(text.toLowerCase()),
                    ),
                  )
                }></TextInput>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                applyJobFilter(
                  whatArray.filter((item) => whereArray.includes(item)),
                );
                navigation.navigate('BrowseJobs');
              }}>
              <Text style={styles.btntext}>Search</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.text}>Search Filters</Text>
            <TouchableOpacity onPress={() => applyJobFilter(candidate.jobs)}>
              <Text style={styles.text1}>Clear all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Job Type</Text>
            <RadioForm
              radio_props={filter}
              initial={0}
              onPress={(value) => {
                if (value == 'All') {
                  setJobTypeArray(candidate.jobs);
                } else {
                  setJobTypeArray(
                    candidate.jobs.filter(
                      (item) => item.JobType == value.toString(),
                    ),
                  );
                }
              }}
              buttonSize={8}
              buttonOuterSize={20}
              selectedButtonColor={'green'}
              selectedLabelColor={'#000000'}
              buttonColor={'#707070'}
              labelStyle={{ fontSize: 13 }}
              style={{ marginTop: 15 }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Salary Type</Text>
            <RadioForm
              radio_props={salary}
              initial={0}
              onPress={(value) => {
                if (value == 'All') {
                  setSalaryTypeArray(candidate.jobs);
                } else {
                  setSalaryTypeArray(
                    candidate.jobs.filter(
                      (item) => item.SalaryType == value.toString(),
                    ),
                  );
                }
              }}
              buttonSize={8}
              buttonOuterSize={20}
              selectedButtonColor={'green'}
              selectedLabelColor={'#000000'}
              buttonColor={'#707070'}
              labelStyle={{ fontSize: 13 }}
              style={{ marginTop: 15 }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Skills</Text>
            <DropDownPicker
              items={Skills}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              placeholder={'Select your Skills'}
              placeholderStyle={{ color: '#000000', fontSize: 12 }}
              arrowSize={20}
              arrowColor={'#47525E'}
              containerStyle={{ height: 50, width: wp('80%') }}
              style={{
                backgroundColor: '#fffff',
                borderColor: '#707070',
                marginTop: 10,
              }}
              dropDownStyle={{ backgroundColor: '#ffffff' }}
              onChangeItem={(value) => {
                if (value.label == 'All') {
                  setSkillArray(candidate.jobs);
                } else {
                  setSkillArray(
                    candidate.jobs.filter((item) => item.Skill == value.label),
                  );
                }
              }}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                //var filter = jobTypeArray.filter((item) => salaryTypeArray.includes(item) )
                // applyJobFilter(filter.filter((item) => skillArray.includes(item) ))
                applyJobFilter(
                  jobTypeArray.filter((item) => salaryTypeArray.includes(item)),
                );
                navigation.navigate('BrowseJobs');
              }}>
              <Text style={styles.btntext}>Search</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Job Experience</Text>
            <DropDownPicker
              items={Jexp}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              placeholder={'Select Job Experience'}
              placeholderStyle={{ color: '#000000', fontSize: 12 }}
              arrowSize={20}
              arrowColor={'#47525E'}
              containerStyle={{ height: 50, width: wp('80%') }}
              style={{
                backgroundColor: '#fffff',
                borderColor: '#707070',
                marginTop: 10,
              }}
              dropDownStyle={{ backgroundColor: '#ffffff' }}
              onChangeItem={(value) => {
                if (value.label == 'All') {
                  setExperienceTypeArray(candidate.jobs);
                } else {
                  setExperienceTypeArray(
                    candidate.jobs.filter(
                      (item) => item.Experience == value.label,
                    ),
                  );
                }
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Job Qualification</Text>
            <RadioForm
              radio_props={job}
              initial={0}
              onPress={(value) => {
                value.toString(), ToastAndroid.SHORT;
              }}
              buttonSize={8}
              buttonOuterSize={20}
              selectedButtonColor={'green'}
              selectedLabelColor={'#000000'}
              buttonColor={'#707070'}
              labelStyle={{ fontSize: 13 }}
              style={{ marginTop: 15 }}
              onPress={(value) => {
                if (value == 'All') {
                  setQualificationTypeArray(candidate.jobs);
                } else {
                  setQualificationTypeArray(
                    candidate.jobs.filter(
                      (item) => item.Qualification == value.toString(),
                    ),
                  );
                }
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '3%',
              marginLeft: '10%',
            }}>
            <Text style={styles.text2}>Salary Range</Text>
            <DropDownPicker
              items={SRange}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              placeholder={'Select Salary Range'}
              placeholderStyle={{ color: '#000000', fontSize: 12 }}
              arrowSize={20}
              arrowColor={'#47525E'}
              containerStyle={{ height: 50, width: wp('80%') }}
              style={{
                backgroundColor: '#fffff',
                borderColor: '#707070',
                marginTop: 10,
              }}
              dropDownStyle={{ backgroundColor: '#ffffff' }}
              onChangeItem={(value) => {
                if (value.label == 'Select') {
                  setSalaryRangeArray(candidate.jobs);
                } else {
                  setSalaryRangeArray(
                    candidate.jobs.filter(
                      (item) => item.SalaryRange == value.label,
                    ),
                  );
                }
              }}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                var filter = salaryRangeArray.filter((item) =>
                  qualificationTypeArray.includes(item),
                );
                applyJobFilter(
                  filter.filter((item) => experienceTypeArray.includes(item)),
                );
                navigation.navigate('BrowseJobs');
              }}>
              <Text style={styles.btntext}>Search</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              marginHorizontal: '8%',
              marginBottom: 80,
              marginTop: 20,
            }}
          />
        </View>
      </Content>
      <CandidateTab
        navigation={navigation}
        First={'#E4E4E4'}
        Second={'#E4E4E4'}
        Third={'#009961'}
        Fourth={'#E4E4E4'}
        Fifth={'#E4E4E4'}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#707070',
    fontSize: 17,
    //fontFamily: 'Segoe UI',
  },

  text1: {
    color: '#707070',
    fontSize: 12,
    paddingRight: 40,
    paddingTop: 5,
  },
  text2: {
    color: '#000000',
    fontSize: 14,
    //fontFamily: 'Segoe UI',
  },
  btn: {
    width: wp('20%'),
    height: 35,
    backgroundColor: '#17A2B8',
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  btntext: {
    //fontFamily: 'Segoe UI',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textinput: {
    height: hp('5%'),
    width: wp('40%'),
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 12,
    padding: 10,
    textAlignVertical: 'top',
  },
});

const mapStateToProps = ({ candidate }) => ({ candidate });

const mapDispatchToProps = { applyJobFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
