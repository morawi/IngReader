import * as React from "react";
import { useEffect } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen'); // replace splash screen with Home screen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.splashscreen}>
      <Text style={styles.splashScreen}>Splash Screen</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    position: "absolute",
    top: 370,
    left: 75,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.white,
    textAlign: "left",
  },
  splashscreen: {
    backgroundColor: "#c764cf",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreen;