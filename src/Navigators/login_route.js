import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable,
    Dimensions, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import LoginFirst from '../Containers/screens/login_first'
import LoginSecond from '../Containers/screens/login_second';
import LoginThird from '../Containers/screens/login_third';
import LoginFourth from '../Containers/screens/login_fourth';
import LoginFifth from '../Containers/screens/login_fifth';
import LoginSixth from '../Containers/screens/login_sixth';
import Login from '../Containers/screens/login';

const screens = {
    Login : {
        screen : Login
    },
    LoginFirst : {
        screen : LoginFirst
    },
    LoginSecond : {
        screen : LoginSecond
    },
    LoginThird : {
        screen : LoginThird
    },
    LoginFourth : {
        screen : LoginFourth
    },
    LoginFifth : {
        screen : LoginFifth
    },
    LoginSixth : {
        screen : LoginSixth
    },
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);