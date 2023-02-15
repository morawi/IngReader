import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ResultsScreen = () => {
  return (
    <View style={styles.resultsscreen}>
      <Text style={styles.resultsScreen}>Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsScreen: {
    position: "absolute",
    top: 370,
    left: 75,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.white,
    textAlign: "left",
  },
  resultsscreen: {
    backgroundColor: "#cfc564",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ResultsScreen;