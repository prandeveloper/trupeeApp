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
import FnoIndex from './home/FnoIndex';
import AllTrade from './home/AllTrade';
import FnoEquity from './home/FnoEquity';
import EquityCash from './home/EquityCash';

export default function HomeScreen({navigation}) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <CustomHeader />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 10, color: '#000', fontWeight: '600'},
          tabBarItemStyle: {width: 100},
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#a82682',
          },
          tabBarStyle: {backgroundColor: 'white', paddingHorizontal: 0},
        }}>
        <Tab.Screen name="ALL TRADE" component={AllTrade} />
        <Tab.Screen name="FNO INDEX" component={FnoIndex} />
        <Tab.Screen name="FNO EQUITY" component={FnoEquity} />
        <Tab.Screen name="EQUITY CASH" component={EquityCash} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
