import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={styles.topLogo}>
          <Image
            source={require('../Images/mainlogo/mainLogo.png')}
            style={{height: 150, width: 150}}
          />
        </View>

        <View style={styles.inputStyle}>
          <InputField
            label={'Mobile Number'}
            icon={
              <MaterialIcons
                name="phone"
                size={20}
                color="#000"
                style={{marginRight: 5}}
              />
            }
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonStyle}>
          <CustomButton
            label={'Get OTP'}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topLogo: {
    alignItems: 'center',
    marginBottom: 50,
  },
  inputStyle: {
    marginVertical: 30,
  },
  buttonStyle: {
    marginVertical: 30,
  },
});

export default LoginScreen;
