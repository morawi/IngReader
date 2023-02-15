import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IngredientsList = () => {
  return (
    <View style={styles.ingredientslist}>
      <Text style={styles.ingredientsList}>Ingredients List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsList: {
    position: "absolute",
    top: 370,
    left: 65,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.white,
    textAlign: "left",
  },
  ingredientslist: {
    backgroundColor: "#64cfc9",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default IngredientsList;