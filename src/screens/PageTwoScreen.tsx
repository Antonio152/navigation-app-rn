import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CommonActions, useNavigation} from '@react-navigation/core';

export const PageTwoScreen = () => {
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      title: 'Página dos actualizada',
      headerBackTitle: 'Atras',
    });
  }, [nav]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>Página dos de contenido</Text>
      <Button
        title="Pagina 3"
        onPress={() => nav.dispatch(CommonActions.navigate('PageThreeScreen'))}
      />
    </View>
  );
};
