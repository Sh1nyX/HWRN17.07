import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import VideoCard from "./components/VideoCard";
import VideoModal from "./components/VideoModal";

const videos = [
  {
    id: "1",
    title: "Місто",
    date: "2026-07-25",
    preview: "https://cs14.pikabu.ru/post_img/big/2023/09/20/9/1695221076242876162.jpg",
    file: require("./assets/sample-5s.mp4"),
  },
  {
    id: "2",
    title: "Собака",
    date: "2026-07-26",
    preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdiTwr4pbV_-kArpE9kfGNO6rM25C8TiXTjhRfgT65qZ5YzEatSETrh0&s=10",
    file: require("./assets/dog.mp4"),
  },
  {
    id: "3",
    title: "Вода",
    date: "2026-07-27",
    preview: "https://avatars.mds.yandex.net/get-altay/8128315/2a0000019195a00559beab9123612e5915a3/L_height",
    file: require("./assets/water.mp4"),
  }
];

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard video={item} onPress={() => setSelectedVideo(item)} />
        )}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
});
