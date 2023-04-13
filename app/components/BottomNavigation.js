import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar = ({}) => {
    const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
            onPress={() => navigateToScreen('HomeScreen')}>
            <Image source={require('../assets/camera.png')} 
            style={{width: 30, height: 30}}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToScreen('IngredientsList')}>
            <Image source={require('../assets/magnifyingGlass.png')} 
            style={{width: 30, height: 30}}/>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigationBar;