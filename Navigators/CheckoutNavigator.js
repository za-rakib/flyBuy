import { StyleSheet, Text, View,Dimensions } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Checkout from "../Screen/Cart/Checkout/Checkout";
import Payment from "../Screen/Cart/Checkout/Payment";
import Confirm from "../Screen/Cart/Checkout/Confirm";
let { width, height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

export default function CheckoutNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18 },
        // tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
