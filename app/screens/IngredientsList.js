import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SingleIngredient from "./SingleIngredient";
import { useNavigation } from '@react-navigation/native';

const ingredientsListData = require('../static/ingredients.json');

const PAGE_SIZE = 20;

const IngredientsList = () => {

  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  };

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

  const handleClearSearch = () => {
    setSearchText("");
    setCurrentPage(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingredientTitleWrapper}>
        <TouchableOpacity
          onPress={() => navigateToScreen('HomeScreen')}>
          <Image source={require('../assets/backarrow.png')} 
          style={{width: 30, height: 25}}/>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>All Ingredients</Text>
        <View style={styles.paginationContainer}>
          <TouchableOpacity onPress={handlePreviousPage} style={currentPage > 1 ? styles.paginationButton : styles.disabledPaginationButton}>
            <Text style={currentPage > 1 ? styles.pageButtonText : styles.disabledPageButtonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.paginationText}>{currentPage} / {totalPages}</Text>
          <TouchableOpacity onPress={handleNextPage} style={currentPage < totalPages ? styles.paginationButton : styles.disabledPaginationButton}>
            <Text style={currentPage < totalPages ? styles.pageButtonText : styles.disabledPageButtonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.ingredientWrapper}>
          <View style={styles.items}>
            {ingredientsArray.map((item, index) => (
              <View key={index}>
                <SingleIngredient item={item}></SingleIngredient>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ingredients"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
        {searchText ? (
          <TouchableOpacity onPress={handleClearSearch} style={styles.clearSearchInput}>
            <Feather name="x" size={24} color="black" style={{ marginLeft: 1 }} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  ingredientTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  ingredientWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    // marginVertical: 30,
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
    backgroundColor: 'white',
    borderRadius: 25,
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  clearSearchInput: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 40,
    width: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 25,
    width: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  disabledPaginationButton: {
    backgroundColor: '#ccc',
    borderRadius: 25,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  });

export default IngredientsList;
