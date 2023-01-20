import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from '@rneui/themed'
import { Avatar, Surface, Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { LineChart } from 'react-native-chart-kit'
import NavTab from './topNavTab'

const Dashboard = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.responsiveBox}>
        <Card
          width={wp('100%')}
          borderRadius={5}
          containerStyle={{ backgroundColor: 'white', margin: 0, padding: 0 }}
        >
          <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
            <View marginTop={20}>
              <Icon name="menu-outline" size={27} color="black" />
            </View>
            <View marginTop={20} marginLeft={wp('25%')}>
              <Text style={{ color: 'black', fontSize: 22 }}>Dashboard</Text>
            </View>
            <Avatar
              image={require('../../../Assets/Images/avatar.jpeg')}
              style={{ marginLeft: '20%' }}
            />
          </View>
        </Card>
        <NavTab />
        <View
          style={{ width: wp('100%'), marginLeft: wp('5%'), marginTop: 10 }}
        >
          <Text>Students Joined</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={wp('90%')} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#27BC7F',
              backgroundGradientFrom: '#80EBBF',
              backgroundGradientTo: '#27BC7F',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={{ width: wp('95%') }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ marginLeft: wp('5%') }}>Attendance Details</Text>
            <Text style={{ marginLeft: wp('5%') }}>View All</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Surface
              style={{
                width: 180,
                height: 270,
                borderRadius: 16,
                margin: 10,
                padding: 10,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Mentors</Text>
                <Text>View all</Text>
              </View>
              <Image
                style={{ margin: 20 }}
                source={require('../../../Assets/Images/mentor.jpeg')}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Total Teachers</Text>
                <Text>108</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Present</Text>
                <Text>104</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  title="Add"
                  color="#00AB65"
                  titleStyle={{ color: 'white', fontSize: 10 }}
                />
                <Button
                  variant="outlined"
                  title="Remove"
                  color="#00AB65"
                  width={85}
                  titleStyle={{ fontSize: 10 }}
                />
              </View>
            </Surface>
            <Surface
              style={{
                width: 180,
                height: 270,
                borderRadius: 16,
                margin: 10,
                padding: 10,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Mentors</Text>
                <Text>View all</Text>
              </View>
              <Image
                style={{ margin: 20 }}
                source={require('../../../Assets/Images/learner.jpeg')}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Total Teachers</Text>
                <Text>108</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Present</Text>
                <Text>104</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  title="Add"
                  color="#00AB65"
                  titleStyle={{ color: 'white', fontSize: 10 }}
                />
                <Button
                  variant="outlined"
                  title="Remove"
                  color="#00AB65"
                  width={85}
                  titleStyle={{ fontSize: 10 }}
                />
              </View>
            </Surface>
          </View>
          <View style={{ width: wp('95%') }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ marginLeft: wp('5%') }}>Recent Transaction</Text>
              <Text style={{ marginLeft: wp('5%') }}>View all</Text>
            </View>
            <ScrollView>
              <Surface
                style={{
                  width: wp('100%'),
                  height: 80,
                  padding: 10,
                  marginLeft: wp('5%'),
                }}
              >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Avatar
                    image={require('../../../Assets/Images/avatar.jpeg')}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                      Paid to Syndra Thomas
                    </Text>
                    <Text>12:48 am, 2 days ago</Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                      marginLeft: 30,
                      color: '#00AB65',
                    }}
                  >
                    9800 INR
                  </Text>
                </View>
              </Surface>
              <Surface
                style={{
                  width: wp('100%'),
                  height: 80,
                  padding: 10,
                  marginLeft: wp('5%'),
                }}
              >
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Avatar
                    image={require('../../../Assets/Images/avatar.jpeg')}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: 'black' }}>
                      Paid to Syndra Thomas
                    </Text>
                    <Text>12:48 am, 2 days ago</Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                      marginLeft: 30,
                      color: '#00AB65',
                    }}
                  >
                    9800 INR
                  </Text>
                </View>
              </Surface>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    paddingRight: 10,
  },
  linearGradient: {
    padding: 10,
    marginLeft: 30,
    borderRadius: 10,
    height: 150,
    width: 352,
  },
  responsiveBox: {
    width: wp('100%'),
    flexDirection: 'column',
  },
})

export default Dashboard
