import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform, StyleSheet, Image } from 'react-native';



const LoadingScreen = () => {
  return (
  
  
  
    <View style={styles.loadingscreen}>
       <Image source = {require('../assets/loadingScreen.gif')} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    position: "absolute",
    top: 370,
    left: 65,
    textAlign: "left",
    color: "#c6ffc5",
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
