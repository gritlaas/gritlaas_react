import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, SearchBar } from '@rneui/themed';
import * as Progress from 'react-native-progress';
import { Button } from '@rneui/base';
import { EducatorDetails } from "../../Constants/Educators"
import { CoursesDetails } from "../../Constants/Courses"
import NavTab from '../screens/nav_tab'


const Home = ({ navigation }) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    
  return (
    <ScrollView>
    <Card 
    width= {width}
    height = {160}
    borderRadius = {5}
    containerStyle= {{ backgroundColor:"#27BC7F", margin: 0, padding:0}}
    >
    <Card.Image
        source={require('../../Assets/Images/avatar.jpeg')}
        style={{ width: 50, height: 50, borderRadius: 100, marginTop: 40, marginLeft: 20}}
    >
    </Card.Image>
    <Text style={{color:"white", marginLeft: 80, marginTop:-50, fontSize: 14}}>Hello!</Text>
    <Text style={{color:"#0a5943", marginLeft: 80, marginTop:7, fontWeight:"bold", fontSize:16}}>Jyoti Jha</Text>
    <Card 
    width= {30}
    height = {30}
    borderRadius = {10}
    containerStyle= {{ 
    padding :0,
    top : -50,
    left : 330,
    width: 30
    }}>
    <Icon name="notifications-outline" size={27} ></Icon>
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
        width: "75%",
        height:40,
        marginTop: -30,
        marginLeft:20,
        borderWidth: 0
    }}
    inputContainerStyle={{ height: 25, width: 290 }}
    ></SearchBar>
    </Card>
    
    <Text style = {{color:"#343434", marginTop: 20, marginLeft: 30}}>
        Continue Learning
    </Text>
    <Card
    width= "85%"
    height = {100}
    borderRadius = {10}
    containerStyle= {{ padding :10, paddingLeft:20, backgroundColor:"#96F2D4", marginLeft:30}}>
        <Text marginLeft= {20} style={{color:"#00301C"}}>
            Grit Studies
        </Text>
        <Text marginLeft= {20} style={{color:"#00301C", fontWeight:"bold", top: 5}}>
            DevOps & Software Engineering
        </Text>
        <Progress.Bar 
        progress={0.4}
        width={250}
        color="#FF6E15"
        marginTop={20} 
        backgroundColor="#FFE1CF"/>
    </Card>
    <Text style = {{color:"#343434", marginTop: 20, marginLeft: 30}}>
        Top Categories
    </Text>
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
    <View style={{flexDirection: "row", width: 750}}>
    <Text style = {{color:"#343434", marginTop: 10, marginLeft: 30, flex:1}}>
        Recommended Course For You
    </Text>
    <Text style = {{color:"orange", marginTop: 10, paddingLeft: 90, flex:2}}>
        See all
    </Text>
    </View>
    
    <ScrollView 
    horizontal
    disableIntervalMomentum={ true } 
    snapToInterval={ width }
    marginLeft = {20}
    >
    {
    CoursesDetails.map((items, key)=>(
        <View key = {key}>
            <Card
            width= {200}
            height = {100}
            borderRadius = {10}
            containerStyle= {{backgroundColor:"#96F2D4", padding:0, marginLeft:5}}>
            <Card.Image
            source={items.img}
            style={{ width: 100, height: 100, borderRadius: 10, marginLeft: 0, padding:0}}
            >
            <Text 
            style={{
                 width: 90,
                 marginLeft: 105, 
                fontSize: 13, top: 5, fontWeight: "bold"}}>{items.course_name}</Text>
            <Text 
            style={{
                 width: 90,
                 marginLeft: 105,
                 fontSize: 10, marginTop: 9}}>{items.published_by}</Text>
            </Card.Image>
            <View style={{flexDirection:'row', flexWrap:'wrap', marginLeft: 100}}>
            {
            items.rating.map((item,key)=>(
            <Icon key ={key} name='star' style={{ marginLeft:10, marginTop: -27, color:"#FFC107"}}></Icon>
            ))
            }
            </View>
            </Card>
            </View>
            ))}
   
    </ScrollView>

    <View style={{flexDirection: "row", width: 700}}>
    <Text style = {{color:"#343434", marginTop: 20, marginLeft: 30, flex:1}}>
        Our Best Instructors
    </Text>
    <Text style = {{color:"orange", marginTop: 20, paddingLeft: 105, flex:2}}>
        See all
    </Text>
    </View>
    <ScrollView 
    horizontal
    disableIntervalMomentum={ true } 
    snapToInterval={ width }
    >
    {
        EducatorDetails.map((items,key)=>(
    <View style={{marginTop:10}} key = {key}>
    <Card.Image
    source= {items.img}
    style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 30}}
    >
    </Card.Image>
    <View style={{flexDirection:'column'}}>
    <Text 
    style={{
         marginLeft: 35, 
        fontSize: 13, top: 5, fontWeight: "bold", flex: 1}}>{items.name}</Text>
    <Text
    style={{
         fontSize: 9,
         top: 5,
         marginLeft: 35,
         color: 'grey',
         flex: 2
         }}>{items.info}</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:5, marginLeft: 35}}>
        {
        items.rating.map((item,key)=>(
            <Icon key ={key} name='star' style={{ marginLeft:0, color:"#FFC107", flex:1}}></Icon>
        ))
        }
        </View>
        </View>
    </View>
     ))
    }
    </ScrollView>
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
  
export default Home;