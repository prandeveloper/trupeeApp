import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FnoIndex from './home/FnoIndex';
import AllTrade from './home/AllTrade';
import FnoEquity from './home/FnoEquity';
import EquityCash from './home/EquityCash';
import DatePicker from 'react-native-datepicker';
//import Moment from 'react-moment';
import moment from 'moment';
import axios from 'axios';

export default function HomeScreen({navigation, props}) {
  const Tab = createMaterialTopTabNavigator();
  const [date, setDate] = useState();
  const [tabDate, setTabDate] = useState();
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [todayProfit, setTodayProfit] = useState({});
  const [weeklyProfit, setWeeklyProfit] = useState({});
  const [monthlyProfit, setMonthlyProfit] = useState({});

  const getTodayProfit = () => {
    axios
      .get(`http://65.0.183.149:8000/admin/today_profit_loss`)
      .then(response => {
        //console.log(response.data);
        setTodayProfit(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getWeeklyProfit = () => {
    axios
      .get(`http://65.0.183.149:8000/admin/weekely_profit_loss`)
      .then(response => {
        //console.log(response.data);
        setWeeklyProfit(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getMonthlyProfit = () => {
    axios
      .get(`http://65.0.183.149:8000/admin/monthly_profit_loss`)
      .then(response => {
        //console.log(response.data);
        setMonthlyProfit(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTodayProfit();
    getWeeklyProfit();
    getMonthlyProfit();
  }, []);

  var mDate = moment({date}).format('DD-MM-YYYY');

  //console.log('@@@@', mDate);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <View style={styles.mainView}>
          <View style={styles.firstView}>
            <TouchableOpacity>
              <Image
                style={styles.logoImg}
                source={require('../Images/top-left-logo/top-left-logo1.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.secondView}>
            <TouchableOpacity
              style={styles.dateTextView}
              onPress={() => setModalVisible(true)}>
              <View style={styles.tradeTextView}>
                <Text style={styles.tradeText}>Today's P&L</Text>
              </View>
              <View style={styles.tradeTextView}>
                {todayProfit?.total_prft_loss < 0 ? (
                  <Text style={[styles.tradeText1, {color: 'red'}]}>
                    ₹ {todayProfit?.total_prft_loss}
                  </Text>
                ) : (
                  <Text style={[styles.tradeText1, {color: 'green'}]}>
                    ₹ {todayProfit?.total_prft_loss}
                  </Text>
                )}
              </View>
              <View style={styles.tradeTextView}>
                <Text style={styles.tradeText2}>
                  Total Performance | Trade History
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Profit & Loss</Text>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={styles.modalText}>Today</Text>
                        {todayProfit?.total_prft_loss < 0 ? (
                          <Text style={[styles.modalText1, {color: 'red'}]}>
                            ₹ {todayProfit?.total_prft_loss}
                          </Text>
                        ) : (
                          <Text style={[styles.modalText1, {color: 'green'}]}>
                            ₹ {todayProfit?.total_prft_loss}
                          </Text>
                        )}
                      </View>
                      <View>
                        <Text style={styles.modalText}>Weekly</Text>
                        {weeklyProfit?.weekly_profit_loss < 0 ? (
                          <Text style={[styles.modalText1, {color: 'red'}]}>
                            ₹ {weeklyProfit?.weekly_profit_loss}
                          </Text>
                        ) : (
                          <Text style={[styles.modalText1, {color: 'green'}]}>
                            ₹ {weeklyProfit?.weekly_profit_loss}
                          </Text>
                        )}
                      </View>
                      <View>
                        <Text style={styles.modalText}>Monthly</Text>
                        {monthlyProfit?.thirtydays_prft_loss < 0 ? (
                          <Text style={[styles.modalText1, {color: 'red'}]}>
                            ₹ {monthlyProfit?.thirtydays_prft_loss}
                          </Text>
                        ) : (
                          <Text style={[styles.modalText1, {color: 'green'}]}>
                            ₹ {monthlyProfit?.thirtydays_prft_loss}
                          </Text>
                        )}
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.calender}
                      onPress={() => setOpen(true)}>
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: '600',
                          fontSize: 15,
                          marginBottom: 20,
                        }}>
                        Select Date to view Trade Record
                      </Text>
                      <DatePicker
                        open={open}
                        date={date}
                        mode="date"
                        format="DD-MM-YYYY"
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={setDate}
                        showIcon={true}
                        hideText={false}
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 5,
                            right: 5,
                            height: 18,
                          },
                          dateInput: {
                            marginLeft: 10,
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 10,
                          },
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>CLOSE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, color: '#000', fontWeight: '600'},
          tabBarItemStyle: {width: 130},
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#a82682',
          },
          tabBarStyle: {backgroundColor: 'white', paddingHorizontal: 0},
        }}>
        <Tab.Screen name="ALL TRADE">
          {props => <AllTrade {...props} extraData={mDate} />}
        </Tab.Screen>
        <Tab.Screen name="FNO INDEX">
          {props => <FnoIndex {...props} extraData={mDate} />}
        </Tab.Screen>
        <Tab.Screen name="FNO EQUITY">
          {props => <FnoEquity {...props} extraData={mDate} />}
        </Tab.Screen>
        <Tab.Screen name="EQUITY CASH">
          {props => <EquityCash {...props} extraData={mDate} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginTop: 0,
    height: 100,
    backgroundColor: '#FFF',
    elevation: 10,
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
  },
  secondView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTextView: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 4,
  },
  tradeTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  tradeText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
  tradeText1: {
    color: 'green',
    fontSize: 17,
    fontWeight: '800',
  },
  tradeText2: {
    color: 'purple',
    fontSize: 10,
    fontWeight: '700',
  },
  logoImg: {
    width: 120,
    height: 45,
    marginLeft: 10,
  },
  calenderStyle: {
    borderColor: '#00b050',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  calenderImage: {
    height: 25,
    width: 30,
  },
  calenderText: {
    color: '#000',
  },
  calender: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  centeredView: {
    backgroundColor: 'gray',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    height: 400,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'green',
    fontSize: 16,
    fontWeight: '800',
  },
});
