import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { Select, Box, Center, NativeBaseProvider } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormContainer from "../../../Shared/Form/FormContainer";
import Input from "../../../Shared/Form/Input";

const countries = require("../../../assets/data/countries.json");

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);
    return () => {
      setOrderItems();
    };
  }, []);

  const checkOut = () => {
    let order = {
      city,
      shipAddress1: address,
      shipAddress2: address2,
      zip,
      phone,
      country,
      orderItems,
    };
    props.navigation.navigate("Payment", { order: order });
  };
  return (
    <NativeBaseProvider>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
      >
        <FormContainer  title="Shipping Address">
          <Input
            placeholder={"Address"}
            name={"Phone"}
            value={phone}
            keyboardType={"numeric"}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            placeholder={"Shipping Address 1"}
            name={"ShippingAddress1"}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Input
            placeholder={"Shipping Address 2"}
            name={"ShippingAddress2"}
            value={address2}
            onChangeText={(text) => setAddress2(text)}
          />
          <Input
            placeholder={"City"}
            name={"City"}
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <Input
            placeholder={"Zip Code"}
            name={"Zip"}
            value={zip}
            keyboardType={"numeric"}
            onChangeText={(text) => setZip(text)}
          />
          <Center>
            <Box w="3/4" maxW="300">
              <Select
                selectedValue={country}
                minWidth="200"
                accessibilityLabel="Choose Country"
                placeholder="Choose Country"
                iosIcon={<Icon name="arrow-down" color={"#0071ff"} />}
                mt={1}
                onValueChange={(e) => setCountry(e)}
              >
                {countries.map((c, index) => (
                  <Select.Item key={Math.random().toString()} label={c.name} value={c.code} />
                ))}
              </Select>
            </Box>
          </Center>
          <View style={{ width: "80%", alignItems: "center", marginTop: 10 }}>
            <Button title="Confirm" onPress={() => checkOut()} />
          </View>
        </FormContainer>
      </KeyboardAwareScrollView>
    </NativeBaseProvider>
  );
};

const mapStateToProps = (state) => {
  //  console.log("state", state);
  const { cartItem } = state;
  return { cartItems: cartItem };
};
export default connect(mapStateToProps)(Checkout);
const styles = StyleSheet.create({});
