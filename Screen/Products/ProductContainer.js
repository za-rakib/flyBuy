import { FlatList, StyleSheet, View, ScrollView } from "react-native";
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
import CategoryFilter from "./CategoryFilter";
const data = require("../../assets/data/products.json");
const productsCategories = require("../../assets/data/categories.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  const [categories, setCategory] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategory(productsCategories);
    setProductCategory(data);
    setActive(-1);
    setInitialState(data);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategory([]);
      setActive();
      setInitialState();
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

  //categories
  const categoryFilter = (ctg) => {
    {
      ctg === "all"
        ? [setProductCategory(initialState), setActive(true)]
        : [
            setProductCategory(
              products.filter((item) => item.category.$oid == ctg.$oid)
            ),
            setActive(true),
          ];
    }
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
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={categoryFilter}
                productsCategory={productCategory}
                active={active}
                setActive={setActive}
              />
            </View>
            {productCategory.length > 0 ? (
              <View style={styles.listContainer}>
                {productCategory.map((item, index) => (
                  <ProductList key={index} item={item} />
                ))}
              </View>
            ) : (
              <View style={styles.noMatch}>
                <Text style={styles.noMatchText}>
                  Product is not available right now
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
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
  listContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  closeIcon: {
    position: "absolute",
    color: "white",
  },
  noMatch: {
    backgroundColor: "#f2f2f2",
    marginTop: 20,
  },
  noMatchText: {
    color: "red",
    fontSize: 25,
    padding: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
});
