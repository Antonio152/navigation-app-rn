import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 18}}>ContactScreen</Text>
      {!authState.isLoggedIn && (
        <View style={{marginVertical: 15}}>
          <Button title="Login" onPress={() => signIn('Antonio Admin')} />
        </View>
      )}
    </View>
  );
};
