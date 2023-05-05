import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import {Platform} from 'react-native';
import {TabOneScreen} from '../screens/TabOneScreen';
import {StackNavigator} from './StackNavigator';

import {TopTabMenu} from './TopTabNavigator';
import {stylesMC, stylesTabs} from '../theme/appTheme';
import {IconTab} from './helpers/Tabs.helper';
import {TRootStackTabs} from './types/Tabs.types';

const TabAndroid = createMaterialBottomTabNavigator<TRootStackTabs>();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsMenuIOS /> : <TabMenuAndroid />;
};

/*
    ==== BOTTOM TABS NAVIGATION ===
*/

const TabMenuAndroid = () => {
  const themeA = useTheme();
  themeA.colors.secondaryContainer = 'transperent';
  return (
    <TabAndroid.Navigator
      // sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#05BFDB',
      }}
      activeColor="#F6F1F1"
      screenOptions={({route}) => ({
        tabBarStyle: stylesMC.noShadowM,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => IconTab({color, routeName: route.name}),
      })}>
      <TabAndroid.Screen
        name="TabOneScreen"
        options={{
          title: 'Tab 1',
        }}
        // options={{title: 'Tab 1', tabBarIcon: () => <Text>T1</Text>}}
        component={TabOneScreen}
      />
      <TabAndroid.Screen
        name="TabTwoScreen"
        options={{
          title: 'Tab 2',
        }}
        component={TopTabMenu}
      />
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </TabAndroid.Navigator>
  );
};

/* IOS MENU CONFIGURATION */
const BottomTabIOS = createBottomTabNavigator<TRootStackTabs>();

const TabsMenuIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={stylesTabs.iosSceneContainer}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#088395',
        tabBarStyle: stylesTabs.iosTabBar,
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({color}) => IconTab({color, routeName: route.name}),
      })}>
      <BottomTabIOS.Screen
        name="TabOneScreen"
        // options={{title: 'Tab 1', tabBarIcon: () => <Text>T1</Text>}}
        component={TabOneScreen}
      />
      <BottomTabIOS.Screen name="TabTwoScreen" component={TopTabMenu} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
