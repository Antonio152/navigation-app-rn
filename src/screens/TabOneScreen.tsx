import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export const TabOneScreen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={{...styles.titlePage, color: '#000'}}>Iconos</Text>
      <Text>
        <Icon name="checkmark-done-outline" size={70} color="#900" />
        <Icon name="contrast-outline" size={70} color="#900" />
        <Icon name="bonfire-outline" size={70} color="#900" />
        <Icon name="battery-charging-outline" size={70} color="#900" />
      </Text>
    </View>
  );
};
