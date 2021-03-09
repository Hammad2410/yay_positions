import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet, Image, TextInput, Modal, Pressable, KeyboardAvoidingView, ScrollView, TouchableOpacity
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
          <View style={{ flex: 1, flexDirection: 'row', justifyContent:'center' }}>

            <Text style={{ flex:1,textAlign:'center', color: 'black', fontSize: 20, }}>Alert</Text>
            <TouchableOpacity style={{}}  onPress={() => { onPress() }}>
       <Icon name='cross' size={25} color='grey' />
       </TouchableOpacity>
       
          </View>
          <View style={{flex:1}}>
       <Text style={styles.modalText}>{message}</Text>  
       </View>
        

          
        </View>
      </View>

    </Modal>






  )
}
export default ErrorModal;
const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 10,
    width: 270,
    height: 150,

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
    width: 71,
    height: 30,

  },

  buttonClose: {
    backgroundColor: "rgba(0,54,168,1)",
  },
  textStyle: {
    color: "white",
    fontWeight: "400",
    textAlign: "center",
   
    fontSize: 16
  },
  modalText: {
   
    fontSize: 16,
    color: 'green',
    fontWeight: "400",
 textAlign:'center'
    
    
  }

});