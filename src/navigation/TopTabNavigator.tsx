import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
/* JSX */
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {stylesMC} from '../theme/appTheme';
import {IconTopTab} from './helpers/TopTabNavigator.helper';

const Tab = createMaterialTopTabNavigator();

export const TopTabMenu = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop,
      }}
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: '#19A7CE',
        tabBarStyle: stylesMC.noShadowM,
        tabBarShowIcon: true,
        tabBarIcon: ({color}) => IconTopTab({color, routeName: route.name}),
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactScreen"
        options={{title: 'Contact'}}
        component={ContactScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Gallery'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
