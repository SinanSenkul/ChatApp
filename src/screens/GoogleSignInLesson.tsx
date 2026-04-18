import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';

const GoogleSignInLesson = () => {
  const [userInfo, setUserInfo] = useState(null);

  GoogleSignin.configure({
    webClientId:
      '693825751045-3cjegc2f72tc43oti64kc56la81dif1q.apps.googleusercontent.com',
  });

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUserInfo(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <TouchableOpacity style={styles.main}>
      <Text style={{ color: 'pink' }}>GoogleSignInLesson</Text>
      <Button title="Sign In with Google" onPress={googleSignIn} />
      <View style={{alignItems:"center"}}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{ uri: userInfo?.user?.photo }}
        />
        <Text>{userInfo?.user?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInLesson;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
});
