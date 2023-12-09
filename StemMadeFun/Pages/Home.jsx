import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Home(props) {
    return (
        <View style={styles.container}>
        <Text>Home</Text>
        <StatusBar style="auto"/>
        <Button title = "Libary" onPress={() => {props.navigation.navigate("Libary")}}>Libary</Button>
        </View>
    );}

const styles = StyleSheet.create({
});