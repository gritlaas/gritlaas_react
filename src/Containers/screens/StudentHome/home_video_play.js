import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import NavTab from '../Commons/nav_tab';
import { CoursesDetails }  from '../../../Constants/Courses';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeVideoPlay = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
    <Card
    width= {wp('100%')}
    height = {hp('10%')}
    borderRadius = {5}
    containerStyle= {{ backgroundColor:"#27BC7F", margin: 0, padding:0}}
    >
      <View style={{ display: "flex", flexDirection: "row"}}>
    <Card
        height = {hp('5%')}
        borderRadius = {10}
        containerStyle= {{
        padding :0,
        marginTop : hp('2%'),
        left : 0,
        width: 30
        }}>
        <Icon name="chevron-back-outline" size={27} color="black"></Icon>
      </Card>
      <Text style={{color:"white", marginLeft: wp('1%'), marginTop:hp('3%'), fontSize: 16}}>Advanced Android Course</Text>
      </View>
    </Card>
    <View style={{height: hp('79%')}}>
          <ScrollView vertical
      disableIntervalMomentum={ true } 
      snapToInterval={wp('100%')}
      marginLeft = {20}>
          {
          CoursesDetails.map((items, key)=>(
              <View key = {key}>
                  <Card
                  width= {wp('100%')}
                  height = {80}
                  backgroundColor = "white"
                  containerStyle= {{padding:0, marginLeft:5, borderColor: "transparent"}}>
                  <Card.Image
                  source={items.img}
                  style={{ width: 80, height: 80, marginLeft: 0, padding:0}}
                  >
                  <Text 
                  style={{
                       width: wp('100%'),
                       marginLeft: wp('22%'), 
                       fontSize: 13, top: 5, fontWeight: "bold"}}>{items.course_name}</Text>
                  <Text 
                  style={{
                       width: wp('100%'),
                       marginLeft: wp('22%'),
                       fontSize: 10, marginTop: 9}}>{items.published_by}</Text>
                  </Card.Image>
                  <View style={{flexDirection:'row', flexWrap:'wrap', marginLeft: wp('20%')}}>
                  {
                  items.rating.map((item,key)=>(
                  <Icon key ={key} name='star' style={{  marginLeft: wp('2%'), marginTop: -35, color:"#FFC107"}}></Icon>
                  ))
                  }
                  </View>
                  <Text 
                  style={{
                       width: wp('100%'),
                       marginLeft: wp('23%'), 
                       fontSize: 11, top: 5, marginTop: -25, fontWeight: "bold"}}>$ 125</Text>
                  </Card>
                  </View>
                  ))
        }
        </ScrollView>
        </View>
    <NavTab></NavTab>
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
  responsiveBox: {
      width: wp('100%'),
      height: hp('17%'),
      flexDirection: 'column'
    },
});


export default HomeVideoPlay;