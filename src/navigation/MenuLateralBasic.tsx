import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import {stylesMC} from '../theme/appTheme';
import {TMenuLateralBasic} from './types/MenuLateralBasic.types';

const Drawer = createDrawerNavigator<TMenuLateralBasic>();

export const MenuLateralBasic = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerPosition: 'right',
        // drawerType: 'permanent',
        headerStyle: stylesMC.backColorM,
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
        headerShown: false, // This hide and show the menu button in header
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
