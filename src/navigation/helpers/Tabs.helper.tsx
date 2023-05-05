import React from 'react';
/* Icons */
import Icon from 'react-native-vector-icons/Ionicons';
interface IIconTabProps {
  color: string;
  routeName: string;
}
export const IconTab = ({color, routeName}: IIconTabProps) => {
  let iconName: string = '';
  switch (routeName) {
    case 'TabOneScreen':
      iconName = 'bookmark-outline';
      break;

    case 'TabTwoScreen':
      iconName = 'bookmarks-outline';
      break;

    case 'StackNavigator':
      iconName = 'copy-outline';
      break;
  }
  return <Icon name={iconName} size={25} color={color} />;
};
