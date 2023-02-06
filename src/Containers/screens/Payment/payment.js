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

const initialState = {
  PayPal: false,
  Stripe: false,
  GooglePay: false,
  ApplePay: false,
}
const Payment = ({ navigation }) => {
  const [state, setState] = React.useState(initialState)
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        height={80}
        borderRadius={5}
        containerStyle={{ backgroundColor: '#27BC7F', margin: 0, padding: 0 }}
      >
        <Card
          height={30}
          borderRadius={10}
          containerStyle={{
            padding: 0,
            marginTop: 30,
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
          Payment Method
        </Text>
      </Card>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Select the payment method you want to use</Text>
        <Card
          borderRadius={10}
          containerStyle={{
            left: 0,
            height: 60,
            width: wp('90%'),
            backgroundColor: '#CDEFE9',
          }}
        >
          <View style={styles.cardWrapper}>
            <Text>Paypal</Text>
            <CheckBox
              disabled={false}
              value={state.PayPal}
              onValueChange={value =>
                setState({
                  ...state,
                  PayPal: value,
                })
              }
            />
          </View>
        </Card>
        <Card
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 60,
            width: wp('90%'),
            backgroundColor: '#CDEFE9',
          }}
        >
          <View style={styles.cardWrapper}>
            <Text>Stripe</Text>
            <CheckBox
              disabled={false}
              value={state.Stripe}
              onValueChange={value =>
                setState({
                  ...state,
                  Stripe: value,
                })
              }
            />
          </View>
        </Card>
        <Card
          height={30}
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 60,
            width: wp('90%'),
            backgroundColor: '#CDEFE9',
          }}
        >
          <View style={styles.cardWrapper}>
            <Text>Google Pay</Text>
            <CheckBox
              disabled={false}
              value={state.GooglePay}
              onValueChange={value =>
                setState({
                  ...state,
                  GooglePay: value,
                })
              }
            />
          </View>
        </Card>
        <Card
          height={30}
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 60,
            width: wp('90%'),
            backgroundColor: '#CDEFE9',
          }}
        >
          <View style={styles.cardWrapper}>
            <Text>Apple Pay</Text>
            <CheckBox
              disabled={false}
              value={state.ApplePay}
              onValueChange={value =>
                setState({
                  ...state,
                  ApplePay: value,
                })
              }
            />
          </View>
        </Card>
        <Card
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 50,
            width: wp('90%'),
            backgroundColor: '#30F2B3',
            alignItems: 'center',
          }}
        >
          <Text>Add New Card</Text>
        </Card>
        <TouchableOpacity
          style={{
            backgroundColor: '#0B774B',
            width: wp('90%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            height: 50,
            marginTop: 100,
          }}
        >
          <Text style={{ color: 'white' }}>Confirm Payment</Text>
        </TouchableOpacity>
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
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Payment
