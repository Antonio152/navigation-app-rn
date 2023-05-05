import React from 'react';
/* Icons */
import Icon from 'react-native-vector-icons/Ionicons';
interface IIconTabProps {
  color: string;
  routeName: string;
}
export const IconTopTab = ({color, routeName}: IIconTabProps) => {
  let iconName: string = '';
  switch (routeName) {
    case 'ChatScreen':
      iconName = 'chatbubble-ellipses-outline';
      break;

    case 'ContactScreen':
      iconName = 'list-outline';
      break;

    case 'AlbumsScreen':
      iconName = 'images-outline';
      break;
  }
  return <Icon name={iconName} size={25} color={color} />;
};
