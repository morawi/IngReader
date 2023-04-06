const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "../node_modules/@react-navigation/native";
import { useFonts } from "expo-font";
import IngredientsList from "./screens/IngredientsList";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    ABeeZee: require("./assets/fonts/ABeeZee.ttf"),
    ABeeZee_regular: require("./assets/fonts/ABeeZee_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ title: 'HomeScreen',  headerShown: false  }} />
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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
