import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import TabNavigator from './src/navigation/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeStack from './src/navigation/TabNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <HomeStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

export default App;
