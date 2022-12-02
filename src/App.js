import React from 'react';
import { StyleSheet } from 'react-native';
import HomeCategories from './Containers/screens/home_categories';
import Navigation from './Navigators/route';
import Group from './Containers/screens/group'


const App = () => {
  return (
    <Navigation/>
    // <HomeCategories></HomeCategories>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
  },
  MainContainer: 
{
flex: 1,
// Set content's vertical alignment.
justifyContent: 'center',
// Set content's horizontal alignment.
alignItems: 'center',
// Set hex color code here.
backgroundColor: 'white',
}
});

export default App;