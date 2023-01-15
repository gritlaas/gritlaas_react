import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../StudentHome/home';
import LoginFirst from '../Authentication/login_first';
import { NavigationContainer } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createMaterialBottomTabNavigator();

const NavTab = () => {
    return (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" activeColor="#30F2B3" inactiveColor="black" barStyle={{ backgroundColor: 'white'}}>
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
        />
        <Tab.Screen 
        name="  " 
        component={LoginFirst} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26}/>
          ),
        }}
        color ={'black'}
        />
      <Tab.Screen 
      name=" "
      component={LoginFirst} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26}/>
        ),
      }}
      color ={'black'}
      />
    </Tab.Navigator>
    </NavigationContainer>
    );
}

export default NavTab;

