import { StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";

export default function Input(props) {
  return (
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        autoCorrect={props.autoCorrect}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 60,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "orange",
  },
});
