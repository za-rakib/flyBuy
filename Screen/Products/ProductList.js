import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

let { width } = Dimensions.get("window");

const ProductList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <ProductCard item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  card: {
    width: width / 2,
    backgroundColor: "gainsboro",
  },
});
