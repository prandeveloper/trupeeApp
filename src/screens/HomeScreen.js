import React, { useState } from 'react';
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FnoIndex from './home/FnoIndex';
import AllTrade from './home/AllTrade';
import FnoEquity from './home/FnoEquity';
import EquityCash from './home/EquityCash';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({ navigation, props }) {
  const Tab = createMaterialTopTabNavigator();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);



  const tDate = new Date().toDateString()
  console.log('today', tDate);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
            <TouchableOpacity style={styles.dateTextView} onPress={() => setModalVisible(true)}>
              <View style={styles.tradeTextView}>
                <Text style={{ color: 'green' }}>Trade History</Text>
              </View>
              <View style={styles.tradeTextView}>
                <Text style={{ color: 'green' }}>Trade History</Text>
              </View>
              <View style={styles.tradeTextView}>
                <Text style={{ color: 'green', fontSize: 15, fontWeight: '500' }}>{tDate}</Text>
              </View>
              <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <TouchableOpacity
                style={styles.calender}
                onPress={() => setOpen(true)}>
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
                      left: 0,
                      right: 5,

                      height: 18,
                      marginBottom: 0,
                    },
                    dateInput: {
                      marginLeft: 5,
                      borderWidth: 0,
                      marginBottom: 5,
                    },
                  }}
                />
              </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              </View>
              
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, color: '#000', fontWeight: '600' },
          tabBarItemStyle: { width: 130 },
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#a82682',
          },
          tabBarStyle: { backgroundColor: 'white', paddingHorizontal: 0 },
        }}>
        <Tab.Screen name="ALL TRADE" component={AllTrade} date={props?.date} />
        <Tab.Screen name="FNO INDEX" component={FnoIndex} />
        <Tab.Screen name="FNO EQUITY" component={FnoEquity} />
        <Tab.Screen name="EQUITY CASH" component={EquityCash} />
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
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5
  },
  tradeTextView: {
    justifyContent: 'center',
    alignItems: 'center'
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
    borderWidth: 0,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
