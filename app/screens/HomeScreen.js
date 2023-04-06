import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontSize, FontFamily, Color } from "../GlobalStyles";

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

  const styles = StyleSheet.create({

    RectangleShapeView: {

      position: "absolute",
      width: 390,
      height: 70,
      top: 275,
      backgroundColor: 'white',
      left: -195,
      zIndex: 1,
    },



    background: {
      position: "absolute",
      top: 0,
      height: 600,
      left: 0,
      width: 390,
      zIndex: 1,
    },

    camera: {

      position: "absolute",
      top: 785.03,
      left: 100,
      height: 20,
      width: 20,
      zIndex: 1,

    },

    text: {
      position: "absolute",
      top: 50,
      left: 60
      ,
      height: 100,
      width: 200,
      fontSize: 30,
      fontFamily: FontFamily.aBeeZeeRegular,
      color: "#000000",
      textAlign: "left",
      zIndex: 2,
    },

    magnifyingGlass: {
      position: "absolute",
      top: 785.03,
      left: 250,
      height: 20,
      width: 20,
      zIndex: 1,

    },

    logo: {
      position: "absolute",
      top: -95,
      left: 164,
      height: 20,
      width: 20,
      zIndex: 1,
    },

    barcode: {
      position: "absolute",
      top: 100,
      left: 40,
      height: 230,
      width: 230,
      zIndex: 5,

    },

    cup: {

      width: 30,
      height: 30,
      top: 195,
      left: 100,

    },

    barcodeBack: {
      position: "absolute",
      top: 175,
      left: 52,
      height: 330,
      width: 300,
      zIndex: 4,
      backgroundColor: 'rgba(244, 243, 243, 0.7)',
      borderRadius: 10

    },

    parentTagStyle: {
      left: 0,
      bottom: 0,
      right: 0,
      flex: 1


    },
    footerTagStyle: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,

    }


  });

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
      <View style={styles.background}>
        <Image source={require('../assets/ingreader_theme.png')} style={styles.background} />
      </View>
      <TouchableOpacity
        style={{
          width: 250,
          height: 70,
          borderRadius: 10,
          top: 175,
          backgroundColor: '#6ED23A',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
        onPress={handleCameraButtonPress}>
        <Text style={{ fontSize: 24, color: 'white' }}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 10, //10
          width: 250,
          height: 70,
          borderRadius: 10,
          top: 200,
          backgroundColor: '#A7A7A7',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleGalleryButtonPress}>
        <Text style={{ fontSize: 24, color: 'white' }}>Upload From Gallery</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.RectangleShapeView} />
      </View>

      <View style={styles.barcodeBack}>

      </View>

      <View style={styles.barcode}>
        <Image source={require('../assets/barcode.png')} style={styles.barcode} />
      </View>

      <View style={styles.text}>
        <Text style={styles.text}>IngReader</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 40,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 80,
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require('../assets/camera.png')} 
            style={{width: 30, height: 30}}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('IngredientsList')}>
            <Image source={require('../assets/magnifyingGlass.png')} 
            style={{width: 30, height: 30}}/>
          </TouchableOpacity>
      </View>
    </View>
















  );
}

