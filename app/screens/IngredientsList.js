import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import SingleIngredient from "./SingleIngredient";

const ingredientsListData = require('../static/ingredients.json');

const PAGE_SIZE = 100;

const IngredientsList = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Object.values(ingredientsListData).filter(item => item.name.en).length / PAGE_SIZE);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const ingredientsArray = Object.values(ingredientsListData).filter(item => item.name.en).slice(start, end);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ingredientWrapper}>
            <Text style={styles.sectionTitle}>All Ingredients</Text>
            <View style={styles.items}>
            {ingredientsArray.map((item, index) => (
              <View key={index}>
                <SingleIngredient item={item}></SingleIngredient>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <KeyboardAvoidingView behavior={Platform.os === 'ios' ? "padding" : "height"}  style={styles.footerContent}>
          <View>
            {currentPage > 1 && 
              <TouchableOpacity onPress={handlePreviousPage}>
                <Text style={styles.button}>{"<"}</Text>
              </TouchableOpacity>
            }
          </View>
          <View>
            <Text>{currentPage} / {totalPages}</Text>
          </View>
          <View>
            {currentPage < totalPages && 
              <TouchableOpacity onPress={handleNextPage}>
                <Text style={styles.button}>{">"}</Text>
              </TouchableOpacity>
            }
          </View>
        </KeyboardAvoidingView>
      </View>


    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  ingredientWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginVertical: 30,
  },
  footerContainer:{
    position: "absolute",
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  footerContent:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    position: "absolute",
    paddingBottom: 20,
    // paddingTop: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  button: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold'
  }
});

export default IngredientsList;
