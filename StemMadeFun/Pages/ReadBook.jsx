import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, FlatList, Image } from "react-native";
const api = 'http://10.21.18.55:2525';
export default function ReadBook(props) {
    let book =  api + '/Books/' + props.route.params.book;
    console.log(book);
    return <View style = {styles.holder}><iframe style = {styles.frame} src= {book} title="Book">
    </iframe>
    </View>
}
const styles = StyleSheet.create({
    holder : {
        width: '100%',
        height: '100%',
    },
    frame : {
        width: '100%',
        height: '100%',
    }
})