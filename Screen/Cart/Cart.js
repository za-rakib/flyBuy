import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { NativeBaseProvider, Box } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cart = ({cartItems}) => {
  return (
    <View>
      {cartItems.map((x, index) => {
        return <Text key={index}>{x.product.item.name}</Text>;
      })}
    </View>
  );
};

const mapStateToProps = (state) => {
  //    console.log("state, ", state);
  const { addCartItem } = state;
  return { cartItems: addCartItem };
};
const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default connect(mapStateToProps, null)(Cart);
