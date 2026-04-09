import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNotifications } from './src/notifications/useNotifications';
import GoogleSignInLesson from './src/lessons/GoogleSignInLesson';
import CameraGallery from './src/lessons/CameraGallery';

const App = () => {
  useNotifications();
  return <CameraGallery />;
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
