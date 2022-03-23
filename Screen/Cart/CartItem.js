import { StyleSheet, View, Dimensions, Button, ScrollView } from "react-native";
import React, { useState } from "react";
let { width, height } = Dimensions.get("window");
import {
  NativeBaseProvider,
  Box,
  Heading,
  Container,
  HStack,
  Avatar,
  Divider,
  Flex,
  Text,
} from "native-base";

const CartItem = ({ item }) => {
//   console.log("item", item.item.product);
  const data = item.item.product;
  const [quantity, setQuantity] = useState(item.quantity);
  return (
    <View>
      <HStack my={1} style={styles.card}>
        <Box style={styles.box1}>
          <Avatar
            size="md"
            source={{
              uri: data.image
                ? data.image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
            }}
          />
        </Box>
        <Box style={styles.box2}>
          <Text style={styles.itemName}>{data.name}</Text>
        </Box>
        <Box style={styles.box3}>
          <Text style={styles.itemPrice}>${data.price}</Text>
        </Box>
      </HStack>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    width: width,
    backgroundColor: "#cad5fc",
    padding: 4,
    height: 64,
  },
  box1: {
    flex: 1.5,
    display: "flex",
    justifyContent: "center",
    marginLeft: 5,
  },
  box2: {
    flex: 5,
    display: "flex",
  },
  box3: {
    flex: 1.5,
    display: "flex",
  },
  itemName: {
    fontSize: 20,
    color: "#1a1e2b",
  },

  itemPrice: {
    fontSize: 17,
    color: "#1a1e2b",
  },
});
