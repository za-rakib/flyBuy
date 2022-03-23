import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../Screen/Cart/Cart";
import Checkout from "../Screen/Cart/Checkout";

const Stack = createStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
