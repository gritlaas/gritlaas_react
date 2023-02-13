import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import OnboardingFirst from '@/Containers/screens/Onboarding/onboarding_first'
import OnboardingSecond from '@/Containers/screens/Onboarding/onboarding_second'
import OnboardingThird from '@/Containers/screens/Onboarding/onboarding_third'
import OnboardingFourth from '@/Containers/screens/Onboarding/onboarding_fourth'
import LoginFirst from '@/Containers/screens/Authentication/login_first'
import SignupEmail from '@/Containers/screens/Authentication/signup_email'
import LoginFourth from '@/Containers/screens/Authentication/login_fourth'
import LoginFifth from '@/Containers/screens/Authentication/login_fifth'
import LoginSixth from '@/Containers/screens/Authentication/login_sixth'
import Splash from '@/Containers/screens/Commons/splash'
import StudentHome from '@/Containers/screens/StudentHome/home'
import HomeSearch from '@/Containers/screens/StudentHome/home_search'
import HomeCategories from '@/Containers/screens/StudentHome/home_categories'
import HomeVideoPlay from '@/Containers/screens/StudentHome/home_video_play'
import MyLearning from '@/Containers/screens/StudentHome/my_learning'
import HomeSearchResult from '@/Containers/screens/StudentHome/home_search_result'
import Wishlist from '@/Containers/screens/StudentHome/wishlist'
import EducatorHome from '@/Containers/screens/Educator/home'
import Dashboard from '@/Containers/screens/Educator/dashboard'
// import Group from '@/Containers/screens/Commons/group'
import EducatorOrStudent from '@/Containers/screens/EducatorOrStudent/educator_or_student'
import Payment from '@/Containers/screens/Payment/payment'

const screens = {
  Splash: {
    screen: Splash,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorOrStudent: {
    screen: EducatorOrStudent,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_First: {
    screen: OnboardingFirst,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Second: {
    screen: OnboardingSecond,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Third: {
    screen: OnboardingThird,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Fourth: {
    screen: OnboardingFourth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFirst: {
    screen: LoginFirst,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  SignupEmail: {
    screen: SignupEmail,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFourth: {
    screen: LoginFourth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFifth: {
    screen: LoginFifth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginSixth: {
    screen: LoginSixth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorHome: {
    screen: EducatorHome,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentHome: {
    screen: StudentHome,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeSearch: {
    screen: HomeSearch,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeSearchResult: {
    screen: HomeSearchResult,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeCategories: {
    screen: HomeCategories,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeVideoPlay: {
    screen: HomeVideoPlay,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  MyLearning: {
    screen: MyLearning,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
}
const Navigation = createStackNavigator(screens)

export default createAppContainer(Navigation)
