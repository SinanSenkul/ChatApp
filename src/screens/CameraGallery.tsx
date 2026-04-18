import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const CameraGallery = () => {
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const openGallery = async () => {
    console.log('openGallery function has been called');
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo', // 'photo' or 'video' or 'any'
        width: 2000, // optional resize
        height: 2000,
        cropping: false, // set true if you want cropping UI
        includeBase64: false,
      });

      setSelectedImageUri(image.path);
      console.log('Selected image:', {
        path: image.path,
        mime: image.mime,
        size: image.size,
        width: image.width,
        height: image.height,
      });

      // Use image.path as the URI to display or upload
    } catch (e: any) {
      if (e.code === 'E_PICKER_CANCELLED') {
        console.log('User cancelled');
        return;
      }
      console.error('openGallery error:', e);
    }
  };

  const openCamera = async () => {
    console.log('openCamera function has been called');
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo', // 'photo' or 'video' or 'any'
        width: 2000, // optional resize
        height: 2000,
        cropping: false, // set true if you want cropping UI
        includeBase64: false,
      });

      setSelectedImageUri(image.path);

      // console.log('Selected image:', {
      //   path: image.path,
      //   mime: image.mime,
      //   size: image.size,
      //   width: image.width,
      //   height: image.height,
      // });

      // Use image.path as the URI to display or upload
    } catch (e: any) {
      if (e.code === 'E_PICKER_CANCELLED') {
        console.log('User cancelled');
        return;
      }
      console.error('openCamera error:', e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }} onPress={openGallery}>
        Open Gallery!
      </Text>
      <Text style={{ fontSize: 30 }} onPress={openCamera}>
        Open Camera!
      </Text>
      <Image
        style={{ height: 100, width: 100, borderRadius: 5 }}
        source={{ uri: selectedImageUri }}
      />
    </View>
  );
};

export default CameraGallery;

const styles = StyleSheet.create({});
