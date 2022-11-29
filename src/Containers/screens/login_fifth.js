import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable,
       Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button, Dialog, Divider } from '@rneui/base';


const LoginFifth = ({ navigation }) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [confirmPassword, onChangeConfirmPassword] = React.useState(null);
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <ScrollView horizontal>
        <View>
            <Image
             source={require('../../Assets/Images/logo.png')}
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
          width: 200,
          fontWeight: '400',
          marginTop: 20
        }}
      >Enter the 4 digit code that you 
      have received
      </Text>
      <SafeAreaView marginTop={50}>
        <ScrollView horizontal>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="-"
        keyboardType="number"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="-"
        keyboardType="number"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="-"
        keyboardType="number"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="-"
        keyboardType="number"
        placeholderTextColor={"#0B774B"}
        backgroundColor = "#F9FFFC"
      />
      </ScrollView>
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
    marginTop:50,
    paddingLeft:0,
    marginLeft: 30,
    backgroundColor: "#0B774B",
    borderRadius: 12
    }}
    onPress = {() => navigation.navigate('LoginSixth')}
    >
        Okay
    </Button>

    <Divider 
    orientation='horizontal'
    color='#CDEFE9'
    width={1}
    style={{ width:"100%", marginTop: 200 }}
    />
    <Text style = {{color:"#0B774B", textAlign: "center", marginTop: 10, height: 80}}>Back to
    <Text style = {{color:"#FF6E15", textAlign: "center"}}> Sign in</Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Roboto"
    },
    container: {
      backgroundColor : "white"
    },
    input: {
        height: 57,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#CDEFE9",
        marginLeft: 28,
        width: 54,
        borderRadius: 4,
        textAlign: 'center'
      },
  });
  
export default LoginFifth;