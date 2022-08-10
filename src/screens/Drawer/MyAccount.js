import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyAccount = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const getUser = async () => {
    axios
      .get(`http://65.0.183.149:8000/user/viewoneuser`, {
        headers: {
          'auth-token': await AsyncStorage.getItem('auth-token'),
        },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (AsyncStorage.getItem('auth-token')) {
      getUser();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <View style={styles.main}>
          <View style={styles.mainView}>
            <Ionicons name="md-person" color="green" size={25} />
            <TextInput
              placeholder="FirstName"
              placeholderTextColor="#000"
              onChangeText={setFirstName}
              value={firstName}
              keyboardType="default"
              style={[styles.tfield, {width: 120}]}
            />
            <TextInput
              placeholder="LastName"
              placeholderTextColor="#000"
              onChangeText={setLastName}
              value={lastName}
              keyboardType="default"
              style={[styles.tfield, {width: 120}]}
            />
          </View>

          <View style={styles.mainView}>
            <Ionicons name="ios-people" color="green" size={25} />
            <Picker
              style={[styles.tfield, {width: 250}]}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Male" value="male" style={{color: '#000'}} />
              <Picker.Item
                label="Female"
                value="female"
                style={{color: '#000'}}
              />
              <Picker.Item
                label="Other"
                value="other"
                style={{color: '#000'}}
              />
            </Picker>
          </View>

          <View style={styles.mainView}>
            <Ionicons name="md-calendar" color="green" size={25} />
            <DatePicker
              style={[styles.tfield, {width: 250}]}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => {
                setDate({date: date});
              }}
            />
          </View>

          <View style={styles.mainView}>
            <Ionicons name="md-mail" color="green" size={25} />
            <TextInput
              style={[styles.tfield, {width: 250}]}
              placeholder="Email"
              placeholderTextColor="#000"
              onChangeText={setEmail}
              value={email}
              keyboardType="default"
            />
          </View>

          <View style={styles.mainView}>
            <Ionicons name="md-call" color="green" size={25} />
            <TextInput
              style={[styles.tfield, {width: 250}]}
              placeholder="Mobile"
              placeholderTextColor="#000"
              onChangeText={setMobile}
              value={mobile}
              keyboardType="default"
            />
          </View>

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  main: {
    marginTop: 50,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tfield: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    margin: 5,
    marginVertical: 15,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 20,
  },
});
