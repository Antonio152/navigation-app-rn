import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Image, useWindowDimensions, View} from 'react-native';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {styles, stylesMC} from '../theme/appTheme';
import {Tabs} from './Tabs';
import {ButtonLateralMenu} from '../components/ButtonLateralMenu';
import {TMenuLateralTwo} from './types/MenuLateralTwo.types';

const Drawer = createDrawerNavigator<TMenuLateralTwo>();

export const MenuLateralTwo = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      screenOptions={() => ({
        // drawerPosition: 'right',
        // drawerType: 'permanent',
        headerStyle: stylesMC.backColorM,
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
        headerShown: false, // This hide and show the menu button in header
        drawerType: width >= 768 ? 'permanent' : 'front',
      })}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar section */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
          }}
          style={styles.avatarNavigation}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <ButtonLateralMenu
          TextMenu="Navegación Stack"
          IconName="copy-outline"
          onPress={() => navigation.navigate('StackNavigator')}
        />
        <ButtonLateralMenu
          TextMenu="Ajustes"
          IconName="construct-outline"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
        <ButtonLateralMenu
          TextMenu="Tabs"
          IconName="albums-outline"
          onPress={() => navigation.navigate('Tabs')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
