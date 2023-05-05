import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/* Icons */
import Icon from 'react-native-vector-icons/Ionicons';
import {stylesMC} from '../theme/appTheme';
import {IButtonLateralMenuProps} from './types/ButtonLaterlMenu.types';

/* Custom item for menu navigation */
export const ButtonLateralMenu = ({
  IconName,
  TextMenu,
  onPress,
}: IButtonLateralMenuProps) => {
  return (
    <TouchableOpacity style={stylesMC.menuLMV} onPress={onPress}>
      <View style={stylesMC.buttonBLM}>
        <Icon name={IconName} size={22} color="#000" />
        <Text style={stylesMC.textBLM}>{TextMenu}</Text>
      </View>
    </TouchableOpacity>
  );
};
