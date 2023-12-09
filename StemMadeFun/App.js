import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Libary  from "./Pages/Libary";
import Home  from "./Pages/Home";
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
        name = "Libary"
        component = {Libary}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
