import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pagination } from 'react-native-snap-carousel'
import { Button } from '@rneui/base';


const OnboardingFourth = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
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
          source={require('../../Assets/Images/girl_2.png')}
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
      >Empowering Educators
      </Text>
      <Text
        style={{
          marginTop: 20,
          width: 300,
          textAlign: "center",
          fontSize: 15,
          color:"#747474"
        }}
      >GRIT Studies empowers educators 
      through well researched and customer 
      made training programs bringing 
      greater results for schools and colleges.
      </Text>
      <Pagination
        dotsLength={4}
        activeDotIndex={3}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#0B774B',
          marginTop: 10
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={false}
      />
    <Button
    type="solid"
    titleStyle={{ color: "white", fontSize:15 }}
    onPress = {() => navigation.navigate('LoginFirst')}
    buttonStyle =
    {{
    height: 50,
    width: 300, 
    alignContent: 'center',
    margin: 0,
    marginTop:10,
    paddingLeft:0,
    marginLeft: 30,
    backgroundColor: "#0B774B",
    borderRadius: 8
    }}
    >
        Get Started
    </Button>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 750,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });

export default OnboardingFourth