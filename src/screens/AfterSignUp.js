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
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import axiosConfig from '../../axiosConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MemberPlan from './services/MemberPlan';
import SimpleHeader from '../components/SimpleHeader';

const AfterSignUp = ({navigation}) => {
  const [plan, setPlan] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedId, setSelectedId] = useState([]);
  const [text, setText] = React.useState('');

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

  const handleSelection = _id => {
    var selectedId = selectedId;
    if (selectedId === _id) setSelectedItem(null);
    else setSelectedItem(_id);
    console.log(_id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SimpleHeader />
      </View>
      <ScrollView>
        <View>
          <View style={styles.subView}>
            <View style={styles.topView}>
              <Text style={styles.topText}>
                Welcome to Trupee community. Over 10K+ subscriber are investing
                through our platform.
              </Text>
            </View>
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
                    <TouchableOpacity
                      key={item._id}
                      onPress={() => handleSelection(item._id)}
                      style={
                        item._id === selectedItem ? styles.memberTouch : null
                      }>
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
    backgroundColor: '#FFF',
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
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 15,
  },
  topText: {
    textAlign: 'center',
    color: '#a82682',
    fontSize: 16,
    fontWeight: '700',
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
});
