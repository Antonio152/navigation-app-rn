import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface IProps extends StackScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: IProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.textSettings}>SettingsScreen</Text>
      <View style={{marginVertical: 20}}>
        <Button
          title="Regresar"
          onPress={() => navigation.navigate('PageOneScreen')}
        />
      </View>
    </View>
  );
};
