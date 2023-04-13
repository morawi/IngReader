const Stack = createNativeStackNavigator();
//import required modules
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "../node_modules/@react-navigation/native";
import { useFonts } from "expo-font";
import IngredientsList from "./screens/IngredientsList";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import ResultsScreen from "./screens/ResultsScreen";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
//main app content
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    ABeeZee: require("./assets/fonts/ABeeZee.ttf"),
    ABeeZee_regular: require("./assets/fonts/ABeeZee_regular.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000); // Hide splash screen after 3 seconds
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    //main components rendering here
    <NavigationContainer>
      {!hideSplashScreen ? (
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="IngredientsList"
            component={IngredientsList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResultsScreen"
            component={ResultsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
