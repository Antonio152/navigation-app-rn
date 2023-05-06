import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface ITouchableIcon {
  iconName: string;
}

export const TouchableIcon = ({iconName}: ITouchableIcon) => {
  const {changeFavIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
      <Icon name={iconName} size={70} color="#900" />
    </TouchableOpacity>
  );
};
