import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import SingleIngredient from "./SingleIngredient";

const ingredientsListData = require('../static/ingredients.json');

const PAGE_SIZE = 20;

const IngredientsList = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const allIngredients = Object.values(ingredientsListData).filter(item => item.name.en);

  const filteredIngredients = allIngredients.filter(item => item.name.en.toLowerCase().includes(searchText.toLowerCase()));

  const totalPages = Math.ceil(filteredIngredients.length / PAGE_SIZE);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const ingredientsArray = filteredIngredients.slice(start, end);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    setCurrentPage(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ingredients"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
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
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '50%'}}>
            <TouchableOpacity onPress={handlePreviousPage}>
              <Text style={currentPage > 1 ? styles.pageButton : styles.disabledPageButton}>{'<'}</Text>
            </TouchableOpacity>
            <Text>{currentPage} / {totalPages}</Text>
            <TouchableOpacity onPress={handleNextPage}>
              <Text style={currentPage < totalPages ? styles.pageButton : styles.disabledPageButton}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

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
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignContent: 'center',
  },
  footerContent:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    position: "absolute",
    paddingBottom: 20,
    justifyContent: 'center',

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  pageButton: {
    fontSize: 18,
    color: 'blue',
  },
  disabledPageButton: {
    fontSize: 18,
    color: 'gray',
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default IngredientsList;
