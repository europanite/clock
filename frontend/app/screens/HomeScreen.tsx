import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function getCurrentTimeString(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function HomeScreen() {
  const [time, setTime] = useState<string>(getCurrentTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCurrentTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Clock</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    color: "#AAAAAA",
    marginBottom: 12,
  },
  time: {
    fontSize: 64,
    fontWeight: "bold",
    letterSpacing: 4,
    color: "#FFFFFF",
  },
});
