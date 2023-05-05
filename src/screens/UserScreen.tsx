import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/types/StackNavigator.types';
// interface IRouteParamsUser {
//   id: number;
//   name: string;
// }
interface IProps extends StackScreenProps<RootStackParams, 'UserScreen'> {}

export const UserScreen = ({route, navigation}: IProps) => {
  //   const params = route.params as IRouteParamsUser;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.contentPage}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
