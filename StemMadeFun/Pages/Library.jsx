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
import { LinearGradient } from 'expo-linear-gradient';

const api = "http://127.0.0.1:2525";
let nav = null;

function renderItem(item){
    console.log("ran" );
    console.log(item.item.title);
    return(
    <View style={styles.bookItem} onStartShouldSetResponder = { () => {
        console.log("ran view t")
        nav.navigate("ReadBook", {book: item.item.title})
    }}>
        <Image source={{uri: api + '/File/Image/' + item.item.title + '.jpg'}} style={styles.booksimage}></Image>
        <View style={styles.bookInfo}>
            <Text style={styles.title}>{item.item.title}</Text>
            <Text style={styles.author}>{item.item.author}</Text>
            <Text style={styles.pages}>{item.item.pages} Pages</Text>
            <Text style={styles.size}>{item.item.size}</Text>
        </View>
        
    </View>)
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
            <Text style={styles.mainHeading}>Library</Text>
            <View style={styles.booksholder}>
                {list}
            </View>
            <LinearGradient 
                colors={['#4C566A', '#2F3541']}
            style={styles.navBar}>
            <Image source={{uri: "https://drive.google.com/uc?export=download&id=1LkxU8GOt_hAzKyqa5qJSObhSdpe6EvBz"}} style={styles.nav1}></Image>    
            <Image source={{uri: "https://drive.google.com/uc?export=download&id=1JkkuGjJC4PuG9xLju_yJwckmzLqXEd5-"}} style={styles.nav2}></Image>    
            <Image source={{uri: "https://drive.google.com/uc?export=download&id=1OTC__Y92Rq8LGlgSFeJHDcktWT9YkiQE"}} style={styles.nav3}></Image>    
            </LinearGradient>
            
            <StatusBar style="auto"/>
        </View>

    );
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
    nav1:{
        width: "45px",
        height: "45px",
        marginTop: "6%",
        marginLeft: "5%"

    },
    
    imageCover:{
        //this should be overlayed over the image at the bottom, and should be like a black cover that can hold text
        width: "100%",

        height: "100%",
        backgroundColor: "#000000",
        opacity: 0.5,
        position: 'absolute',
        borderRadius: 14,
        
    },
    mainHeading:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        padding: '5%',
        width: '100%',
        fontFamily: 'RedHatDisplay_600SemiBold'

    },
    nav2:{
        width: "50px",
        height: "45px",
        marginTop: "6%",
        marginLeft: "28%"
    },
    nav3:{
        width: "66px",
        height: "45px",
        marginTop: "6%",
        marginLeft: "23%"
    },
    booksimage:{
        width: "30%",
        height: "90%",
        marginLeft: "3%",
        borderRadius: 14,
    },
    bookInfo: {
        padding: 10,
        flex: 1,
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    bookItem: {
        marginBottom: 20,
        flexDirection: "row",
        backgroundColor: "#4C566A",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        fontFamily: 'RedHatDisplay_600SemiBold',
        borderColor: '#FFFFFF54',
        borderRadius: '23px',
        borderWidth: '2px',
    },
    booksholder: {
        paddingBottom: '25%',
        width: '92%',
        height: '85%',
        marginLeft: '4%',
        textAlign: 'center',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    books: {
        width: '33vw',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    home: {
        width: '33vw',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    Video: {
        width: '33vw',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    navBar: {
        bottom: '0px',
        position: 'fixed',
        overflowy: 'hidden',
        height: '10%',
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        padding: '0% 5% 0% 1%',
        width: '100%',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
    author:{
        fontSize: 20,
        fontWeight: 'light',
        color: 'white',
        textAlign: 'left',
        fontFamily: 'RedHatDisplay_300Light'
    },
    container: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        fontFamily: 'RedHatDisplay_600SemiBold',
        backgroundColor: '#172030',
    },
});
