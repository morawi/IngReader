import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const handleCameraButtonPress = async () => {
    if (hasCameraPermission === null) {
      return;
    }
    if (hasCameraPermission === false) {
      alert('No access to camera');
      return;
    }
    await ImagePicker.launchCameraAsync();
  };

  const handleGalleryButtonPress = async () => {
    if (hasGalleryPermission === null) {
      return;
    }
    if (hasGalleryPermission === false) {
      alert('No access to gallery');
      return;
    }
    await ImagePicker.launchImageLibraryAsync();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 10,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
        onPress={handleCameraButtonPress}>
        <Text style={{ fontSize: 18, color: 'white' }}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 10,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleGalleryButtonPress}>
        <Text style={{ fontSize: 18, color: 'white' }}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
}
