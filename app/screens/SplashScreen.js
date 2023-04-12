import React from 'react';
import { useEffect } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { FontSize, FontFamily, Color } from '../GlobalStyles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen'); // replace splash screen with Home screen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.splashscreen}>
      <Text style={styles.splashScreen}>IngReader</Text>
      <View style={styles.background}>
        <Image source={require('../assets/background.png')} />
      </View>
      <View style={styles.logo}>
        <Image source={require('../assets/ReaderLogo.png')} style={styles.cup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.6,
    left: Dimensions.get('window').width * 0.33,
    fontSize: 30,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
    textAlign: 'left',
  },
  splashscreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: '150%',
    height: Dimensions.get('window').height,
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.67,
    left: 0,
    height: Dimensions.get('window').height * 0.38,
    width: Dimensions.get('window').width,
    zIndex: 1,
  },
  logo: {
    position: 'absolute',
    top : Dimensions.get('window').height * 0.5 - (Dimensions.get('window').width * 0.35 * (328/245))/2,
    left : Dimensions.get('window').width * 0.5 - (Dimensions.get('window').width * 0.35)/2,
    height : Dimensions.get('window').width * 0.35 * (328/245),
    width : Dimensions.get('window').width * 0.35,
    zIndex : 1
  },
  cup: {
    width : '100%',
    height : '100%',
    resizeMode : 'contain',
  },
});

export default SplashScreen;
