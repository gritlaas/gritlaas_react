import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import OnboardingFirst from '@/Containers/screens/onboarding_first';
import OnboardingSecond from '@/Containers/screens/onboarding_second';
import OnboardingThird from '@/Containers/screens/onboarding_third';
import OnboardingFourth from '@/Containers/screens/onboarding_fourth';
import LoginFirst from '@/Containers/screens/login_first'
import LoginSecond from '@/Containers/screens/login_second';
import LoginThird from '@/Containers/screens/login_third';
import LoginFourth from '@/Containers/screens/login_fourth';
import LoginFifth from '@/Containers/screens/login_fifth';
import LoginSixth from '@/Containers/screens/login_sixth';
import Splash from '@/Containers/screens/splash';
import Home from '@/Containers/screens/home';


const screens = {
    Splash : {
        screen : Splash,
        backgroundColor: 'transparent',
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         },
         
    },
    Onboarding_First : {
        screen : OnboardingFirst,
        backgroundColor: 'transparent',
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    Onboarding_Second : {
        screen : OnboardingSecond,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    Onboarding_Third : {
        screen : OnboardingThird,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    Onboarding_Fourth : {
        screen : OnboardingFourth,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginFirst : {
        screen : LoginFirst,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginSecond : {
        screen : LoginSecond,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginThird : {
        screen : LoginThird,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginFourth : {
        screen : LoginFourth,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginFifth : {
        screen : LoginFifth,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    LoginSixth : {
        screen : LoginSixth,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    },
    Home : {
        screen : Home,
        navigationOptions: { 
            headerShown: false,
            backgroundColor: 'white'
         }
    }
}
const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);