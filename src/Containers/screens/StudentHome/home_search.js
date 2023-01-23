import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import NavTab from '../Commons/nav_tab'
import { Button_Name } from '../../../Constants/Button_Name'
import { Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const HomeSearch = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        height={50}
        borderRadius={5}
        containerStyle={{ backgroundColor: '#27BC7F', margin: 0, padding: 0 }}
      >
        <Card
          height={30}
          borderRadius={10}
          containerStyle={{
            padding: 0,
            marginTop: 8,
            left: 0,
            width: wp('7%'),
          }}
        >
          <Icon name="chevron-back-outline" size={27} color="black" />
        </Card>
        <Text
          style={{
            color: 'white',
            marginLeft: wp('13%'),
            marginTop: -25,
            fontSize: 16,
          }}
        >
          Courses
        </Text>
      </Card>
      <View flexDirection="row">
        <SearchBar
          placeholder="Search"
          platform="android"
          lightTheme={true}
          round={true}
          placeholderTextColor="#0B774B"
          cancelIcon={{ color: '#0B774B' }}
          clearIcon={{ color: '#0B774B', disabled: false }}
          searchIcon={{ height: 30, color: '#0B774B' }}
          containerStyle={{
            color: '#0B774B',
            backgroundColor: '#DCFFF1',
            borderRadius: 5,
            width: wp('80%'),
            height: 40,
            marginTop: 10,
            marginLeft: 20,
            borderWidth: 0,
          }}
          inputContainerStyle={{ height: 25, width: wp('80%') }}
        />
        <Icon
          name="filter"
          size={20}
          style={{ marginTop: 20, marginLeft: wp('3%'), color: '#0B774B' }}
        />
      </View>
      <Text
        style={{
          color: '#343434',
          marginLeft: wp('7%'),
          marginTop: 10,
          fontSize: 14,
        }}
      >
        Top Searches
      </Text>
      <View
        flexDirection="row"
        flexWrap="wrap"
        marginLeft={wp('3%')}
        height={hp('70%')}
      >
        {Button_Name.map((item, key) => (
          // <Button
          //   type="outline"
          //   key={key}
          //   height={99}
          //   titleStyle={{ color: '#343434', fontSize: 12 }}
          //   buttonStyle={{
          //     alignContent: 'center',
          //     flex: 1,
          //     marginTop: 10,
          //     padding: 5,
          //     marginLeft: wp('3.5%'),
          //     color: '#343434',
          //     borderColor: '#0B774B',
          //     borderRadius: 8,
          //   }}
          // >
          //   {item}
          // </Button>
          <Button
            title={item}
            variant="outlined"
            key={key}
            height={29}
            margin={2}
            color="#0B774B"
            alignItems="center"
            justifyContent="center"
          />
        ))}
      </View>
      <NavTab />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    flexDirection: 'column',
  },
})

export default HomeSearch
