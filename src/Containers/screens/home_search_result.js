import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import NavTab from '../screens/nav_tab'


const HomeSearchResult = ({ navigation }) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

  return (
    <ScrollView>
    <Card
    width= {width}
    height = {50}
    borderRadius = {5}
    containerStyle= {{ backgroundColor:"#27BC7F", margin: 0, padding:0}}
    >
    <Card
        width= {30}
        height = {30}
        borderRadius = {10}
        containerStyle= {{
        padding :0,
        marginTop : 8,
        left : 0,
        width: 30
        }}>
        <Icon name="chevron-back-outline" size={27} color="black"></Icon>
      </Card>
      <SearchBar
          placeholder="Looking for a course?"
          platform = "android"
          lightTheme = {true}
          round = {true}
          placeholderTextColor = "#0B774B"
          cancelIcon = {{ color:"#0B774B" }}
          clearIcon = {{ color:"#0B774B", disabled: false }}
          searchIcon= {{ height: 30, color: "#0B774B"}}
          containerStyle={{
              color: "#0B774B",
              backgroundColor: "#DCFFF1",
              borderRadius: 5,
              width: 290,
              height:40,
              marginTop: -30,
              marginLeft:20,
              borderWidth: 0
          }}
          inputContainerStyle={{ height: 25, width: 290 }}
          ></SearchBar>
      <Card>
      <Image></Image>
      <Text></Text>
      </Card>
    </Card>
    <NavTab marginTop= {700}></NavTab>
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
  });

export default HomeSearchResult;