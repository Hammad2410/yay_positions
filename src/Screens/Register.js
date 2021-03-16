import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  PixelRatio,
  TextInput,
} from 'react-native';
import {
  Content,
  Container,
  Tabs,
  Tab,
  Footer,
  Button,
  Form,
  Input,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import {connect} from 'react-redux';
import {register, resetUserRegistered} from '../redux/actions/auth';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/AntDesign';

const Register = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [withFlag, setWithFlag] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setWithCallingCode(country.callingCode);
  };

  const [role, setRole] = useState('Candidate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container style={{backgroundColor: 'white'}}>
      <MyHeader navigation={props.navigation} />
      <Content>
        <View style={{flex: 1}}>
          <View style={{marginTop: 30, marginLeft: 40}}>
            <Text style={styles.text}>Register</Text>
            <View style={styles.line}></View>
          </View>
          <View style={{height: 200, alignItems: 'center', marginTop: '7%'}}>
            <TextInputLogin value={email} setter={setEmail} label="Email" />
            <TextInputLogin label="Name" value={name} setter={setName} />
            <View style={styles.switchContainer}>
              <Button
                onPress={() => setRole('Candidate')}
                style={[
                  styles.switchBtn,
                  {
                    backgroundColor:
                      role === 'Candidate' ? '#016742' : '#009961',
                  },
                ]}>
                <Text style={styles.switchText}>Candidate</Text>
              </Button>
              <Button
                onPress={() => setRole('Employer')}
                style={[
                  styles.switchBtn,
                  {
                    backgroundColor:
                      role === 'Employer' ? '#016742' : '#009961',
                  },
                ]}>
                <Text style={styles.switchText}>Employer</Text>
              </Button>
            </View>
          </View>
          <View style={{alignItems: 'center', height: 170}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',

                height: hp('8%'),
                width: wp('80%'),
                borderColor: '#707070',
                borderWidth: 0.5,
                borderRadius: 5,
                fontSize: 12,
                paddingLeft: 10,
                alignItems: 'center',
                marginBottom: 15,
                alignSelf: 'center',
              }}>
              <CountryPicker
                {...{
                  countryCode,
                  withFlag,
                  withCallingCode,
                  onSelect,
                }}
                withFilter={true}
                visible={visibility}
                onClose={() => setVisibility(false)}
              />
              {country !== null ? (
                <Text style={styles.data}>{country.name}</Text>
              ) : (
                <Text style={{fontSize: 15}}>United States</Text>
              )}
            </View>
            <TextInput
              value={password}
              placeholder={'Password'}
              placeholderTextColor="#707070"
              style={styles.textinput}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              value={confirmPassword}
              placeholder={'Confirm Password'}
              placeholderTextColor="#707070"
              style={styles.textinput}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
          </View>
          {/* <Text style={{ alignSelf: 'center', color: 'red' }}>{props.auth.error}</Text> */}
          {props.auth.loading ? (
            <ActivityIndicator size={'large'} color={'#009961'} />
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                props.register(
                  email,
                  name,
                  country,
                  role,
                  password,
                  confirmPassword,
                )
              }>
              <Text style={styles.btntext}>Register</Text>
            </TouchableOpacity>
          )}
        </View>
      </Content>
      <Footer style={{backgroundColor: '#009961', height: 40}}></Footer>
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
  btn: {
    backgroundColor: '#009961',
    width: wp('40%'),
    height: hp(6),
    marginLeft: '10%',
    borderRadius: 30,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  switchContainer: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  switchBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13,
  },
  data: {
    marginTop: 5,

    color: 'black',
  },
  textinput: {
    height: hp('5%'),
    width: wp('80%'),
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 12,
    padding: 10,
    marginBottom: 15,
    alignSelf: 'center',
  },
});

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = {register, resetUserRegistered};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
