import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import { LearnerDetails } from "../../../Constants/Learners"
import { CoursesDetails } from "../../../Constants/Courses"
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import NavTab from './navTab';


const EducatorHome = ({ navigation }) => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.responsiveBox}>
    <Card 
    width = {wp('100%')}
    borderRadius = {5}
    containerStyle= {{ backgroundColor:"#27BC7F", margin: 0, padding:0}}
    >
        <View style={{display: 'flex',
      flexDirection: 'row',
      padding:10}}>
    <Card.Image
        source={require('../../../Assets/Images/avatar.jpeg')}
        style={{ width: 50, height: 50, borderRadius: 100, marginTop: 20, marginLeft: wp('3%')}}
    >
    </Card.Image>
    <View marginTop={20} marginLeft={wp('2%')}>
    <Text style={{color:"white", fontSize: 14}}>Hello!</Text>
    <Text style={{color:"#0a5943",fontWeight:"bold", fontSize:16}}>Jyoti Jha</Text>
    </View>
    <View marginTop={20} marginLeft={wp('50%')}>
    <Icon name="chatbubble-ellipses-outline" size={27} color="black"></Icon>
    </View>
    </View>
    </Card>
    <View style={{flexDirection: "row", width: wp('40%')}}>
    <Text style = {{color:"#343434", marginTop: 10, marginLeft: wp('10%'), flex:1}}>
        Top Learners
    </Text>
    </View>
    <ScrollView 
    horizontal
    disableIntervalMomentum={ true } 
    snapToInterval={ wp('100%') }
    >
    {
        LearnerDetails.map((items,key)=>(
    <View style={{marginTop:10}} key = {key}>
    <Card.Image
    source= {items.img}
    style={{ width: 64, height: 64, borderRadius: 100, marginLeft: wp('5%')}}
    >
    </Card.Image>
    </View>
     ))
    }
    </ScrollView>
    <View style={[styles.container, {
      display: 'flex',
      flexDirection: 'row',
      padding: 10
    }]}>
        <View style={{ elevation: 5, flex: 1, marginRight: 25}}>
    <Text style = {{color:"#343434", marginTop: 20, marginLeft: 30}}>
        Upcoming Sessions
    </Text>
    </View>
    <View style={{ elevation: 5, flex: 1, maringRight: 110}}>
    <Text style = {{color:"#27BC7F", marginTop: 20, marginLeft: 110}}>
        View all
    </Text>
    </View>
    </View>
    <LinearGradient colors={['#40D095','#328764']} style={styles.linearGradient}
    start={{ x: 0, y: 0.7 }}>
    <View style={{
      display: 'flex',
      flexDirection: 'row'}}>
    <View>
    <Card.Image
    source= {require("../../../Assets/Images/course_images/react.jpeg")}
    style={{ width: 64, height: 64, borderRadius: 100, marginLeft: wp('3%')}}
    >
    </Card.Image>
    </View>
    <View style={{marginLeft:15}}>
    <Text style={{fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 5,
    color: '#ffffff',
    backgroundColor: 'transparent'}}>
        Advanced Javascript
    </Text>
    <Text style={{fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 5,
    color: '#ffffff',
    backgroundColor: 'transparent'}}>Students Interested 100+</Text>
    </View>
    </View>
    <Card style={{color:'#ffffff'}}
    containerStyle={{ borderRadius: 10 }}>
        <View style ={{display: 'flex',
      flexDirection: 'row'}}>
        <Icon name="calendar" size={18}></Icon>
        <Text fontSize={12} style={{ paddingLeft: 3, paddingRight:7}}>Monday, 26 Decemeber</Text>
        <Icon name="time-outline" size={18}></Icon>
        <Text fontSize={12} style={{ paddingLeft: 3}}>03:00 - 05:00</Text>
        </View>
    </Card>
    </LinearGradient>
    <View style={[styles.container, {
      display: 'flex',
      flexDirection: 'row'
    }]}>
        <View style={{ elevation: 5, flex: 1, marginRight: 25}}>
    <Text style = {{color:"#343434", marginTop: 20, marginLeft: wp('10%')}}>
        Categories
    </Text>
    </View>
    <View style={{ elevation: 5, flex: 1, maringRight: 110}}>
    <Text style = {{color:"#27BC7F", marginTop: 20, marginLeft: wp('27%')}}>
        View all
    </Text>
    </View>
    </View>
    <ScrollView 
    horizontal
    disableIntervalMomentum={ true } 
    snapToInterval={wp('100%')}
    style={{marginLeft:10}}
    >
    <View>
    <Card
    containerStyle={{ borderRadius: 50, justifyContent: "center", alignContent: "center" }}
    >
        <Icon name = "logo-html5" size={25} color="#27BC7F"></Icon>
    </Card>
    <Text style={{textAlign: "center"}}>Software</Text>
    </View>
    <View>
    <Card
    containerStyle={{ borderRadius: 50 }}
    >
        <FontIcon name = "stethoscope" size={25} color="#27BC7F"></FontIcon>
        </Card>
    <Text style={{textAlign: "center"}}>NEET</Text>
    </View>
    <View>
    <Card
    containerStyle={{ borderRadius: 50 }}
    >
        <Icon name = "bulb-outline" size={25} color="#27BC7F"></Icon>
    </Card>
    <Text style={{textAlign: "center"}}>JEE</Text>
    </View>
    <View>
    <Card
    containerStyle={{ borderRadius: 50 }}
    >
        <Icon name = "cloud-circle" size={25} color="#27BC7F"></Icon>
    </Card>
    <Text style={{textAlign: "center"}}>UPSC</Text>
    </View>
    <View>
    <Card
    containerStyle={{ borderRadius: 50 }}
    >
        <Icon name = "ios-analytics-outline" size={25} color="#27BC7F"></Icon>
    </Card>
    <Text style={{textAlign: "center"}}>Commerce</Text>
    </View>
    <View>
    <Card
    containerStyle={{ borderRadius: 50 }}
    >
        <Icon name = "logo-html5" size={25} color="#27BC7F"></Icon>
    </Card>
    </View>
    </ScrollView>
    <View style={{flexDirection: "row", width: 750}}>
    <Text style = {{color:"#343434", marginTop: 10, marginLeft: wp('7%'), flex:1}}>
        Recently Uploaded Videos
    </Text>
    <Text style = {{color:"#27BC7F", marginTop: 10, paddingLeft: wp('20%'), flex:2}}>
        View all
    </Text>
    </View>
    <ScrollView 
    vertical
    disableIntervalMomentum={ true } 
    snapToInterval={wp('100%')}
    marginLeft = {20}
    >
    {
    CoursesDetails.map((items, key)=>(
        <View key = {key}>
            <Card
            width= {350}
            height = {80}
            borderRadius = {10}
            containerStyle= {{backgroundColor:"white", padding:0, marginLeft:5}}>
            <Card.Image
            source={items.img}
            style={{ width: 100, height: 80, borderRadius: 10, marginLeft: 0, padding:0}}
            >
            <Text 
            style={{
                 width: 300,
                 marginLeft: 105, 
                fontSize: 16, top: 5, fontWeight: "bold"}}>{items.course_name}</Text>
            <View style={{display:'flex', flexDirection:'row'}}>
            <View style={{ flex: 1}}>
            <Text 
            style={{
                 width: 90,
                 marginLeft: 105,
                 fontSize: 14, marginTop: 9}}>{items.published_by}</Text>
                 </View>
                 <View style={{ flex: 1, marginLeft: 170, marginTop: 12}}>
                 <Icon name="time-outline" style={{
                 width: 90,
                 fontSize: 14}}><Text>23 Min</Text></Icon>
                 </View>
                <View style={{ flex: 1, marginLeft: 80, marginTop: 12}}>
                 <Icon name="heart" style={{
                 width: 90,
                 fontSize: 14}}><Text>485 Likes</Text></Icon>
                 </View>
                 </View>
                 <Text></Text>
            </Card.Image>
            </Card>
            </View>
            ))}
    </ScrollView>
    </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Roboto"
    },
    container: {
      backgroundColor: 'white',
      paddingRight: 10
    },
  linearGradient: {
    padding: 10,
    marginLeft:30,
    borderRadius: 10,
    height: 150,
    width: 352,
  },
  responsiveBox: {
    width: wp('100%'),
    flexDirection: 'column'
  }
  });
  
export default EducatorHome;