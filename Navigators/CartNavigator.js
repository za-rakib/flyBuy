import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../Screen/Cart/Cart";
import CheckoutNavigator from "./CheckoutNavigator";


const Stack = createStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={CheckoutNavigator} />
    </Stack.Navigator>
  );
}
