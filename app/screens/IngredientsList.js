import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";


const IngredientsList = () => {
  return (
    <View style={styles.ingredientsListContainer}>
      <Text style={styles.ingredientsListTitle}>Ingredients List</Text>
      {ingredients.map((item, index) => (
        <View style={styles.ingredientsListItem} key={index}>
          <Text style={styles.ingredientsListItemName}>{item.name.en}</Text>
        </View>
      ))}
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
    color: Color.black,
    textAlign: "left",
  },
  ingredientslist: {
    backgroundColor: "#64cfc9",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },

  ingredientsListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  ingredientsListItemName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
  },
});

export default IngredientsList;

const ingredients = [
  { name: { en: 'Eggs' }, quantity: '2' },
  { name: { en: 'Flour' }, quantity: '1 cup' },
  { name: { en: 'Sugar' }, quantity: '1/2 cup' },
  { name: { en: 'Butter' }, quantity: '1/4 cup' },
];
