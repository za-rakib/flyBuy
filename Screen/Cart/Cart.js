import React from "react";
import {
  StyleSheet,
  View,
Dimensions,
  Button,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Container,
  HStack,
  Avatar,
  Divider,
  Flex,
  Text,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../Redux/Actions/cartActions";
let { width, height } = Dimensions.get("window");

const Cart = ({ cartItems }) => {
// total price
  let total = 0;
  cartItems.forEach((item) => {
    return (total += item.product.item.price);
  });

  return (
    <NativeBaseProvider>
      <Heading size="2xl" style={{ alignSelf: "center" }}>
        Cart
      </Heading>
      {cartItems.length ? (
        <ScrollView>
          {cartItems.map((item, index) => {
            return (
              <View key={index}>
                <HStack my={1} style={styles.card}>
                  <Box style={styles.box1}>
                    <Avatar
                      size="md"
                      source={{
                        uri: item.product.item.image
                          ? item.product.item.image
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
                      }}
                    />
                  </Box>
                  <Box style={styles.box2}>
                    <Text style={styles.itemName}>
                      {item.product.item.name}
                    </Text>
                  </Box>
                  <Box style={styles.box3}>
                    <Text style={styles.itemPrice}>
                      ${item.product.item.price}
                    </Text>
                  </Box>
                </HStack>
              </View>
            );
          })}

          <HStack style={styles.bottomContainer}>
            <Box mr={5}>
              <Text fontSize="xl">$ {total}</Text>
            </Box>

            <Box mx={5}>
              <Button title="Clear" color="#ff3d3d" />
            </Box>
            <Box mx={4}>
              <Button title="Checkout" color="#841584" />
            </Box>
          </HStack>
        </ScrollView>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text style={styles.emptyContainerText}>
            Looks like your card id empty
          </Text>
          <Text style={styles.emptyContainerText}>
            Please add some items to get started
          </Text>
        </Container>
      )}
    </NativeBaseProvider>
  );
};

// redux store
const mapStateToProps = (state) => {
  const { addCartItem } = state;
  return { cartItems: addCartItem };
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    width: width,
    backgroundColor: "#cad5fc",
    padding: 5,
  },
  box1: {
    flex: 1.5,
    display: "flex",
    justifyContent: "center",
    marginLeft: 5,
  },
  box2: {
    flex: 5,
    display: "flex",
  },
  box3: {
    flex: 1.5,
    display: "flex",
  },
  itemName: {
    fontSize: 20,
    color: "#1a1e2b",
  },
  emptyContainer: {
    height: height,
    marginTop: height / 4,
    marginLeft: width / 10,
  },
  emptyContainerText: {
    color: "#f5497d",
    fontSize: 25,
  },
  itemPrice: {
    fontSize: 17,
    color: "#1a1e2b",
  },
  bottomContainer: {
    marginTop: "40%",
    marginLeft: width / 10,
    marginBottom: "10%",
  },
});

export default connect(mapStateToProps, null)(Cart);
