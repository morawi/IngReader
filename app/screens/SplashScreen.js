import * as React from "react";
import { useEffect } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
//import background from "/assets/Images/ingreader-logo-1@2x.png";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen'); // replace splash screen with Home screen after 3 seconds
    }, 3000);
  }, []);

  return (
    
    <View style={styles.splashscreen}>
     
      
      <Text style={styles.splashScreen}>IngReader</Text>
     
     <View style = {styles.background}>
    
    <Image source = {require('../assets/background.png')} />
    </View> 

    <View style = {styles.logo}>
    
    <Image 
    
    source = {require('../assets/ReaderLogo.png')} style = {styles.cup} />
    </View> 
    
    </View>

    
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    position: "absolute",
    top: 530,
    //left: 110,
    left: 90,
    fontSize: 45,
    fontFamily: FontFamily.aBeeZeeRegular,
    //color: Color.white,
    color : "#000000",
    textAlign: "left",
  },
  splashscreen: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: 537.03,
    left: 0,
    height: 307,
    width: 390,
    zIndex: 1,
  },

   logo: {
    position: "absolute",
    height: 186,
    width: 140,
    zIndex: 1,
  },
  cup: {
    width : 245,
    height : 328,
    top : 200,
    left : 73,
    
  

  }

});

export default SplashScreen;