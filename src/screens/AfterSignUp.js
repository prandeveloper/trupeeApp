import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {Button, Card, Paragraph, Title} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MemberPlan from './services/MemberPlan';

const AfterSignUp = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomHeader />
      </View>
      <ScrollView>
        <View>
          <View style={styles.subView}>
            <Card style={styles.mainCard}>
              <Card.Content>
                <Paragraph>Subscription Type:</Paragraph>
                <Paragraph>Start Date:</Paragraph>
                <Paragraph>Expiry Date</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.subView}>
            <MemberPlan />
          </View>
          <View style={styles.subView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.viewOne}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  Premium / Paid Services Included:
                </Text>
              </View>
              <View style={styles.viewTwo}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={22}
                  color={'black'}
                  style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}
                />
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => navigation.navigate('Frequently Asked Questions')}>
              <View style={styles.viewOne}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  FAQs (Frequently asked Questions)
                </Text>
              </View>
              <View style={styles.viewOne}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={22}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subView}>
            <View style={styles.viewThree}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                Referral Wallet Balance
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.viewThree}>
                <Text style={{fontWeight: '700', color: 'black'}}>₹ 0</Text>
              </View>
              <View style={styles.viewThree}>
                <Text>Use My Wallet Balance</Text>
                {/* <Text>Use My Wallet Balance</Text> */}
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.viewThree}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                Have a Promo Code?
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.viewThree}>
                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                />
              </View>
              <View style={styles.viewFour}>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.bottomStyle}>
              <Text style={[styles.viewThree, {color: '#000'}]}>
                I understand & agree to all of Trupee’s
              </Text>
              <Text style={[styles.viewThree, {color: '#000'}]}>
                TERMS & CONDITIONS
              </Text>
              <View>
                <TouchableOpacity style={styles.bottomBtn}>
                  <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AfterSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCard: {
    backgroundColor: '#c0d4a3',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 15,
  },
  subView: {
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  viewOne: {
    marginHorizontal: 5,
    marginVertical: 20,
  },

  viewTwo: {
    marginHorizontal: 5,
    marginVertical: 20,
  },
  viewThree: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  viewFour: {
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  buttonStyle: {
    backgroundColor: '#a82682',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  bottomStyle: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBtn: {
    backgroundColor: '#a82682',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 30,
  },
});
