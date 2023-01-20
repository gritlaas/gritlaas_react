import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, Divider } from '@rneui/base'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'

const LoginFirst = ({ navigation }) => {
  const [authenticated, setAutheticated] = useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // Set an initializing state whilst Firebase connects
  const [profileImage, setProfileImage] = useState('')
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '75517342257-ihh4kmsd2ci8qkstsur9mr4pc6oelalc.apps.googleusercontent.com',
    })
  }, [])

  const saveData = () => {
    firestore()
      .collection('Users')
      .add({
        email: email,
        password: password,
      })
      .then(() => {
        console.log('User added')
      })
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true)
    }
  })

  // const signOut = async () => {
  //     try {
  //       await GoogleSignin.revokeAccess();
  //       await GoogleSignin.signOut();
  //       setloggedIn(false);
  //       setuserInfo([]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const signIn = async () => {
    try {
      console.log('STARTING')
      await GoogleSignin.hasPlayServices()
      console.log('STARTING SIGNOUT')
      await GoogleSignin.signOut()
      console.log('SIGNEDOUT')
      const userInfo = await GoogleSignin.signIn()
      console.log('PRINT')
      console.log(userInfo)
      setProfileImage(userInfo.photo)
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      return auth().signInWithCredential(googleCredential)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert('Signin in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert('PLAY_SERVICES_NOT_AVAILABLE')
      }
    }
  }

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
        }}
      >
        Quality learning simplified for anywhere and anytime
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
        Sign in to GRIT Studies account
      </Text>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          placeholder="Email / Username"
          value={email}
          onChangeText={txt => {
            setEmail(txt)
          }}
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={txt => {
            setPassword(txt)
          }}
          placeholder="Password"
          keyboardType="password"
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
      </SafeAreaView>
      <Text
        style={{
          color: '#FF6E15',
          fontSize: 14,
          fontFamily: 'Roboto',
          marginLeft: 200,
          fontWeight: '400',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('SignupEmail')}
      >
        Forgot password?
      </Text>
      <Button
        type="solid"
        titleStyle={{ color: 'white', fontSize: 15 }}
        buttonStyle={{
          height: 50,
          width: 300,
          alignContent: 'center',
          margin: 0,
          flex: 1,
          marginTop: 10,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        onPress={() => {
          saveData()
        }}
      >
        Continue
      </Button>
      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '83%', marginLeft: 30, marginTop: 15 }}
      />
      <Text
        style={{
          color: '#0B774B',
          marginLeft: 160,
          marginTop: -10,
          backgroundColor: 'white',
          padding: 2,
          width: 27,
        }}
      >
        OR
      </Text>

      <Button
        type="outline"
        icon={
          <Image
            source={require('../../../Assets/Images/google.jpeg')}
            style={{ width: 20, height: 20 }}
          />
        }
        titleStyle={{ color: '#0B774B', fontSize: 15, marginLeft: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          margin: 0,
          flex: 1,
          marginTop: 15,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#0B774B',
        }}
        onPress={() => {
          signIn()
        }}
      >
        Continue with Google
      </Button>

      <Button
        type="outline"
        icon={<Icon name="logo-apple" size={20} color="black" />}
        titleStyle={{ color: '#0B774B', fontSize: 15, marginLeft: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          alignContent: 'center',
          margin: 0,
          flex: 1,
          marginTop: 15,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#0B774B',
        }}
      >
        Continue with Apple
      </Button>
      <Button
        type="outline"
        icon={<Icon name="logo-facebook" size={20} color="#3F51B5" />}
        titleStyle={{ color: '#0B774B', fontSize: 15, marginLeft: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          margin: 0,
          flex: 1,
          marginTop: 15,
          marginLeft: 30,
          paddingLeft: 30,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#0B774B',
        }}
        // onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
      >
        Continue with Facebook
      </Button>
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
          height: 50,
        }}
      >
        Not a member yet?
        <Text style={{ color: '#FF6E15', textAlign: 'center' }}> Join now</Text>
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

export default LoginFirst
