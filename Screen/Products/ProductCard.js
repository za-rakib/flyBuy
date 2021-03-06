import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

let { width } = Dimensions.get("window");

const ProductCard = ({ item, addItemToCart}) => {
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
        <View style={{ marginBottom: 30 }}>
          <Button
         style={{ marginTop:5}}
            title={"Add"}
            color={"green"}
            onPress={() => addItemToCart(item)}
          />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currently unavailable</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => {
      dispatch(actions.addToCart({ quantity: 1, product }));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    marginTop: 55,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 10,
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -35,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    margin: 5,
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

