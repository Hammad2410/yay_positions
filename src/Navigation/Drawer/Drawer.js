import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Candidate from '../../Screens/Candidate';
import BrowseJobs from '../../Screens/BrowseJobs';


const Drawer = createDrawerNavigator();

function MyDrawer ({navigation})
{
    return(
        <Drawer.Navigator initialRouteName="Candidate">
        <Drawer.Screen name="Candidate" component={Candidate} />
        {/* <Drawer.Screen name="Notifications" component={Updat} /> */}
        <Drawer.Screen name="BrowseJobs" component={BrowseJobs} />

      </Drawer.Navigator>
)

}
export default MyDrawer;