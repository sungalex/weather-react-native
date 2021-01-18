import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 30,
    paddingHorizontal: 100,
    backgroundColor: "#FDF6aA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 20,
  },
});
