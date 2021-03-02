import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';

import Icon from 'react-native-vector-icons/Ionicons';

const SavedJobs = ({ navigation }) => {
    const [messages, setMessage] = useState([
       {
       
        Designation: "Marketing Manager",
        Location:"New York, USA",
        Role: "Marketing and communication",
        sendingTime: "09:2",
       

    }, {
        
        Designation: "Marketing Manager",
        Location:"New York, USA",
        Role: "Marketing and communication",
        sendingTime: "09:27",
 
    },
    {
       
        Designation: "Marketing Manager",
        Location:"New York, USA",
        Role: "Marketing and communication",
        sendingTime: "13:43",
        
    }
    ])
return (
<Container>
<MyHeader  navigation={navigation}/>
<Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>

<View style={{flex:1}}>
    <View style={{marginTop:30,marginLeft:21}}>
<Text style={styles.text} >Saved Jobs</Text>
<View style={styles.line}>
</View>
</View>
<View style={styles.listMainContainer}>
                 <FlatList
                    style={{ marginTop: 10 }}
                    data={messages}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginVertical: 5,
                            width: wp('90%'),
                            height:100,
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
                            elevation: 5
                        }}>
                           
                            <View style={{ flex: 1 }}>
                                <View style={{
                                    flex: 1, flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        flex: 1,
                                        marginTop:15,
                                        paddingLeft: 20
                                        , fontWeight: 'bold'
                                    }} >{item.Designation}</Text>
                                    
                                </View>
                                <View style={{
                                    flex: 1, flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{
                                        flex: 1,
                                        marginTop:8,
                                        paddingLeft: 20 ,
                                        fontSize:12
                                    }} >{item.Location}</Text>
                                       <Icon name="ios-heart" size={25} color="green" style={{marginRight:20}} />
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    
                                    
                                }}>
                                    <Text style={{
                                        paddingLeft: 20,
                                        flex: 1,
                                        fontSize:10,
                                        marginTop:-2,
                                    }} >{item.Role}</Text>
                                   
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                /> 
                </View>

</View>
</Content>
</Container>
  )    
}
export default SavedJobs;
const styles = StyleSheet.create({
    listMainContainer:
    {
        flex: 1,
        
        marginTop: 10, 
    },
text:{
    color:'#707070',
    fontSize:20
},
line:{
    height:5,
    width:wp('11%'),
    backgroundColor:'#009961',
    borderColor:'#707070',
    borderWidth:2,
    marginTop:10
},



})