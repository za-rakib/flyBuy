import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
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
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../Redux/Actions/cartActions";
let { width, height } = Dimensions.get("window");

const Cart = ({ cartItems }) => {
  return (
    <NativeBaseProvider>
      <Heading size="2xl" style={{ alignSelf: "center" }}>
        Cart
      </Heading>
      {cartItems.length ? (
        <Container>
          {cartItems.map((item, index) => {
            return (
              <>
                <HStack my={2} key={index} style={styles.card}>
                  <Box  style={styles.box1}>
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
                    <Text style={styles.itemPrice}>${item.product.item.price}</Text>
                  </Box>
                </HStack>
                <Divider bg="#7787b8" />
              </>
            );
          })}
        </Container>
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

const mapStateToProps = (state) => {
  const { addCartItem } = state;
  return { cartItems: addCartItem };
};
const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    width:width,
  },
  box1: {
    flex: 1.5,
    display: "flex",
    justifyContent: "center",
    marginLeft:5,
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
  itemPrice:{
    fontSize: 17,
    color: "#1a1e2b",
  }
});

export default connect(mapStateToProps, null)(Cart);

