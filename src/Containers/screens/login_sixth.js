import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable,
     Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button, Dialog, Divider } from '@rneui/base';


const LoginSixth = () => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [confirmPassword, onChangeConfirmPassword] = React.useState(null);
  return (
    <ScrollView>
    <ScrollView horizontal>
        <View>
            <Image
             source={require('../assets/logo.png')}
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
          marginTop: 20,
          width: 250,
          textAlign: 'left'
        }}
      >Reset Password
      </Text>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 14,
          fontFamily: "Roboto",
          marginLeft: 30,
          fontWeight: '400',
          marginTop: 10
        }}
      >Your new password must be different from 
      previously
      used passwords
      </Text>
      <SafeAreaView marginTop={10}>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="New Password"
        keyboardType="password"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        keyboardType="password"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <Text style={{
        color:"#0B774B", textAlign: "left", marginTop: 10, fontSize:12, marginLeft: 30, width: 330
      }}>8 characters or longer. Combine upper and lowercase 
        letters and numbers.</Text>
    </SafeAreaView>
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
    marginTop:40,
    paddingLeft:0,
    marginLeft: 30,
    backgroundColor: "#0B774B",
    borderRadius: 12
    }}
    >
        Okay
    </Button>

   
    <Divider 
    orientation='horizontal'
    color='#CDEFE9'
    width={1}
    style={{ width:"100%", marginTop: 190 }}
    />
    <Text style = {{color:"#0B774B", textAlign: "center", marginTop: 10}}>Back to
    <Text style = {{color:"#FF6E15", textAlign: "center"}}> Sign in</Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Roboto"
    },
    container: {
      flex: 1,
      padding: 20
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
  
export default LoginSixth;