import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../StudentHome/home';
import LoginFirst from '../Authentication/login_first';
import { NavigationContainer } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

const NavTab = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 100 },
    tabBarStyle: { backgroundColor: 'white', borderBottomColor:'green' },
    }}
    >
        <Tab.Screen name="Overview" component={Home} />
        <Tab.Screen name="Approvals" component={LoginFirst} />
        <Tab.Screen name="Finance" component={LoginFirst} />
        <Tab.Screen name="Feedbacks" component={LoginFirst} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default NavTab;

