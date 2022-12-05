import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import NavTab from '../screens/nav_tab'


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
      <Text style={{color:"white", marginLeft: 60, marginTop:-25, fontSize: 16}}>Top Searches</Text>
       <ScrollView horizontal style={{ marginTop:10 }}>
           <View>
           <Button type="outline"
           titleStyle={{ color: "#0B774B", fontSize:12 }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           alignContent: 'center',
           margin: 0,
           flex: 1,
           marginTop:5,
           paddingLeft:0,
           marginLeft: 20,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >NEET and  JEE coaching</Button>
               </View>
               <View>
               <Button type="outline"
           style={{ flex: 1 }}
           titleStyle={{ color: "#0B774B", fontSize:12  }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           flex: 2,
           alignContent: 'center',
           marginLeft: 10,
           marginTop:5,
           paddingLeft:0,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >UPSC AND TNPSC</Button>
               </View>
               <View>
               <Button type="outline"
           style={{ flex: 1 }}
           titleStyle={{ color: "#0B774B", fontSize:12  }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           flex: 2,
           alignContent: 'center',
           marginLeft: 10,
           marginTop:5,
           paddingLeft:0,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >LEADERSHIP</Button>
               </View>
           </ScrollView>
               <ScrollView horizontal>
               <View>
               <Button type="outline"
           style={{ flex: 1 }}
           titleStyle={{ color: "#0B774B", fontSize:12  }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           flex: 2,
           alignContent: 'center',
           marginLeft: 20,
           marginTop:5,
           paddingLeft:0,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >IT SOFTWARE COURSES</Button>
               </View>
               <View>
               <Button type="outline"
           titleStyle={{ color: "#0B774B", fontSize:12  }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           alignContent: 'center',
           margin: 5,
           flex: 1,
           paddingLeft:0,
           marginLeft: 10,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >BANK COACHING</Button>
               </View>
               <View>
           <Button type="outline"
           style={{ flex: 1 }}
           titleStyle={{ color: "#0B774B", fontSize:12 }}
           icon={{ size: 15 }}
           buttonStyle =
           {{
           height: 35,
           flex: 2,
           alignContent: 'center',
           margin: 5,
           paddingLeft:0,
           borderColor: "#0B774B",
           borderRadius: 12
           }}
           >DevOps and software engineering</Button>
               </View>
           </ScrollView>
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

export default HomeSearch;