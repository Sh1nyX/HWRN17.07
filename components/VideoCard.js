import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function VideoCard({ video, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{ uri: video.preview }} style={styles.image} />

      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.date}>{video.date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});