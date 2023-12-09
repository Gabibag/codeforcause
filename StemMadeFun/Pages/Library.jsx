import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import * as FileSystem from 'expo-file-system'; 
import * as Network from 'expo-network';
const api = 'http://10.21.18.55:2525'

export default function Library(props) {
     //make a get request to the api
    fetch(api, {
        method: 'GET',
    }).then((response) => response.text()).then((responseText) => {
        console.log("Testing");
        console.log(responseText);
    })
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

