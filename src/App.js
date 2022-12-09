import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './Containers/screens/home';
import Navigation from './Navigators/route';
import Group from './Containers/screens/group';
import HomeSearch from './Containers/screens/home_search';
import HomeSearchResult from './Containers/screens/home_search_result';


const App = () => {
  return (
    <Navigation/>
    // <HomeCategories></HomeCategories>
    // <Home></Home>
    // <HomeSearchResult></HomeSearchResult>
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