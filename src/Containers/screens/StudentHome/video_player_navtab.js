import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Description from './description'
const Tab = createMaterialTopTabNavigator()

const NavTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 10 },
        }}
      >
        <Tab.Screen name="Description" component={Description} />
        <Tab.Screen name="Course Content" component={Description} />
        <Tab.Screen name="Instructor" component={Description} />
        <Tab.Screen name="Student Feedback" component={Description} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavTab
