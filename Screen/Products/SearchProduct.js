import { StyleSheet, View, Text } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Content,
  HStack,
  Icon,
  Box,
  Input,
  CheckIcon,
  VStack,
  Left,
  Avatar,
} from "native-base";

const SearchProduct = ({ productsFiltered }) => {
  return (
    <NativeBaseProvider>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item, index) => (
          <HStack key={index} mb="3">
            <Box>
              <Avatar
                mr="3"
                size="md"
                source={{
                  uri: item.image
                    ? item.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiT3VroKZ7fz5SKhOMy8uDOK7Wak1cTFrd617hE1C3nIWcGRZgXhgcyWLWRfiQDHKoog&usqp=CAU",
                }}
              />
            </Box>
            <Box>
              <Text fontSize="xl">{item.name}</Text>
              <Text fontSize="md" note>
                {item.description}
              </Text>
            </Box>
          </HStack>
        ))
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.noMatch}>No Product is match</Text>
        </View>
      )}
    </NativeBaseProvider>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  noMatch: {
    fontSize: 25,
    color: "red",
  },
});
