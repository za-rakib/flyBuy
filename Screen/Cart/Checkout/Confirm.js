import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";
import { Box, NativeBaseProvider, Avatar, VStack } from "native-base";
import { Button } from "react-native";
let { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const confirm = props && props.route.params;
  //   console.log(
  //     "confirm",
  //     confirm.order.order.shipAddress1 && confirm.order.order.shipAddress1
  //   );
  const confirmOrder = () => {
    console.log("Place Order");
    props.clearCartItems();
    props.navigation.navigate("Cart");
  };
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Confirm Order
          </Text>
          {confirm ? (
            <View style={{ borderWidth: 1, borderColor: "orange" }}>
              <Text style={styles.title}>Shipping To:</Text>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 14 }}>
                  Address : {confirm.order.order.shipAddress1}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  Address 2 : {confirm.order.order.shipAddress2}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  Phone : {confirm.order.order.phone}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  City : {confirm.order.order.city}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  Zip: {confirm.order.order.zip}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  Country : {confirm.order.order.country}
                </Text>
              </View>
              <Text style={styles.title}>Items: </Text>
              {confirm.order.order.orderItems.map((item) => (
                // console.log("Items",item)
                <VStack
                  style={styles.confirmItem}
                  key={Math.random().toString()}
                >
                  <Avatar
                    style={styles.avatar}
                    mr="5"
                    size="md"
                    source={{
                      uri: item.product.image
                        ? item.product.image
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
                    }}
                  />
                  <Text style={styles.confirmText}>{item.product.name}</Text>
                  <Text style={styles.confirmText}>
                    {" "}
                    $ {item.product.price}
                  </Text>
                </VStack>
              ))}
            </View>
          ) : null}
          <View style={{ alignItems: "center", margin: 20 }}>
            <Button
              title={"Place order"}
              onPress={() => confirmOrder()}
            />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCartItems: () => dispatch(actions.clearCart()),
  };
};
export default connect(null,mapDispatchToProps)(Confirm);

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    height: height,
    padding: 10,
    backgroundColor: "#fff",
  },
  textContainer: {
    justifyContent: "center",
    margin: 8,
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  confirmItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width / 1.2,
    padding: 10,
  },
  avatar: {
    flex: 1.5,
  },
  confirmText: {
    flex: 1.6,
    fontSize: 14,
    marginLeft: 30,
  },
});
