import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
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
import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";
let { width, height } = Dimensions.get("window");

const Cart = ({ cartItems, clearCartItems, removeFromCart, navigation }) => {
  //console.log("cartItem", cartItems);
  // total price
  let total = 0;
  let totalPrice;
  cartItems.forEach((item) => {
    return (total += item.product.price);
  });
  totalPrice = Number(total).toFixed(3);
  return (
    <NativeBaseProvider>
      <Heading size="2xl" style={{ alignSelf: "center" }}>
        Cart
      </Heading>
      {cartItems.length ? (
        <>
          {/* {cartItems.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })} */}
          <SwipeListView
            data={cartItems}
            renderItem={(data) => <CartItem item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => removeFromCart(data.item)}
                >
                  <Icon
                    style={styles.hiddenButtonIcon}
                    name="trash"
                    color={"white"}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
            keyExtractor={() => Math.random().toString()}
          />
          <HStack style={styles.bottomContainer}>
            <Box mr={5}>
              <Text fontSize="xl">$ {totalPrice}</Text>
            </Box>

            <Box mx={5}>
              <Button
                title="Clear"
                color="#ff3d3d"
                onPress={() => clearCartItems()}
              />
            </Box>
            <Box mx={4}>
              <Button
                title="Checkout"
                color="#841584"
                onPress={() => navigation.navigate("Checkout")}
                key={Math.random()}
              />
            </Box>
          </HStack>
        </>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text style={styles.emptyContainerText}>
            Looks like your card id empty..
          </Text>
          <Text style={styles.emptyContainerText}>
            Please add some item to get started..
          </Text>
        </Container>
      )}
    </NativeBaseProvider>
  );
};

// redux store
const mapStateToProps = (state) => {
  //  console.log("state", state);
  const { cartItem } = state;
  return { cartItems: cartItem };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCartItems: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// StyleSheet
const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    marginTop: height / 10,
    marginLeft: width / 15,
  },
  emptyContainerText: {
    color: "#fc2b5f",
    fontSize: 25,
    padding: 3,
    fontWeight: "bold",
  },

  bottomContainer: {
    marginTop: "5%",
    marginLeft: width / 10,
    marginBottom: "5%",
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingTop: 4,
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 64,
    width: width / 1.1,
  },
  hiddenButtonIcon: {
    paddingRight: 20,
  },
});
