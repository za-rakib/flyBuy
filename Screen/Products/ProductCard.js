import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
let { width } = Dimensions.get("window");

const ProductCard = ({ item }) => {
  const { name, price, image, countInStock } = item;
  //  console.log("Item, ", item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.price}>$ {price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button title={"Add"} color={"green"} />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currently unavailable</Text>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    marginTop: 55,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 10,
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});
