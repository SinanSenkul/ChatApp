import { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const requestUserPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('notification permission granted');
  } else {
    console.log('notification permission denied');
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
  } catch (error) {
    console.error('failed to get FCM error: ', error);
  }
};

export const useNotifications = () => {
  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);
};
