import React from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
let { width, height } = Dimensions.get("window");

export default function FormContainer(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
  {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
