import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, Divider } from '@rneui/base'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
// import {AsyncStorage} from 'react-native';

const LoginFirst = ({ navigation }) => {
  const [authenticated, setAutheticated] = useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // Set an initializing state whilst Firebase connects
  const [profileImage, setProfileImage] = useState('')

  GoogleSignin.configure({
    webClientId:
      '256200674836-mpsru41t08o89e3ra7sof08s38qf8e5s.apps.googleusercontent.com',
    offlineAccess: true,
  })

  const saveData = (registered_email, name, photo, uid) => {
    firestore()
      .collection('UserData')
      .add({
        email: registered_email,
        name: name,
        photo: photo,
        uid: uid,
      })
      .then(() => {
        console.log('User added')
      })
  }

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

  const EmailSignIn = async (email, password) => {
    try {
      const res = await auth().signInWithEmailAndPassword(email, password)
      console.log('Signed-In')
      console.log(res)
      navigation.navigate('StudentHome')
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/invalid-email') {
        alert('Please Enter Valid Email Id')
      }
      if (error.code === 'auth/user-not-found') {
        alert(
          'Please Create your account. No valid account found by the entered email',
        )
      }
      if (error.code === 'auth/wrong-password') {
        alert(
          'Please enter correct password. Update your password if you have forgotten the password.',
        )
      }
    }
  }
  const GoogleSignIn = async () => {
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
      saveData(
        userInfo.user.email,
        userInfo.user.name,
        userInfo.user.photo,
        userInfo.user.id,
      )
      navigation.navigate('StudentHome')
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
      } else {
        console.log(error)
        alert('Unknown error')
      }
    }
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true)
    }
  })

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
          textContentType="emailAddress"
          keyboardType="email-address"
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
          secureTextEntry={true}
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
          EmailSignIn(email, password)
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
        onPress={() =>
          GoogleSignIn().then(() => {
            console.log('Signed In')
          })
        }
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
      <Pressable
        onPress={() => {
          navigation.navigate('SignupEmail')
        }}
      >
        <Text
          style={{
            color: '#0B774B',
            textAlign: 'center',
            marginTop: 10,
            height: 50,
          }}
        >
          Not a member yet?
          <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
            Join now
          </Text>
        </Text>
      </Pressable>
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
