import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import NavTab from '../screens/nav_tab';
import { Button_Name }  from '../../Constants/Button_Name';


const HomeSearch = ({ navigation }) => {
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
    <Text style={{color:"white", marginLeft: 60, marginTop:-25, fontSize: 16}}>Courses</Text>
      </Card>
      <View flexDirection="row">
      <SearchBar
          placeholder="Search"
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
              width: 320,
              height:40,
              marginTop: 10,
              marginLeft:20,
              borderWidth: 0
          }}
          inputContainerStyle={{ height: 25, width: 300 }}
          ></SearchBar>
          <Icon name="filter" size={20} style={{ marginTop:20, marginLeft: 30, color: "#0B774B" }}></Icon>
          </View>
      <Text style={{color:"#343434", marginLeft: 30, marginTop:10, fontSize: 14}}>Top Searches</Text>
        <View flexDirection="row" flexWrap="wrap" marginLeft={20}>
        {
        Button_Name.map((item, key)=>(
            <Button type="outline"
            key = {key}
            titleStyle={{ color: "#343434", fontSize:12 }}
            buttonStyle =
            {{
            height: 29,
            alignContent: 'center',
            flex: 1,
            marginTop:10,
            padding:5,
            marginLeft:10,
            color:'#343434',
            borderColor: "#0B774B",
            borderRadius: 8
            }}> {item} </Button>
        ))
        }
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
  });

export default HomeSearch;