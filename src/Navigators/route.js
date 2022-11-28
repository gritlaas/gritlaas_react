import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import LoginFirst from '@/Containers/screens/login_first'
import LoginSecond from '@/Containers/screens/login_second';
import LoginThird from '@/Containers/screens/login_third';
import LoginFourth from '@/Containers/screens/login_fourth';
import LoginFifth from '@/Containers/screens/login_fifth';
import LoginSixth from '@/Containers/screens/login_sixth';
import OnboardingFirst from '@/Containers/screens/onboarding_first';
import OnboardingSecond from '@/Containers/screens/onboarding_second';
import OnboardingThird from '@/Containers/screens/onboarding_third';
import OnboardingFourth from '@/Containers/screens/onboarding_fourth';


const screens = {
    Onboarding_First : {
        screen : OnboardingFirst
    },
    Onboarding_Second : {
        screen : OnboardingSecond
    },
    Onboarding_Third : {
        screen : OnboardingThird
    },
    Onboarding_Fourth : {
        screen : OnboardingFourth
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