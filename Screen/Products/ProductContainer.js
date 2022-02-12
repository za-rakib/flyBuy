import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
import {
  NativeBaseProvider,
  VStack,
  Icon,
  Box,
  Input,
  Text,
  CloseIcon,
  Flex,
  SearchIcon,
} from "native-base";
import Banner from "../../Shared/Banner";
const data = require("../../assets/data/084 products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((item) => {
        if (text === "") {
          return item;
        } else if (item.name.toLowerCase().includes(text.toLowerCase())) {
          return item;
        }
      })
    );
  };

  const openList = () => {
    setFocus(true);
  };
  const openBlur = () => {
    setFocus(false);
  };
  return (
    <NativeBaseProvider>
      <VStack>
        <Box p={3}>
          <Input
            size="xl"
            variant="rounded"
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
            InputLeftElement={<SearchIcon size="5" ml="3" />}
            InputRightElement={
              focus == true ? (
                <CloseIcon mr="5" onPress={openBlur} size="3" />
              ) : null
            }
          />
        </Box>
      </VStack>
      {focus == true ? (
        <SearchProduct productsFiltered={productsFiltered} />
      ) : (
        <View>
            <View>
                <Banner/>
            </View>
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
            keyExtractor={(item) => item.name}
            numColumns={2}
          />
        </View>
      )}
    </NativeBaseProvider>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  inputBox: {
    color: "red",
    fontWeight: "bold",
    fontSize: 50,
  },
  closeIcon: {
    position: "absolute",
    color: "white",
  },
});
