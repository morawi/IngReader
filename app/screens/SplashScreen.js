import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
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