import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const TabTwoScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <Text>TabTwoScreen</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
};
