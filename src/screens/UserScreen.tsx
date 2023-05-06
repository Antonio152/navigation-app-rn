import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/types/StackNavigator.types';
import {AuthContext} from '../context/AuthContext';
// interface IRouteParamsUser {
//   id: number;
//   name: string;
// }
interface IProps extends StackScreenProps<RootStackParams, 'UserScreen'> {}

export const UserScreen = ({route, navigation}: IProps) => {
  //   const params = route.params as IRouteParamsUser;
  const params = route.params;
  const {signIn} = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    signIn(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.contentPage}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
