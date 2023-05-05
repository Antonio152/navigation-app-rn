import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PageOneScreen} from '../screens/PageOneScreen';
import {PageTwoScreen} from '../screens/PageTwoScreen';
import {PageThreeScreen} from '../screens/PageThreeScreen';
import {UserScreen} from '../screens/UserScreen';
import {stylesMC} from '../theme/appTheme';
import {RootStackParams} from './types/StackNavigator.types';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='PageTwoScreen'
      screenOptions={{
        headerStyle: stylesMC.backColorM,
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        cardStyle: stylesMC.globalBackgroundC,
        // headerShown: false, // This hide and show the menu button in header
      }}>
      <Stack.Screen
        name="PageOneScreen"
        options={{title: 'Página 1'}}
        component={PageOneScreen}
      />
      <Stack.Screen
        name="PageTwoScreen"
        options={{title: 'Página 2'}}
        component={PageTwoScreen}
      />
      <Stack.Screen
        name="PageThreeScreen"
        options={{title: 'Página 3'}}
        component={PageThreeScreen}
      />
      <Stack.Screen
        name="UserScreen"
        options={{title: 'UserScreen'}}
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};
