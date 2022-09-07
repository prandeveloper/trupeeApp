/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import axiosConfig from './axiosConfig';
import RNPreventScreenshot from 'react-native-screenshot-prevent';

export default function index() {
  RNPreventScreenshot.enabled(true);

  return <App />;
}

AppRegistry.registerComponent(appName, () => index);
