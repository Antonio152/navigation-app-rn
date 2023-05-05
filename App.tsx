import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {MenuLateralBasic} from './src/navigation/MenuLateralBasic';
import {MenuLateralTwo} from './src/navigation/MenuLateralTwo';
// import {TabsMenu} from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasic /> */}
      <MenuLateralTwo />
      {/* <TabsMenu /> */}
    </NavigationContainer>
  );
};

export default App;
