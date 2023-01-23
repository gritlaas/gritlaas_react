import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Card } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from '@react-native-community/checkbox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button } from '@react-native-material/core'
import * as Progress from 'react-native-progress'

const MyLearning = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
      <View style={styles.buttonWrapper}>
        <Button
          width={210}
          title="Ongoing"
          height={50}
          color="#27BC7F"
          alignItems="center"
          justifyContent="center"
          titleStyle={{ color: 'white' }}
        />
        <Button
          width={210}
          title="Completed"
          height={50}
          color="#D8FFF2"
          alignItems="center"
          justifyContent="center"
        />
      </View>
      <View>
        <Card
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 90,
            width: wp('90%'),
            backgroundColor: '#96F2D4',
            alignItems: 'flex-start',
          }}
        >
          <Text style={{ color: 'black' }}>Grit Studies</Text>
          <Text style={{ color: 'black' }}>DevOps & Software Engineering </Text>
          <Progress.Bar
            progress={0.4}
            width={wp('70%')}
            color="#FF6E15"
            marginTop={10}
            backgroundColor="#FFE1CF"
          />
        </Card>
      </View>
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default MyLearning
