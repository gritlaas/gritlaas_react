import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native'

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('EducatorOrStudent') //this.props.navigation.navigate('Login')
  }, 5000)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          source={require('../../../Assets/Images/logo.jpeg')}
          style={{ width: 200, height: 200, marginTop: 0 }}
        />
      </View>
      <Text
        style={{
          marginTop: 0,
          color: '#267900',
          fontSize: 40,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        }}
      >
        GR
        <Text
          style={{
            marginTop: 0,
            color: '#FF6E15',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          IT
        </Text>
        <Text
          style={{
            marginTop: 0,
            paddingLeft: 50,
            color: '#00C5E4',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          Studies
        </Text>
      </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Splash
