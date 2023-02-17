import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen({ navigation }) {
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

  const handleGalleryButtonPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('No access to media library');
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
        }}
        onPress={handleCameraButtonPress}>
        <Text style={{ fontSize: 18, color: 'white' }}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
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
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IngredientsList')}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Ingredients</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
