import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, Platform, StyleSheet, Image } from 'react-native';



const LoadingScreen = (props) => {

  console.log("loading screen", props.route.params.image);

  return (
  
  
  <View style={styles.back}>

    <View style={styles.loadingscreen}>
       <Image source = {require('../assets/loadingScreen.gif')} /> 
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 1200,
    width: 800,
    backgroundColor: "#c6ffc5",
  },

  loadingscreen: {
    position: 'absolute',
    top: 150,
    left: -50,
    backgroundColor: "#c6ffc5",
    flex: 2,
    width: 500,
    height: 500,
    overflow: "hidden",
  },
});

export default LoadingScreen;
