import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {TextInput} from 'react-native-paper';

const MyAccount = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState('male');
  const [userId, setUserId] = useState('');

  const getUser = async () => {
    axios
      .get(`http://65.0.183.149:8000/user/viewoneuser`, {
        headers: {'auth-token': await AsyncStorage.getItem('auth-token')},
      })
      .then(response => {
        console.log(response.data.data);
        setFirstName(response.data.data.firstname);
        setLastName(response.data.data.lastname);
        setGender(response.data.data.gender);
        setEmail(response.data.data.email);
        setDate(response.data.data.dob);
        setMobile(JSON.stringify(response.data.data.mobile));
        setUserId(response.data.data._id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const editProfile = async () => {
    console.log(firstName, lastName, email, mobile, gender, date);
    axios
      .post(
        `http://65.0.183.149:8000/user/myprofile`,
        {
          firstname: firstName,
          lastname: lastName,
          gender: gender,
          dob: date,
          email: email,
          mobile: mobile,
        },
        {headers: {'auth-token': await AsyncStorage.getItem('auth-token')}},
      )
      .then(response => {
        console.log(response.data);
        navigation.replace('My Account');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 0}}>
        <View style={styles.main}>
          <View style={styles.mainView}>
            <Ionicons name="md-person" color="green" size={25} />
            <TextInput
              label="FirstName"
              outlineColor="green"
              mode="outlined"
              onChangeText={setFirstName}
              value={firstName}
              keyboardType="default"
              style={[styles.tfield, {width: 120}]}
            />
            <TextInput
              label="LastName"
              outlineColor="green"
              mode="outlined"
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
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
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
              showIcon={false}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              maxDate={date}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  marginLeft: 10,
                },
              }}
              onDateChange={setDate}
            />
          </View>

          <View style={styles.mainView}>
            <Ionicons name="md-mail" color="green" size={25} />
            <TextInput
              style={[styles.tfield, {width: 250}]}
              label="Email"
              outlineColor="green"
              mode="outlined"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.mainView}>
            <Ionicons name="md-call" color="green" size={25} />
            <TextInput
              style={[styles.tfield, {width: 250}]}
              label="Mobile"
              outlineColor="green"
              mode="outlined"
              onChangeText={setMobile}
              value={mobile}
              keyboardType="default"
              editable={false}
            />
          </View>

          <TouchableOpacity style={styles.touch} onPress={editProfile}>
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
  mainView1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tfield: {
    borderWidth: 0,
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
