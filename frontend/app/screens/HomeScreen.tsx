import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

function getCurrentTimeString(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function HomeScreen() {
  const [time, setTime] = useState<string>(getCurrentTimeString());
  const [date, setDate] = useState<string>(getCurrentDateString());
  
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCurrentTimeString());
      setDate(getCurrentDateString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const REPO_URL = "https://github.com/europanite/clock";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
        <Text style={styles.title}>Clock</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617", // very dark blue
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.4)",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#94A3B8",
    marginBottom: 8,
    textDecorationLine: "underline",
  },
  date: {
    marginTop: 32,
    fontSize: 32,
    color: "#CBD5F5",
  },
  time: {
    fontSize: 64,
    fontWeight: "bold",
    letterSpacing: 6,
    color: "#E5F1FF",
  },
});
