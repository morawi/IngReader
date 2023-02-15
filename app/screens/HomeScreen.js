import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homescreen}>
      <Text style={styles.homeScreen}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    position: "absolute",
    top: 370,
    left: 81,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.white,
    textAlign: "left",
  },
  homescreen: {
    backgroundColor: "#818fdb",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HomeScreen;