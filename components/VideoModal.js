import { Modal, View, StyleSheet, Dimensions, Pressable, Text } from "react-native";
import { Video } from "expo-av";
import { useEffect, useState } from "react";

export default function VideoModal({ video, onClose }) {
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const update = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width > height ? "landscape" : "portrait");
    };

    const subscription = Dimensions.addEventListener("change", update);

    update();

    return () => subscription?.remove();
  }, []);

  if (!video) return null;

  return (
    <Modal animationType="slide" transparent={false} onRequestClose={onClose}>
      <View style={styles.container}>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Закрыть</Text>
        </Pressable>

        <Video
          source={video.file}
          style={orientation === "landscape" ? styles.fullscreen : styles.video}
          useNativeControls
          resizeMode="contain"
          shouldPlay
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  video: {
    width: "100%",
    height: 300,
  },
  fullscreen: {
    width: "100%",
    height: "100%",
  },
});