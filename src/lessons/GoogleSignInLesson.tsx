import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleSignInLesson = () => {
    GoogleSignin.configure();
  return (
    <View>
      <Text>GoogleSignInLesson</Text>
    </View>
  )
}

export default GoogleSignInLesson

const styles = StyleSheet.create({})