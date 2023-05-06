import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const TabOneScreen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={{...styles.titlePage, color: '#000'}}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="checkmark-done-outline" />
        <TouchableIcon iconName="contrast-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="battery-charging-outline" />
      </Text>
    </View>
  );
};
