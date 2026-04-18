import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNotifications } from './src/notifications/useNotifications';
import GoogleSignInLesson from './src/screens/GoogleSignInLesson';
import CameraGallery from './src/screens/CameraGallery';
import SplashScreen from './src/screens/SplashScreen';
import GoogleMaps from './src/screens/GoogleMaps';

const App = () => {
  useNotifications();
  // return <CameraGallery />;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <GoogleMaps />;
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
