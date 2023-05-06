import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {MenuLateralBasic} from './src/navigation/MenuLateralBasic';
import {MenuLateralTwo} from './src/navigation/MenuLateralTwo';
import {AuthProvider} from './src/context/AuthContext';
import {IChildrenProps} from './src/shared/types/components.types';
// import {TabsMenu} from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasic /> */}
        <MenuLateralTwo />
        {/* <TabsMenu /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: IChildrenProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
