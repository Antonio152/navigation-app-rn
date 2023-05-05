import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface IProps extends StackScreenProps<any, any> {}

export const PageThreeScreen = ({navigation}: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>PageThreeScreen</Text>
      <View style={styles.mButtons}>
        <Button title="Regresa" onPress={() => navigation.pop()} />
      </View>
      <View style={styles.mButtons}>
        <Button title="Home page" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
