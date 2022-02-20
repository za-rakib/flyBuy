import { Image, ScrollView, StyleSheet, View, Button } from "react-native";
import React, { useState } from "react";
import {
  NativeBaseProvider,
  VStack,
  Icon,
  Box,
  Input,
  CloseIcon,
  Flex,
  SearchIcon,
  Text,
  Center,
} from "native-base";

export default function SingleProduct({ navigation, route }) {
  const [item, setItem] = useState(route.params.item);
  const [availability, setAvailability] = useState("");
  console.log(item);
  return (
    <NativeBaseProvider style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Center>
          <Text mt="3" fontSize="2xl">
            {item.name}
          </Text>
          <Text mt="2" fontSize="xl">
            {item.description}
          </Text>
        </Center>
        <View style={styles.bottomContainer}>
          <View style={styles.price}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
          <View>
            <Button px="5" title={"Add"} color={"green"} />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "40%",
  },
  price: {
    backgroundColor: "#fff",
  },
  priceText: {
    fontSize: 22,
    margin: 20,
    color: "red",
  },
  button: {
    backgroundColor: "red",
    color: "white",
    fontSize: 30,
  },
});
