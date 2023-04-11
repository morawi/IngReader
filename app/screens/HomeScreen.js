import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform, StyleSheet, Image, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import BottomNavigationBar from '../components/BottomNavigation';

export default function CameraScreen({ navigation }) {
  const handleGalleryButtonPress = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    }).catch((error) => {});;


    if (result.canceled) {
      return;
    }

    processImage(result.assets[0].uri);
  };

  const handleCameraButtonPress = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }


    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    }).catch((error) => {
      console.log(error);
    })

    if (result.canceled) {
      return;
    }

    processImage(result.assets[0].uri);
  };

  const processImage = (image) => {
    if (image) {
      navigation.navigate("LoadingScreen", { image: image });
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 100, // Add padding to avoid overlapping with the navigation bar
    },
    text: {
      fontSize: 30,
      color: 'black',
      marginBottom: 20, // Add margin bottom for spacing
      fontFamily: "ABeeZee",
    },
    rectangle: {
      width: 100,
      height: 10,
      backgroundColor: 'white',
      marginBottom: 20, // Add margin bottom for spacing
    },
    buttonCam: {
      width: 250,
      height: 70,
      borderRadius: 10,
      backgroundColor: '#6ED23A',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      margin: 10,
    },
    buttonGal: {
      width: 250,
      height: 70,
      borderRadius: 10,
      backgroundColor: '#A7A7A7',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      margin: 10,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
      fontFamily: "Lato-Regular",
    },
  });
  

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/ingreader_theme.png')} // Replace with your image source
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>IngReader</Text>
          <Image source={require('../assets/scan_ingredients_component.png')} />
          <TouchableOpacity style={styles.buttonCam} onPress={handleCameraButtonPress}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGal} onPress={handleGalleryButtonPress}>
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
        <BottomNavigationBar />
      </ImageBackground>
    </View>
  );
}

