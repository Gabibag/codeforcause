import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  FlatList,
  Image,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as Network from "expo-network";
const api = "http://127.0.0.1:2525";
let nav = null;

export function renderItem(item) {
  console.log("ran");
  console.log(item.item.title);
  return (
    <View
      style={styles.bookItem}
      onStartShouldSetResponder={() => {
        console.log("ran view t");
        nav.navigate("ReadBook", { book: item.item.title });
      }}
    >
      <Image
        source={{ uri: api + "/File/Image/" + item.item.title + ".jpg" }}
        style={styles.booksimage}
      ></Image>
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.item.title}</Text>
        <Text style={styles.author}>{item.item.author}</Text>
        <Text style={styles.pages}>{item.item.pages} Pages</Text>
        <Text style={styles.size}>{item.item.size}</Text>
      </View>
    </View>
  );
}
export default function Library(props) {
  nav = props.navigation;
  const [data, changedata] = useState([]);
  useEffect(() => {
    fetch(api + "/books", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseText) => {
        changedata(responseText);
      });
  }, []);

  let list = (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.container}
    />
  );
  //make a get request to the api
  /*   <Image source = ''style = {styles.home}></Image>
            <View style = {styles.books}></View>
            <Image style = {styles.Video}></Image>
            */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <View style={styles.booksholder}>{list}</View>
      <View style={styles.bottom}></View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  booksimage: {
    width: 100,
    height: 100,
  },
  bookInfo: {
    padding: 10,
    flex: 1,
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  bookItem: {
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#4C566A",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    fontFamily: "RedHatDisplay_600SemiBold",
    borderColor: "#FFFFFF54",
    borderRadius: "23px",
    borderWidth: "2px",
  },
  booksholder: {
    paddingBottom: "25%",
    width: "92%",
    height: "85%",
    marginLeft: "4%",
    textAlign: "center",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  books: {
    width: "33vw",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  home: {
    width: "33vw",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  Video: {
    width: "33vw",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  bottom: {
    bottom: "0px",
    position: "fixed",
    overflowy: "hidden",
    height: "15%",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#4C566A",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    padding: "5%",
    width: "100%",
    fontFamily: "RedHatDisplay_600SemiBold",
  },
  container: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    fontFamily: "RedHatDisplay_600SemiBold",
    backgroundColor: "#172030",
  },
});
