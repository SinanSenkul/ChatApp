import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const SplashScreen = () => {
  return (
    <TouchableOpacity style={styles.main}>
      <Image style={styles.image} source={require('../assets/splash.png')} />
    </TouchableOpacity>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ffffff"
  },
  image: {
    width: s(100),
    height: s(100),
  },
});
