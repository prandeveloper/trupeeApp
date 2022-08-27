import {StyleSheet, Text, View, TouchableOpacity, Share} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import SimpleHeader from '../../components/SimpleHeader';

const Profile = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <SimpleHeader />
      </View>
      <ScrollView>
        <View style={styles.textHeding}>
          <View>
            <Text style={styles.userName}>Hi, Vaishali Gawas</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={async () => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                });
                console.log('Logout Successfull');
                await AsyncStorage.removeItem('auth-token');
              }}>
              <Ionicons name="power" size={22} color={'green'} />
              <Text style={styles.btnLogout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('My Account')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="person-sharp"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>My Account</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Transaction History')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="md-reader"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>Transaction History</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('App Walkthrough')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="logo-buffer"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>App Walkthrough</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Frequently Asked Questions')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="ios-help-circle"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>
                FAQs (Frequently Asked Questions)
              </Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Feedback / Report Bugs')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>Feedback / Report Bugs</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Show Appreciation')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="gift"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>Show Appreciation</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Rate Us')}>
            <View style={styles.eachSection}>
              <Ionicons
                name="ribbon"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>Rate Us</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={onShare}>
            <View style={styles.eachSection}>
              <Ionicons
                name="share-social"
                size={25}
                color={'#404040'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.btntxt}>Share App</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={'green'}
                style={{marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.eachSection}>
              <Ionicons
                name="trash-bin"
                size={25}
                color={'#ff1010'}
                style={{marginLeft: 10}}
              />
              <Text style={styles.delete}>Delete Account Permanently</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  eachSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#727271',
    marginTop: 20,
  },
  userName: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    marginLeft: 15,
    color: '#a82682',
    marginBottom: 5,
  },
  btnLogout: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    marginLeft: 6,
    marginRight: 10,
    color: '#a82682',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#727271',
  },
  btntxt: {
    fontSize: 15,
    color: 'black',
    marginLeft: 15,
  },
  delete: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#ff1010',
    marginLeft: 15,
  },
});
