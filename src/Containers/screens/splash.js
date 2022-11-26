import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';


const Splash = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
          source={require('../../Assets/Images/logo.png')}
          style={{ width: 200, height: 200, marginTop: 250 }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          paddingLeft: 70,
          color: '#267900',
          fontSize: 40,
          fontWeight: "bold",
          fontFamily: "Roboto"
        }}
      >GR
      <Text
      style={{
        marginTop: 20,
        paddingLeft: 50,
        color: '#FF6E15',
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Roboto"
      }}>
        IT 
      </Text>
      <Text
      style={{
        marginTop: 20,
        paddingLeft: 50,
        color: '#00C5E4',
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Roboto"
      }}
      >
        Studies
      </Text>
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Splash;