import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable,
     Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Dialog, Divider } from '@rneui/base';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {  LoginManager, AccessToken } from "react-native-fbsdk-next";


GoogleSignin.configure();
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const LoginFirst = ({ navigation }) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <ScrollView horizontal>
        <View>
            <Image
             source={require('../../Assets/Images/logo.jpeg')}
             style={{ width: 70, height: 70, borderRadius: 100, marginTop: 70, marginLeft: 30}}>
             </Image>
        </View>
        <View style={{ marginTop: 90, marginLeft: 5}}>
        <Text
        style={{
          color: '#267900',
          fontSize: 30,
          fontWeight: "bold",
          fontFamily: "Roboto"
        }}
      >GR
      <Text
      style={{
        color: '#FF6E15',
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Roboto"
      }}>
        IT 
      </Text>
      <Text
      style={{
        color: '#00C5E4',
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Roboto"
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
          fontFamily: "Roboto",
          marginLeft: 30,
          fontWeight: '700',
          marginTop: 20
        }}
      >Quality learning simplified for anywhere and anytime
      </Text>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 16,
          fontFamily: "Roboto",
          marginLeft: 30,
          fontWeight: '400',
          marginTop: 10
        }}
      >Sign in to GRIT Studies account
      </Text>
      <SafeAreaView marginTop={10}>
      <TextInput
        style={styles.input}
        placeholder="Email / Username"
        value={text}
        onChangeText={onChangeText}
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="password"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
    </SafeAreaView>
    <Text
    style={{
        color: '#FF6E15',
        fontSize: 14,
        fontFamily: "Roboto",
        marginLeft: 200,
        fontWeight: '400',
        marginTop: 10
      }}
    >
        Forgot password?
    </Text>
    <Button
    type="solid"
    titleStyle={{ color: "white", fontSize:15 }} 
    buttonStyle =
    {{
    height: 50,
    width: 300, 
    alignContent: 'center',
    margin: 0,
    flex: 1,
    marginTop:10,
    paddingLeft:0,
    marginLeft: 30,
    backgroundColor: "#0B774B",
    borderRadius: 12
    }}
    onPress = {() => navigation.navigate('LoginSecond')}
    >
        Continue
    </Button>
    <Divider 
    orientation='horizontal'
    color='#CDEFE9'
    width={1}
    style={{ width:"83%",marginLeft:30, marginTop: 15 }}
    />
    <Text style = {{color:"#0B774B",
     marginLeft:160,
    marginTop: -10, 
    backgroundColor:"white",
    padding:2, 
    width: 27}}>OR</Text>

<Button
    type="outline"
    icon={<Image source={require("../../Assets/Images/google.jpeg")} style={{ width: 20, height:20}}/>}
    titleStyle={{ color: "#0B774B", fontSize:15, marginLeft: 5 }} 
    buttonStyle =
    {{
      height: 50,
      width: 300, 
      margin: 0,
      flex: 1,
      marginTop:15,
      paddingLeft:0,
      marginLeft: 30,
      backgroundColor: "white",
      borderRadius: 12,
      borderColor: "#0B774B"
    }}
    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    >
        Continue with Google
    </Button>

    <Button
    type="outline"
    icon={ <Icon name="logo-apple" size={20} color="black"></Icon>}
    titleStyle={{ color: "#0B774B", fontSize:15, marginLeft: 5 }}
    buttonStyle =
    {{
    height: 50,
    width: 300, 
    alignContent: 'center',
    margin: 0,
    flex: 1,
    marginTop:15,
    paddingLeft:0,
    marginLeft: 30,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "#0B774B"
    }}
    >
        Continue with Apple
    </Button>
    <Button
    type="outline"
    icon={ <Icon name="logo-facebook" size={20} color="#3F51B5"></Icon>}
    titleStyle={{ color: "#0B774B", fontSize:15, marginLeft: 5 }} 
    buttonStyle =
    {{
      height: 50,
      width: 300, 
      margin: 0,
      flex: 1,
      marginTop:15,
      marginLeft: 30,
      paddingLeft: 30,
      backgroundColor: "white",
      borderRadius: 12,
      borderColor: "#0B774B"
    }}
    // onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
    >
        Continue with Facebook
    </Button>
    <Divider 
    orientation='horizontal'
    color='#CDEFE9'
    width={1}
    style={{ width:"100%", marginTop: 15 }}
    />
    <Text style = {{color:"#0B774B", textAlign: "center", marginTop: 10, height: 50}}>Not a member yet?
    <Text style = {{color:"#FF6E15", textAlign: "center"}}> Join now</Text></Text>
    </ScrollView>
  
);
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Roboto"
    },
    container: {
      backgroundColor: 'white',
    },
    input: {
        height: 50,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#CDEFE9",
        marginLeft: 30,
        padding: 10,
        width: 300,
        borderRadius: 4
      },
  });
  
export default LoginFirst;