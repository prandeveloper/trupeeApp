import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FnoIndex from './FnoIndex';
import AllTrade from './AllTrade';
import FnoEquity from './FnoEquity';
import EquityCash from './EquityCash';

export default function HomeScreen({navigation}) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <CustomHeader />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="ALL TRADE" component={AllTrade} />
        <Tab.Screen name="FNO INDEX" component={FnoIndex} />
        <Tab.Screen name="FNO EQUITY" component={FnoEquity} />
        <Tab.Screen name="EQUITY CASH" component={EquityCash} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
