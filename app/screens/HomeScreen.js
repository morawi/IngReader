import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
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
        }}
        onPress={handleCameraButtonPress}>
        <Text style={{ fontSize: 18, color: 'white' }}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}
