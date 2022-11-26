import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import Navigator from './Navigators/login_route';


const App = () => {
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  }
});

export default App;