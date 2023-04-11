import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000); // Redirect to HomeScreen after 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ReaderLogo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>IngReader</Text>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage} resizeMode="cover">
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Set background color
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
  },
  text: {
    marginTop: 10, // Add margin top for text
    fontSize: 30,
    color: '#000000', // Set text color
    fontFamily: "ABeeZee",
  },
  backgroundImage: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height * 0.4, // Set background image height to 30% of window height
    width: Dimensions.get('window').width * 1.2,
  },
});

export default SplashScreen;
