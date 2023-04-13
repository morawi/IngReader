import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';


const postData = async(str) => {
  try {
    console.log('sent');
    let res = await fetch('https://europe-west1-ingreader-9843a.cloudfunctions.net/procesImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image:str,
      }),
    });
    console.log('got response')
    res = await res.json();
    
    return res.data
  } catch (e) {
    console.log(res)
    console.error(e);
  }
}


const LoadingScreen = ({ navigation }) => {
  

  const route = useRoute();
  const base64image = FileSystem.readAsStringAsync(route.params?.image, {encoding: 'base64'}).then(
    r => {
      console.log('sending')
      postData(r).then(a=>{
        navigation.navigate("ResultsScreen", { result: a });
      })
    }
  )

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
