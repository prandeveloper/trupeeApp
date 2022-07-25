import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {Image, StyleSheet} from 'react-native';
import Services from '../screens/services/Services';
import Explore from '../screens/explore/Explore';
import Notification from '../screens/notification/Notification';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 11,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../Images/Icons/home-colour-icon1.png')
              : require('../Images/Icons/home-colour-icon.png');
          } else if (route.name === 'Services') {
            iconName = focused
              ? require('../Images/Icons/service-plan-colour-icon1.png')
              : require('../Images/Icons/service-plan-icon1.png');
          }
          if (route.name === 'Explore') {
            iconName = focused
              ? require('../Images/Icons/explore-colour-icon1.png')
              : require('../Images/Icons/explore-icon1.png');
          } else if (route.name === 'Notification') {
            iconName = focused
              ? require('../Images/Icons/notification-colour-icon1.png')
              : require('../Images/Icons/notification-icon1.png');
          }
          if (route.name === 'Profile') {
            iconName = focused
              ? require('../Images/Icons/profile-colour-icon1.png')
              : require('../Images/Icons/profile-icon1.png');
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          );
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
      })}
      options={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// const getTabBarVisibility = route => {
//   // console.log(route);
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   // console.log(routeName);

//   if (routeName == 'GameDetails') {
//     return 'none';
//   }
//   return 'flex';
// };
const styles = StyleSheet.create({
  bottomImage: {
    height: 25,
    width: 25,
  },
});

export default TabNavigator;
