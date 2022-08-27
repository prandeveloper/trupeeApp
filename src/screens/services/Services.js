import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import MemberPlan from './MemberPlan';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleHeader from '../../components/SimpleHeader';
import axiosConfig from '../../../axiosConfig';

const Services = ({navigation}) => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const getPlan = () => {
      axiosConfig
        .get(`/plan_list`)
        .then(response => {
          console.log(response.data.data);
          setPlan(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getPlan();
  }, []);
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SimpleHeader />
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
            {/* <MemberPlan /> */}
            <View>
              <View style={styles.textView}>
                <Text style={styles.oneText}>
                  Select Package to Activate Service
                </Text>
              </View>
              <View style={styles.textView}>
                <ScrollView horizontal={true}>
                  {plan?.map(item => (
                    <TouchableOpacity>
                      <View style={[styles.card, {backgroundColor: '#c0d4a3'}]}>
                        <Text style={styles.textcard}>{item?.pack_name}</Text>
                        <Text style={styles.textcard}>₹{item?.des_price}</Text>
                        <Text style={styles.textcard1}>
                          ₹ {item?.mrp_price}
                        </Text>
                        <Text style={styles.offText}>{item?.desc}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => navigation.navigate('Premium Service')}>
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
            </TouchableOpacity>
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
                <Text style={{fontWeight: '700', color: 'black', fontSize: 16}}>
                  ₹ 0
                </Text>
              </View>
              <View style={styles.viewThree}>
                <Text style={{color: '#000'}}>Use My Wallet Balance</Text>
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
              <TouchableOpacity
                onPress={() => navigation.navigate('Terms & Conditions')}>
                <Text style={[styles.viewThree, {color: '#000'}]}>
                  TERMS & CONDITIONS
                </Text>
              </TouchableOpacity>
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

export default Services;

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
    borderBottomWidth: 1,
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
    borderRadius: 10,
    elevation: 5,
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
    borderRadius: 10,
    elevation: 5,
  },
  //membership

  textView: {
    margin: 5,
  },
  oneText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 130,

    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  textcard: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  textcard1: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
    textDecorationLine: 'line-through',
    textDecorationColor: '#000',
  },
  offText: {
    backgroundColor: '#a82682',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
