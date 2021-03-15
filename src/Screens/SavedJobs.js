import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import { getSavedJobs, saveJobs, selectJob } from '../redux/actions/candidate';
import { connect } from 'react-redux';
import CandidateTab from '../Components/CandidateTab';
import Icon from 'react-native-vector-icons/Ionicons';

const SavedJobs = (props) => {

    useEffect(() => {
        props.getSavedJobs()
    }, [])

    const [messages, setMessage] = useState([
        {

            Designation: "Marketing Manager",
            Location: "New York, USA",
            Role: "Marketing and communication",
            sendingTime: "09:2",


        }, {

            Designation: "Marketing Manager",
            Location: "New York, USA",
            Role: "Marketing and communication",
            sendingTime: "09:27",

        },
        {

            Designation: "Marketing Manager",
            Location: "New York, USA",
            Role: "Marketing and communication",
            sendingTime: "13:43",

        }
    ])

    return (
        <Container>
            <MyHeader navigation={props.navigation} />
            <Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 30, marginLeft: 21 }}>
                        <Text style={styles.text}>Saved Jobs</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={styles.listMainContainer}>
                        <FlatList
                            style={{ marginTop: 10 }}
                            data={props.candidate.savedJobs}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    // disabled={true}
                                    style={{

                                        flex: 1,
                                        flexDirection: 'row',
                                        marginVertical: 5,
                                        width: wp('90%'),
                                        // height: 100,
                                        borderRadius: 5,
                                        alignSelf: 'center',
                                        backgroundColor: 'white',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 4,
                                        elevation: 5,
                                        // paddingBottom: 5
                                    }} onPress={() => {
                                        console.log(item)
                                        props.selectJob(item.Job)
                                        props.navigation.navigate('Applyjob', { role: 'candidate' })
                                    }}>

                                    <View style={{ flex: 1 }}>
                                        <View style={{
                                            flex: 1, flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Text style={{
                                                flex: 1,
                                                marginTop: 15,
                                                paddingLeft: 20
                                                , fontWeight: 'bold'
                                            }} >{item.Job.Title}</Text>

                                        </View>
                                        <View style={{
                                            flex: 1, flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Text style={{
                                                flex: 1,
                                                marginTop: 8,
                                                paddingLeft: 20,
                                                fontSize: 12
                                            }} >{item.Job.Location}</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.saveJobs(item.Job)
                                                // console.log(item.Job)
                                            }}>
                                                <Icon name="ios-heart" size={25} color="green" style={{ marginRight: 20 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginBottom: 5

                                        }}>
                                            <Text style={{
                                                paddingLeft: 20,
                                                flex: 1,
                                                fontSize: 10,
                                                marginTop: -2,
                                            }} >{item.Job.JobDescription}</Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>

                </View>
            </Content>
            <CandidateTab navigation={props.navigation} First={'#E4E4E4'} Second={'#E4E4E4'} Third={'#E4E4E4'} Fourth={'#009961'} Fifth={'#E4E4E4'} />
        </Container>
    )
}

const styles = StyleSheet.create({
    listMainContainer:
    {
        flex: 1,

        marginTop: 10,
    },
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



})

const mapStateToProps = ({ candidate }) => ({ candidate })

const mapDispatchToProps = { getSavedJobs, saveJobs, selectJob }

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobs);