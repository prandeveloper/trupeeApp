import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
