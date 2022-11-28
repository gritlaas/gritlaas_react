import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pagination } from 'react-native-snap-carousel'


const OnboardingSecond = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text
      style={{
        marginTop: 20,
        paddingLeft: 70,
        color: '#0B774B',
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 200
      }}
      >Skip
      </Text>
      <Image
          source={require('../../Assets/Images/boy.png')}
          style={{ width: 300, height: 300, marginTop: 30 }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold"
        }}
      >Hello, Welcome to GRIT Studies
      </Text>
      <Text
        style={{
          marginTop: 20,
          width: 300,
          paddingLeft: 60,
          textAlign: "center",
          fontSize: 15,
          color:"#747474"
        }}
      >Give yourself the BEST education
       has to offer
      </Text>
      <Pagination
        dotsLength={4}
        activeDotIndex={1}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#0B774B',
          marginTop: 40
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <Icon
      style ={{
      backgroundColor: "#0B774B",
      borderRadius: 50,
      size : 30,
      justifyContent:"center",
      width : 50,
      height : 50,
      paddingLeft:12,
      marginTop:5,
      paddingTop: 10,
      alignSelf: "center"
      }}
      name= 'right'
      size={30}
      color="white"
      onPress = {() => navigation.navigate('Onboarding_Third')}>
      </Icon>
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

export default OnboardingSecond;