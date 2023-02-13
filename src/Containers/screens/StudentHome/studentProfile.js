import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Card } from '@rneui/themed'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const StudentProfile = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Student Profile</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CDEFE9',
    marginLeft: 30,
    padding: 10,
    width: 300,
    borderRadius: 4,
  },
})

export default StudentProfile
