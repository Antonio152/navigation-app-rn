import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 18}}>AlbumsScreen</Text>
      {authState.isLoggedIn && (
        <View style={{marginVertical: 15}}>
          <Button title="Logout" onPress={logout} />
        </View>
      )}
    </View>
  );
};
