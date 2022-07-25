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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/images/misc/gaming.svg';
import bgImg from '../Images/Background/bgImg.png';
import LoginScreen from './LoginScreen';

const OnboardingScreen = ({navigation}) => {
  // setTimeout(async () => {
  //   navigation.navigate('LoginScreen');
  //   //  const value = await AsyncStorage.getItem('staff-token');
  //   //  if (value !== null) {
  //   //    navigation.replace('StackHome');
  //   //  } else {
  //   //    navigation.replace('Second');
  //   //    //navigation.replace('Login', { name: 'Login' })
  //   //  }
  // }, 1000);
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
