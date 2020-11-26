import React, { useEffect } from 'react';
import {
  SafeAreaView, Image, StyleSheet, Text,
} from 'react-native';

import { LogoInalum } from '../../assets/icon';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={LogoInalum}
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 70,
  },
});
export default Splash;
