import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from '@rneui/themed'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button } from '@react-native-material/core'
import Video from 'react-native-video'
import video from '../../../Assets/Videos/demo.mp4'
import NavTab from './video_player_navtab'

const HomeVideoPlay = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)

  return (
    <ScrollView style={styles.responsiveBox}>
      <View style={styles.card}>
        <Card
          height={hp('5%')}
          borderRadius={10}
          containerStyle={styles.iconCard}
        >
          <Icon name="chevron-back-outline" size={27} color="black" />
        </Card>
        <Text style={styles.title}>Advanced Android Course</Text>
      </View>
      <View>
        <Video
          source={video}
          paused={!isPlaying}
          controls={true}
          style={styles.video}
          muted={isMuted}
        />
        {/* <Button
          onPress={() => setIsPlaying(p => !p)}
          title={isPlaying ? 'Stop' : 'Play'}
        />
        <Button
          onPress={() => setIsMuted(m => !m)}
          title={isMuted ? 'Unmute' : 'Mute'}
  /> */}
        <View style={styles.description}>
          <Text style={styles.text1}>Android App Development Course</Text>
          <Text style={styles.text2}>
            Kotlin | Android App Developement | Firebase
          </Text>
          <Text style={styles.text2}>Created By Arul Jeyaraj</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Wishlist"
            color="#96F2D4"
            width={100}
            titleStyle={{ fontSize: 10 }}
          />
          <Button
            title="Share"
            color="#96F2D4"
            width={100}
            titleStyle={{ fontSize: 10 }}
          />
          <Button
            title="Download"
            color="#96F2D4"
            width={100}
            titleStyle={{ fontSize: 10 }}
          />
        </View>
      </View>
      <NavTab />
      <View
        style={
          (styles.buttonWrapper,
          {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginTop: 60,
          })
        }
      >
        <Button
          title="$49"
          color="#D8FFF2"
          width={210}
          titleStyle={{ fontSize: 10 }}
        />
        <Button
          title="Buy Now"
          color="#0B774B"
          width={200}
          titleStyle={{ fontSize: 10 }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: '#27BC7F',
    margin: 0,
    padding: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconCard: {
    padding: 0,
    marginTop: hp('2%'),
    left: 0,
    width: 30,
  },
  title: {
    color: 'white',
    marginTop: hp('3%'),
    fontSize: 16,
  },
  description: {
    margin: 10,
  },
  buttonWrapper: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  text1: {
    color: '#0B774B',
    fontSize: 20,
  },
  text2: {
    color: '#0B774B',
    fontSize: 14,
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    flexDirection: 'column',
  },
  video: {
    width: wp('100%'),
    height: 300,
  },
})

export default HomeVideoPlay
