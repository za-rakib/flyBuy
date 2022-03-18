import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return { cartItems: cartItems };
};
const styles = StyleSheet.create({});
export default connect(mapStateToProps, null)(Cart);
