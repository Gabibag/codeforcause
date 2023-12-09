import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button, FlatList } from "react-native";
import * as FileSystem from 'expo-file-system'; 
import * as Network from 'expo-network';
const api = 'http://10.21.18.55:2525';
const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.pages}>{item.pages} Pages</Text>
        <Text style={styles.size}>{item.size}</Text>
      </View>
    </View>
  );
export default function Library(props) {
     //make a get request to the api
    fetch(api + '/books', {
        method: 'GET',
    }).then((response) => response.json()).then((responseText) => {
        console.log("Testing");
        for(let v of responseText){
        }
    })
    /*   <Image source = ''style = {styles.home}></Image>
            <View style = {styles.books}></View>
            <Image style = {styles.Video}></Image>
            */
    return (
        <View style={styles.container}>
        <Text style ={styles.title}>Library</Text>
        <View style = {styles.booksholder}>
        <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        />
        </View>
         <View style = {styles.bottom}>
        </View>
        <StatusBar style="auto"/>
        </View>
        
    );}
const styles = StyleSheet.create({
    bookItem: {
        marginBottom: 20,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        overflow: "hidden",
      },
      coverImage: {
        width: 100,
        height: 150,
      },
      bookInfo: {
        padding: 10,
        justifyContent: "center",
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
      },
      author: {
        fontSize: 14,
        color: "grey",
      },
      pages: {
        fontSize: 14,
      },
      size: {
        fontSize: 14,
      },    
    booksholder:{
        width: '100%',
    },
    books: {
        width: '33vw',
    },
    home:{
        width: '33vw',
    },
    Video:{
        width: '33vw',

    },
    bottom: {
        bottom: '0px',
        position: 'absolute', 
        overflowy: 'hidden',
        height: '15%',
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#4C566A',
      },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        padding: '5%',
        width: '100%',
    },
    container: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: '#172030',
      },
});

