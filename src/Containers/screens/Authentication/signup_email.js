import React, { useState } from 'react'
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
import { Button, Dialog, Divider } from '@rneui/base'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const SignupEmail = ({ navigation }) => {
  const [authenticated, setAutheticated] = useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmpassword] = React.useState('')
  // Set an initializing state whilst Firebase connects
  const [profileImage, setProfileImage] = useState('')

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

  const SignUp = async (email, password, confirmpassword) => {
    try {
      if (password === confirmpassword) {
        const res = await auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        saveData(
          res.user.email,
          res.user.displayName,
          res.user.photoURL,
          res.user.uid,
        )
        navigation.navigate('StudentHome')
      } else {
        alert(
          'Please make sure your confirm password is same as your current password',
        )
      }
    } catch (error) {
      console.log(error)
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
          placeholder="Email"
          value={email}
          onChangeText={txt => {
            setEmail(txt)
          }}
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
      </SafeAreaView>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={txt => {
            setPassword(txt)
          }}
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
          color="black"
        />
      </SafeAreaView>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={confirmpassword}
          onChangeText={setConfirmpassword}
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
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
          marginTop: 30,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        onPress={() => {
          SignUp(email, password, confirmpassword)
        }}
      >
        Sign up
      </Button>
      {/*
      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '83%', marginLeft: 30, marginTop: 30 }}
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
        titleStyle={{ color: '#0B774B', fontSize: 15, margin: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          margin: 0,
          flex: 1,
          marginTop: 20,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#0B774B',
        }}
      >
        Continue with Google
      </Button>
      <Button
        type="outline"
        icon={<Icon name="logo-apple" size={20} color="black" />}
        titleStyle={{ color: '#0B774B', fontSize: 15, margin: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          margin: 0,
          flex: 1,
          marginTop: 10,
          paddingTop: 2,
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
        titleStyle={{ color: '#0B774B', fontSize: 15, margin: 5 }}
        buttonStyle={{
          height: 50,
          width: 300,
          margin: 0,
          flex: 1,
          marginTop: 10,
          marginLeft: 30,
          paddingLeft: 30,
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#0B774B',
        }}
      >
        Continue with Facebook
      </Button> */}
      <Text
        style={{
          color: '#0B774B',
          textAlign: 'center',
          marginTop: 10,
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
      <Pressable
        onPress={() => {
          navigation.navigate('LoginFirst')
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
          Already a member?
          <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
            {' '}
            Sign in
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

export default SignupEmail
