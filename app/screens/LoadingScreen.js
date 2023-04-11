import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';



const LoadingScreen = (props) => {

  console.log("loading screen", props.route.params.image);

  return (
<View style={styles.container}>
<Image source={require('../assets/loading.gif')} style={styles.gif} resizeMode="contain" />
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: Dimensions.get('window').width * 0.9, // Set width to 90% of window width
    height: Dimensions.get('window').width * 0.9, // Set height to 90% of window width
  },
});

export default LoadingScreen;
