import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductContainer from "../Screen/Products/ProductContainer";
import Cart from "../Screen/Cart/Cart";
import SingleProduct from "../Screen/Products/SingleProduct";

const Stack = createStackNavigator();

export default function HomeNavigator() {
     const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={ProductContainer} />
      <Stack.Screen name="Product Detail" component={SingleProduct} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
