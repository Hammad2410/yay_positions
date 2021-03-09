import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button, Modal, TextInput, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import DocumentPicker from 'react-native-document-picker';
import ButtonP from '../Components/ButtonP';
import EmployerTab from '../Components/EmployerTab'
import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';
import { updateCompanyDetail } from '../redux/actions/employer';
var RNFS = require('react-native-fs');

const CompanyDetail = ({ navigation, auth, updateCompanyDetail, employer }) => {

    const [company, setCompany] = useState(auth.profile.CompanyName);
    const [phone, setPhone] = useState(auth.profile.PhoneNo);
    const [headLine, setHeadLine] = useState(auth.profile.HeadLine);
    const [website, setWebsite] = useState(auth.profile.Website);
    const [description, setDescription] = useState(auth.profile.AboutYourself);

    const [Photo, setPhoto] = useState('');

    const openPhoto = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            RNFS.readFile(res.uri, 'base64')
                .then(res1 => {
                    setPhoto("data:" + res.type + ";base64," + res1);
                });
            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size
            );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }

    const onPressSave = () => {
        updateCompanyDetail(company, headLine, phone, website, Photo, "Pakistan", description)
    }


    return (
        <Container>
            <MyHeader navigation={navigation} />
            <Content >
                {auth.profile != null ? <>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={styles.text}>Company Details</Text>
                            <View style={styles.line}>
                            </View>
                        </View>


                        <View style={{ marginTop: 10, alignItems: 'center' }}>

                            <ProfileText nametext="Company Name" marginLeftt={-230} />
                            <TextInputLogin label="Company" value={company} setter={setCompany} />
                            <ProfileText nametext="Phone No." marginLeftt={-260} />
                            <TextInputLogin label="Phone No" Ktype={'number-pad'} value={phone} setter={setPhone} />
                            <ProfileText nametext="Head line" marginLeftt={-265} />
                            <TextInputLogin label="Head line" value={headLine} setter={setHeadLine} />
                            <ProfileText nametext="Website" marginLeftt={-265} />
                            <TextInputLogin label="Website" value={website} setter={setWebsite} />
                            <ProfileText nametext="Profile Image" marginLeftt={-243} />
                            <View style={{
                                height: hp('5%'),
                                width: wp('80%'),
                                borderColor: '#707070',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                fontSize: 12,
                                padding: 10,
                                marginBottom: 15,
                                alignSelf: 'center', flexDirection: 'row'
                            }}>
                                <TouchableOpacity onPress={() => openPhoto()}
                                    style={{
                                        borderColor: '#707070',
                                        backgroundColor: '#E4E4E4', width: 90,

                                    }}>
                                    <Text style={{ textAlign: 'center' }}>
                                        Choose File

                    </Text>
                                </TouchableOpacity>
                                <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                    {Photo.name || 'No File Chosen'}
                                </Text>
                            </View>


                            <ProfileText nametext="Description" marginLeftt={-255} />
                            <TextInput placeholder="About Yourself" placeholderTextColor='#707070' style={styles.textinput} value={description} onChangeText={(text) => setDescription(text)} ></TextInput>
                            {employer.loading ? <ActivityIndicator size={'large'} color={'#009961'} style={{ justifyContent: 'center', alignItems: 'center' }} /> : <View style={{ marginLeft: -160 }}>
                                <ButtonP Bwidth={wp('40%')} NameButton="Update Information" buttonAction={onPressSave} />
                            </View>}
                        </View>

                    </View>
                </> : <ActivityIndicator size={'large'} color={'#009961'} style={{ justifyContent: 'center', alignItems: 'center' }} />
                }

            </Content>
            <EmployerTab navigation={navigation} EFirst={'#009961'} ESecond={'#E4E4E4'} EThird={'#E4E4E4'} EFourth={'#E4E4E4'} EFifth={'#E4E4E4'} />
        </Container>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#707070',
        fontSize: 20
    },
    line: {
        height: 5,
        width: wp('11%'),
        backgroundColor: '#009961',
        borderColor: '#707070',
        borderWidth: 2,
        marginTop: 10
    },

    textinput: {
        height: hp('15%'),
        width: wp('80%'),
        borderColor: '#707070',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 12,
        padding: 10,
        textAlignVertical: 'top'
    },
})

const mapStateToProps = ({ auth, employer }) => ({ auth, employer })

const mapDispatchToProps = { updateCompanyDetail }

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);