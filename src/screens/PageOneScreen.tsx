import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

// interface IProps extends StackScreenProps<any, any> {}
interface IProps extends DrawerScreenProps<any, any> {}

export const PageOneScreen = ({navigation}: IProps) => {
  // * THIS USEFFECT RETURN A MENU NAVIGATION ADITIONAL
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.buttonBurguer}>
          <Icon name="menu-outline" size={25} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>Página uno de contenido</Text>
      <View style={styles.mButtons}>
        <Button
          title="Pagina 2"
          onPress={() => navigation.navigate('PageTwoScreen')}
        />
      </View>
      <Text style={styles.titlePage}> === Navegar con argumentos ===</Text>
      <View>
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('UserScreen', {id: 1, name: 'Antonio'})
          }>
          <View style={styles.btnUserInfo}>
            <Icon name="person-circle-outline" size={25} color="#fff" />
            <Text style={styles.textContainerNuser}>Antonio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#05BFDB'}}
          onPress={() =>
            navigation.navigate('UserScreen', {id: 2, name: 'Fernanda'})
          }>
          <View style={styles.btnUserInfo}>
            <Icon name="woman-outline" size={25} color="#fff" />
            <Text style={styles.textContainerNuser}>Fernanda</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
