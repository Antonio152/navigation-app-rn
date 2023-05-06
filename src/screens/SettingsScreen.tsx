import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
interface IProps extends StackScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: IProps) => {
  const {authState} = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  console.log('name', authState.favoriteIcon);
  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.textSettings}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon !== '' && (
        <View style={{marginVertical: 25, alignSelf: 'center'}}>
          <Icon name={authState.favoriteIcon} size={70} color="#900" />
        </View>
      )}
      <View style={{marginVertical: 20}}>
        <Button
          title="Regresar"
          onPress={() => navigation.navigate('PageOneScreen')}
        />
      </View>
    </View>
  );
};
