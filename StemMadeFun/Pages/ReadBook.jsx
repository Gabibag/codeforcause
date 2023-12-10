import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, FlatList, Image, TextInput } from "react-native";
const api = 'http://127.0.0.1:2525';

export default function ReadBook(props) {
    const [text, onChangeText] = React.useState('Ask the AI a question');
    const [bottomPosition, changeBottomPosition] = useState("0%")
    let book = api + '/Books/' + props.route.params.book;
    console.log(book);
    let bottom = <View style={ { 
        bottom: bottomPosition,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'Center',
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
        position: 'fixed',
        left: 0,
    }}>
        <TextInput
            onSubmitEditing={() => {
                fetch(api + '/AI/Question', {
                    method: 'POST',
                    body: JSON.stringify({
                        question: text,
                        book: props.route.params.book,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => response.json()).then((responseText) => {
                    console.log(responseText);
                    let response = responseText.text;
                    changeBottomPosition("35%")
                    //change the  style of the bottom object
                    
                })
            }}
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
    </View>
    return <View style={styles.holder}><iframe style={styles.frame} src={book} title="Book">
    </iframe>
        {bottom}
    </View>
}
let styles = StyleSheet.create({
    input: {

        position: "relative",
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
    },
    holder: {
        width: '100%',
        height: '100%',
    },
    frame: {
        width: '100%',
        height: '100%',
    }
})