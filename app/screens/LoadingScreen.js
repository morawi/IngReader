import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingscreen}>
      <Text style={styles.loadingScreen}>Loading Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    position: "absolute",
    top: 370,
    left: 65,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: "#000",
    textAlign: "left",
  },
  loadingscreen: {
    backgroundColor: "#c6ffc5",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoadingScreen;