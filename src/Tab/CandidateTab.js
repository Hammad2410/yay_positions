import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";


import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Welcome from '../Screens/Welcome';
import Register from '../Screens/Register'
import Login from '../Screens/Login'
import SavedJobs from '../Screens/SavedJobs'
import PersonalInfo from '../Screens/PersonalInfo'
import Educationalinfo from '../Screens/Educationalinfo'
import JobExper from '../Screens/JobExper'
import CompanyDetail from '../Screens/CompanyDetail';
import CreateJob from '../Screens/CreateJob';
import MyResume from '../Screens/MyResume';
import Changepass from '../Screens/Changepass';




const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress,}) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute',  }}>
                    <View style={{ flex: 1, backgroundColor:'white' }}></View>
                </View>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:100,
                        height: 50,
                       
                        backgroundColor:'#FAFAFA'
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
                
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 50,
                    backgroundColor:'#FAFAFA'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CandidateTab = () => {
    return(
<Tab.Navigator 
initialRouteName="Register"

tabBarOptions={{
    activeTintColor: '#009961',
    inactiveTintColor:"#E4E4E4",
    showLabel: false,
    
    style: {
        left: 0,
        bottom: 10,
        right: 0,
        top:-5,
        
        borderTopWidth: 0,
        elevation: 0,
    }
}}
    >
        
    <Tab.Screen
    
     name="welcome"
     component={Welcome}
     
     options={{
         
         tabBarIcon: ({ focused,color }) => (
             <Iconss
             name='person' size={30} style={{color:color}}
                  
    />
         ),
         tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
              
            />
        )
                }}
                />

<Tab.Screen
     name="MyResume"
     component={MyResume}

     options={{
         
         tabBarIcon: ({ focused ,color}) => (
           
            <Icons
            name='file-text' size={27} 
            style={{color:color}}   
   />
   
         ),
         
         tabBarButton: (props) => (
            <TabBarCustomButton
                {...props
                }
                
              
            />
        )
                }}
                />
                <Tab.Screen
     name="PersonalInfo"
     component={PersonalInfo}
     options={{
         
         tabBarIcon: ({ focused,color }) => (
            <Icon5
            name='upload' size={40} 
            style={{color:color}}    
   />
         ),
         
         tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
              
            />
        )
                }}
                />

<Tab.Screen
     name="SavedJobs"
     component={SavedJobs}
     options={{
         
         tabBarIcon: ({ focused,color }) => (
            <Icon
            name='save' size={35} 
            style={{color:color}}  
   />
         ),
         
         tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
              
            />
        )
                }}
                />

<Tab.Screen
     name="Changepass"
     
     component={Changepass}
     options={{
         
         tabBarIcon: ({ focused,color }) => (
            <Icon
            name='mail' size={35} 
            style={{color:color}}  
   />
         ),
         
         tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
              
            />
        )
                }}
                />


                
</Tab.Navigator>
    )
}
export default CandidateTab;