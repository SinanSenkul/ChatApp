import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNotifications } from './src/notifications/useNotifications';
import GoogleSignInLesson from './src/lessons/GoogleSignInLesson';

const App = () => {
  useNotifications();
  return <GoogleSignInLesson />;
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
