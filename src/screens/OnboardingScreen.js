import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import bgImg from '../Images/Background/bgImg.png';
import LoginScreen from './LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({navigation}) => {
  setTimeout(async () => {
    const value = await AsyncStorage.getItem('auth-token');
    if (value !== null) {
      navigation.replace('MemberPlan');
    }
     else {
      navigation.replace('Login');
      //navigation.replace('Login', {name: 'Login'});
    }
  }, 1000);
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.logoImg}
          source={require('../Images/mainlogo/mainLogo.png')}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 200,
    height: 200,
  },
});

export default OnboardingScreen;
