import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductContainer from "../Screen/Products/ProductContainer";
import SingleProduct from "../Screen/Products/SingleProduct";

const Stack = createStackNavigator();


export default function HomeNavigator() {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={ProductContainer} />
      <Stack.Screen name="Product Detail" component={SingleProduct} />
    </Stack.Navigator>
  );
}


