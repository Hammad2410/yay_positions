import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader'
import Jobs from '../Components/Jobs'
import { connect } from 'react-redux';
import { getJobs } from '../redux/actions/candidate';
import CandidateTab from '../Components/CandidateTab';

const BrowseJobs = (props) => {

    useEffect(() => {
        //  props.getJobs()
    }, [])

    return (
        <Container style={{ backgroundColor: 'white' }} >
            <MyHeader navigation={props.navigation}/>
            <Content >
                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.text}>Browse Jobs</Text>
                        <View style={styles.line}>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end', marginTop: 15, marginRight: 25 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Filter')}>
                            <Text style={styles.text1}>Search Filters</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={props.candidate.filteredJob}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <Jobs item={item} navigation={props.navigation} />}
                    />

                    {/* <Jobs bottom={'2%'} /> */}
                </View>
            </Content>
            <CandidateTab navigation={props.navigation} First={'#E4E4E4'} Second={'#E4E4E4'} Third={'#009961'} Fourth={'#E4E4E4'} Fifth={'#E4E4E4'}/>
        </Container>
    )

}

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
        marginTop: 10
    },
    text1: {
        fontSize: 13,
        color: '#009961',
        fontFamily: 'Segoe UI',

    },


})

const mapStateToProps = ({ candidate }) => ({ candidate })

const mapDispatchToProps = { getJobs }

export default connect(mapStateToProps, mapDispatchToProps)(BrowseJobs);