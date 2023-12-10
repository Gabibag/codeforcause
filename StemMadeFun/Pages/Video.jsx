import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

// Updated video data with titles and descriptions
const videoData = [
  {
    src: "https://www.youtube.com/embed/TcrAJNnWQvc",
    title: "SMF Science and Beyond Unit 2 Lesson 6",
    description: "A deep dive into the intricacies of penny batteries.",
  },
  {
    src: "https://www.youtube.com/embed/5IxkjfIgqAU",
    title: "SMF Science and Beyond Unit 2 Lesson 5",
    description: "Exploring the key concepts of electromagnetics.",
  },
  {
    src: "https://www.youtube.com/embed/8B6_uY21MSQ",
    title: "SMF Science and Beyond Unit 2 Lesson 3",
    description: "A look into the basics of circuitry",
  },
  {
    src: "https://www.youtube.com/embed/6ToBe6uGV4g",
    title: " SMF Science & Beyond Unit 1 Lesson 2",
    description: "Explaining the physics behind friction and air",
  },
];

const Video = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {videoData.map((video, index) => (
          <View key={index} style={styles.videoBlock}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.description}>{video.description}</Text>
            <iframe
              style={styles.video}
              src={video.src}
              title={video.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#262626", // Dark background for the whole scroll view
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 20,
    alignSelf: "center",
  },
  videoBlock: {
    backgroundColor: "#333333", // Dark theme for each video block
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center", // Center align items within the card
  },
  videoContainer: {
    width: "100%",
    marginBottom: 10,
  },
  video: {
    aspectRatio: 16 / 9,
    width: "100%",
    borderWidth: 0, // Removes border on iframes
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#CCC",
    marginBottom: 15,
  },
});
export default Video;
