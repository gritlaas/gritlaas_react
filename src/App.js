import React from 'react'
import { StyleSheet } from 'react-native'
import Navigation from './Navigators/route'

const App = () => {
  return <Navigation />
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  MainContainer: {
    flex: 1,
    // Set content's vertical alignment.
    justifyContent: 'center',
    // Set content's horizontal alignment.
    alignItems: 'center',
    // Set hex color code here.
    backgroundColor: 'white',
  },
})

export default App
