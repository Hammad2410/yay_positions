import React, { useState } from 'react';
import {
    View, Text, 
    StyleSheet, Image, TextInput,Modal,Pressable,KeyboardAvoidingView,ScrollView
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';



const ErrorModal = ({ navigation, title, message, visible, onPress }) => {
    // const [modalVisible, setModalVisible] = useState(false);
    return (
        
            <Modal
        
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>

          <Text style={{alignSelf:'flex-start',color:'black',marginTop:-20,fontSize:20}}>Alert</Text>
          <Pressable onPress={() => {onPress()}}>
          <Icon name='cross'  size={25} color='grey' style={{marginTop:-20,marginLeft:150}}/>
          </Pressable>
          </View>
            <Text style={styles.modalText}>Error?</Text>
         
           
            <View style={{flex:1,flexDirection:'row',marginTop:50,alignSelf:'center'}}>
            
            </View>
          </View>
        </View>
        
      </Modal> 

  
          
         

         
    )
}
export default ErrorModal;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor:'transparent',alignSelf:'center' },
    child: { width:wp('100%'),},
    text: { fontSize:16.67,paddingTop:14,paddingLeft:24, fontSize:11,color:'#7B93A9',fontWeight:'normal',fontFamily:'Mulish'},
    text2: { fontSize:10,paddingTop:20,color:'#CA7E00'},
    child2: { width:13,height:13,position:'absolute',top:60,alignSelf:'center',left:157},
      icon:{ color: 'black',right:10,top:55,position:'absolute'},
      item:{width:350,alignSelf:'center'},
      input:{fontSize:16,color:'#39325C',fontWeight:'400',paddingLeft:-5},
      centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: -360,
       alignSelf:'center'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 35,
        width:270,
        height:110,
      
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
        width:71,
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
        color:'green',
        fontWeight:"400",
       marginTop:30,
       textAlign:'center',
      width:160
      }
     
});