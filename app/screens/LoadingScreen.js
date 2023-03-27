import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingscreen}>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjAxYjZlZDI4ZGU4YzFlYTQ3NDE5YWZlOWYxZTA1NTYyNDViMjI4ZiZjdD1n/294BQwZ83ocMRGBdP3/giphy.gif" alt="React Image" style={{ alignSelf: 'center' }} />
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