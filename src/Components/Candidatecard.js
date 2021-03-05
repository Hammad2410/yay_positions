import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,Modal,Pressable,TextInput} from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader'


const Candidatecard = ({ navigation,bottom }) => {
  const [modalVisible, setModalVisible] = useState(false);

return (

 
<View style={[styles.view,{marginBottom:bottom}]}>
<Modal
        
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>Date Time for call</Text>
            <TextInput placeholder='yyyy-mm-dd hh:mm:ss' placeholderTextColor='#707070' style={styles.modalInput}></TextInput>
            </Pressable>
           
            <View style={{flex:1,flexDirection:'row',marginTop:20}}>
            <Pressable
              style={[styles.button,{backgroundColor:'#EA3A3A',marginLeft:-17}]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Send Invitation</Text>
            </Pressable>
            <Pressable
              style={[styles.button,{backgroundColor:'#007AFF',marginLeft:48}]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            </View>
          </View>
        </View>
        
      </Modal> 
<TouchableOpacity>
    <View style={{alignItems:'flex-end',padding:10}}>
      
<Icon color={'#001F3F'} name={'square-o'} size={35}></Icon>
    <Icon color={'green'} name={'heart-o'} size={15} style={{marginTop:-27,marginRight:6.5}}></Icon>
   
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row'}}>
  <View style={styles.view1}>
<View style={{flexDirection:'column'}}>
<Text style={styles.text2}>Name</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',marginLeft:10,width:wp('40%')}}></View>
<Text style={styles.text2}>Profession</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',marginLeft:10,width:wp('40%')}}></View>
<Text style={styles.text2}>Experience</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',marginLeft:10,width:wp('40%')}}></View>
<Text style={styles.text2}>Level</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',marginLeft:10,width:wp('40%')}}></View>
<Text style={styles.text2}></Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',marginLeft:10,width:wp('40%')}}></View>
</View>

  </View>
  <View style={styles.view2}>
<View style={{flexDirection:'column'}}>
<Text style={styles.text3}>Test</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',width:wp('42%')}}></View>
<Text style={styles.text3}>Test</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',width:wp('42%')}}></View>
<Text style={styles.text3}>Test</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',width:wp('42%')}}></View>
<Text style={styles.text3}>Test</Text>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',width:wp('42%')}}></View>
<View style={{flexDirection:'row'}}>
<TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
<Text style={styles.btntext}>Send Invitation</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn1} onPress={()=> navigation.navigate('CProfile')}>
<Text style={styles.btntext} >View Profile</Text>
</TouchableOpacity>
</View>
<View style={{borderWidth:0.5,borderColor:'#E4E4E4',width:wp('42%')}}></View>
</View>

  </View>
</View>
</View>


  )    
}
export default Candidatecard;
const styles = StyleSheet.create({
    text:{
        color:'#707070',
        fontSize:20,
    },
    line:{
        height:5,
        width:wp('11%'),
        backgroundColor:'#009961',
        borderColor:'#707070',
        borderWidth:2,
        marginTop:10
    },
    text1:{
        fontSize:13,
        color:'#009961',
        fontFamily:'Segoe UI',
      
    },
    view:{
        height:400,
        alignSelf:'center',
        width:wp('90%'),
        backgroundColor:'white',
        marginTop:15,
        borderRadius:12,
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        shadowColor:'#000',
      shadowOffset: { width: 0, height: 2 },
      },
      view1:{
        width:wp('38%'),
        height:320,
        backgroundColor:'#001F3F',
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        marginLeft:10,
        marginVertical:14

      },
      text2:{
        fontSize:13,
        fontWeight:'bold',
        color:'#FFFFFF',
        fontFamily:'Segoe UI',
        padding:20
      },
      view2:{
        width:wp('40%'),
        height:320,
        backgroundColor:'white',
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        marginLeft:10,
        marginVertical:14
      },
      text3:{
        fontSize:13,
        color:'#000000',
        fontFamily:'Segoe UI',
        paddingVertical:20,
 textAlign:'right'
      },
      btn:{
        width:wp('25%'),
        height:40,
        backgroundColor:'#1492E6',
        borderRadius:8,
        justifyContent: 'center',
        marginVertical:10,
        marginRight:5
        
    },
    btn1:{
        width:wp('19%'),
        height:40,
        backgroundColor:'#17A2B8',
        borderRadius:8,
        justifyContent: 'center',
    marginVertical:10
   
        
    },
    btntext:
    { fontFamily:'Segoe UI',
       fontSize:11,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      
     alignSelf:'center'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      padding: 35,
      width:270,
      height:182,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      
      height:30,

    },
    
    buttonClose: {
      backgroundColor: "rgba(0,54,168,1)",
    },
    textStyle: {
      color: "white",
      fontWeight: "400",
      textAlign: "center",
      marginTop:-6,
      fontSize:16
    },
    modalText: {
      alignSelf:'center',
      fontSize:16,
      color:'black',
      fontWeight:"400",
     marginTop:8,
     textAlign:'center',
    width:160
    },
   modalInput:{
    height: hp('5%'),
    width: wp('60%'),
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 12,
    padding: 10,
    marginTop:10,
    alignSelf: 'center',
   }

})