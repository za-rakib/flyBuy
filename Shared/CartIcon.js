import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { Badge } from "native-base";
import { NativeBaseProvider } from "native-base";
const CartIcon = ({ cartItems }) => {
  return (
    <NativeBaseProvider>
      {cartItems.length ? (
        <View style={styles.badge}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </View>
      ) : null}
    </NativeBaseProvider>
  );
};
const mapStateToProps = (state) => {
  const { addCartItem } = state;
  return { cartItems: addCartItem };
};

export default connect(mapStateToProps, null)(CartIcon);

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    left: 25,
    width: 25,
    height: 25,
    borderRadius: 25/2,
    backgroundColor: "#ff3d3d",
  },
  text: {
    left:5,
    top:3,
    color: "white",
    fontSize: 14,
  },
});
