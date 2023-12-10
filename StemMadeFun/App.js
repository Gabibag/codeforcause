import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { } from "@expo-google-fonts/red-hat-display";
import Library from "./Pages/Library";
import Home from "./Pages/Home";
import ReadBook from "./Pages/ReadBook";
import { LinearGradient } from 'expo-linear-gradient';

import {
  useFonts,
  RedHatDisplay_300Light,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
  RedHatDisplay_300Light_Italic,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_600SemiBold_Italic,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_800ExtraBold_Italic,
  RedHatDisplay_900Black_Italic,
} from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';


import Video from "./Pages/Video";
export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_300Light,
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold,
    RedHatDisplay_700Bold,
    RedHatDisplay_800ExtraBold,
  });
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions = {{headerShown:false}}>
        <Stack.Screen 
        name = "Home"
        component = {Home}
        />
        <Stack.Screen
        name = "Library"
        component = {Library}
        />
         <Stack.Screen
         name = "ReadBook"
          component = {ReadBook}
        />
                <Stack.Screen name="Video" component={Video} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
