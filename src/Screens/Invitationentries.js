import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {Content, Container, Header, Title, Left} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import MyHeader from '../Components/LoginSignupHeader';
import Invitationcard from '../Components/Invitationcard';
import EmployerTab from '../Components/EmployerTab';
import {connect} from 'react-redux';

const Invitationentries = (props) => {
  const [search, setSearch] = useState('');

  return (
    <Container style={{backgroundColor: 'white'}}>
      <MyHeader navigation={props.navigation} />
      <Content>
        <View style={{flex: 1}}>
          <View style={{marginLeft: 40}}>
            <Text style={styles.text}>Invitations</Text>
            <View style={styles.line}></View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={styles.text1}>Show</Text>
            <DropDownPicker
              placeholder={'10'}
              placeholderStyle={{color: '#000000', fontSize: 10}}
              arrowSize={20}
              arrowColor={'#666666'}
              containerStyle={{height: 45, width: wp('18%')}}
              style={{
                backgroundColor: '#fffff',
                borderColor: '#707070',
                marginTop: 10,
              }}
              dropDownStyle={{backgroundColor: '#009961'}}
            />
            <Text style={styles.text2}>entries</Text>
            <Text style={styles.text3}>Search:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setSearch(text);
              }}
            />
          </View>

          <FlatList
            data={props.candidate.invitations.filter((item) =>
              JSON.stringify(item).toLowerCase().includes(search.toLowerCase()),
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Invitationcard item={item} navigation={props.navigation} />
            )}
          />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text4}>Showing 1 to 1 of entries</Text>
            <TouchableOpacity>
              <Text style={styles.text5}>Previous</Text>
            </TouchableOpacity>
            <View
              style={{
                width: wp('7%'),
                backgroundColor: '#BCB9B9',
                height: 25,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#707070',
                marginVertical: 12,
                marginHorizontal: 5,
              }}
            />
            <TouchableOpacity>
              <Text style={styles.text6}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
      <EmployerTab
        navigation={props.navigation}
        EFirst={'#E4E4E4'}
        ESecond={'#E4E4E4'}
        EThird={'#E4E4E4'}
        EFourth={'#E4E4E4'}
        EFifth={'#009961'}
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
});

const mapStateToProps = ({candidate}) => ({candidate});

export default connect(mapStateToProps)(Invitationentries);
