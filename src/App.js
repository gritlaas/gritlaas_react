import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './Navigators/route';


const App = () => {
  return (
    <Navigator></Navigator>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  }
});

export default App;