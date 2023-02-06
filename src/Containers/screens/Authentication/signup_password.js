import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button, Dialog, Divider } from '@rneui/base'

const SignupPassword = ({ navigation }) => {
  var width = Dimensions.get('window').width //full width
  var height = Dimensions.get('window').height //full height
  const [text, onChangeText] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [confirmPassword, onChangeConfirmPassword] = React.useState(null)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView horizontal>
        <View>
          <Image
            source={require('../../../Assets/Images/logo.jpeg')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              marginTop: 70,
              marginLeft: 30,
            }}
          />
        </View>
        <View style={{ marginTop: 90, marginLeft: 5 }}>
          <Text
            style={{
              color: '#267900',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            GR
            <Text
              style={{
                color: '#FF6E15',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            >
              IT
            </Text>
            <Text
              style={{
                color: '#00C5E4',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            >
              Studies
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 20,
          fontFamily: 'Roboto',
          marginLeft: 30,
          fontWeight: '700',
          marginTop: 20,
          width: 250,
          textAlign: 'left',
        }}
      >
        Transforming Education anywhere and anytime
      </Text>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 16,
          fontFamily: 'Roboto',
          marginLeft: 30,
          fontWeight: '400',
          marginTop: 10,
        }}
      >
        Join GRIT Studies
      </Text>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="password"
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          keyboardType="password"
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
        <Text
          style={{
            color: '#0B774B',
            textAlign: 'left',
            marginTop: 10,
            fontSize: 12,
            marginLeft: 30,
            width: 330,
          }}
        >
          8 characters or longer. Combine upper and lowercase letters and
          numbers.
        </Text>
      </SafeAreaView>
      <Button
        type="solid"
        titleStyle={{ color: 'white', fontSize: 15 }}
        buttonStyle={{
          height: 50,
          width: 300,
          alignContent: 'center',
          margin: 0,
          flex: 1,
          marginTop: 40,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        onPress={() => navigation.navigate('LoginFourth')}
      >
        Join
      </Button>

      <Text
        style={{
          color: '#0B774B',
          textAlign: 'center',
          marginTop: 107,
          fontSize: 12,
          marginLeft: 20,
          width: 330,
        }}
      >
        By joining, you agree to GRIT Studies
        <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
          Terms of Service & Privacy Policy
        </Text>
        , as well as to receive occasional emails from us.
      </Text>
      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '100%', marginTop: 15 }}
      />
      <Text
        style={{
          color: '#0B774B',
          textAlign: 'center',
          marginTop: 10,
          height: 80,
        }}
      >
        Already a member?
        <Text style={{ color: '#FF6E15', textAlign: 'center' }}> Sign in</Text>
      </Text>
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

export default SignupPassword
