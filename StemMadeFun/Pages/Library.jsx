import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import * as FileSystem from 'expo-file-system'; 



export default function Library(props) {
    return (
        <View style={styles.container}>
        <Text>Libary</Text>
        <Button title = "Home" onPress={ () =>{props.navigation.navigate("Home")}}></Button>
        <Button title = "Book" onPress={ () =>{props.navigation.navigate("Book")}}></Button>
        <StatusBar style="auto"/>
        </View>

        
    );}
const styles = StyleSheet.create({
});

