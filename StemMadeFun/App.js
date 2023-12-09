import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Library  from "./Pages/Library";
import Home  from "./Pages/Home";
import Book from "./Pages/Book";
export default function App() {
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
        name = "Book"
        component = {Book}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
