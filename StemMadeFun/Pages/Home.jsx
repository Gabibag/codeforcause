import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

const bookCoverImage = require("../FileServer/Data/Image/One.jpg"); // Update the path if necessary
const websiteImage = require("../FileServer/Data/Image/website.png");

const Home = (props) => {
  // Hardcoded last watched video and read book data
  const lastWatchedVideo = {
    src: "https://www.youtube.com/embed/TcrAJNnWQvc",
    title: "SMF Science and Beyond Unit 2 Lesson 6",
    description: "A deep dive into the intricacies of penny batteries.",
    thumbnail: "path-to-thumbnail.jpg", // You should replace this path with the actual path to your video thumbnail
  };

  const lastReadBook = {
    title: "The Practice of Statistics",
    author: "Daren S. Starnes",
    pages: "858",
    size: "45MB",
    source: "../FileServer/Data/Image/One.jpg", // This path should be the actual path to your book cover image
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
        <Text style={styles.header}>Home</Text>

        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.stemmadefun.com/subjects")
            }
            style={styles.box}
          >
            <Text style={styles.subHeader}>Visit Our Website!</Text>
            <Image source={{ uri: websiteImage }} style={styles.website} />
            <Text style={styles.title}>{lastReadBook.title}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Library"
            color="#6c757d"
            onPress={() => props.navigation.navigate("Library")}
          />
          <Button
            title="Watch Videos"
            color="#6c757d"
            onPress={() => props.navigation.navigate("Video")}
          />
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Library")}
            style={styles.box}
          >
            <Text style={styles.subHeader}>Last Read Book</Text>
            <Image source={{ uri: bookCoverImage }} style={styles.bookCover} />
            <Text style={styles.title}>{lastReadBook.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Video")}
            style={styles.box}
          >
            <Text style={styles.subHeader}>Last Watched Video</Text>
            <iframe src={lastWatchedVideo.src}></iframe>
            <Text style={styles.title}>{lastWatchedVideo.title}</Text>
            {/* This iframe would not render in React Native. Use a thumbnail or a custom player component. */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172030",
  },
  website: {
    width: 300,
    height: 150,
  },
  scroller: {
    paddingBottom: "25%",
    width: "92%",
    height: "85%",
    marginLeft: "4%",
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 20,
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: "rgba(108, 117, 125, 0.7)", // Translucent gray box
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
    marginTop: 20,
  },
  bookCover: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  videoThumbnail: {
    width: 300,
    height: 169, // 16:9 aspect ratio
    borderRadius: 10,
  },
});

export default Home;
