import { StyleSheet, View, Dimensions, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
let { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Select,
  Box,
  Center,
  NativeBaseProvider,
  Container,
  Heading,
  VStack,
  HStack,
  FlatList,
  Spacer,
  Text,
  Radio,
} from "native-base";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];
const cardPayment = [
  { name: "Visa", value: 1 },
  { name: "Master Card", value: 2 },
  { name: "American Express", value: 3 },
  { name: "Wallet", value: 4 },
  { name: "Others", value: 5 },
];

export default function Payment(props) {
  const order = props.route.params;
  const [selected, setSelected] = useState();
  const [card, setCard] = useState();

  //   const selectMethod = (item, checkboxValue) => (
  //     console.log("item", item), setSelected(item.value)
  //   );

  return (
    <NativeBaseProvider>
      <Heading size="xl">Chose Your Payment Method</Heading>
      <Container>
        {/* {methods.map((item, index) => (
          <VStack key={index} onPress={() => setSelected(item.value)}>
            <Text>{item.name}</Text>
          </VStack>
        ))} */}

        <FlatList
          data={methods}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    fontSize="lg"
                  >
                    {item.name}
                  </Text>
                  <Spacer />
                </VStack>
                <BouncyCheckbox
                  style={styles.checkbox}
                  iconStyle={{ borderColor: "lightGray", borderRadius: 20 }}
                  fillColor="green"
                  onPress={(checkboxValue) =>
                    checkboxValue && setSelected(item.value)
                  }
                />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
        {selected === 3 ? (
          <Center>
            <Box w="3/4" maxW="300">
              <Select
                selectedValue={card}
                minWidth="200"
                accessibilityLabel="Choose Card"
                placeholder="Choose Card"
                iosIcon={<Icon name="arrow-down" color={"#0071ff"} />}
                mt={1}
                onValueChange={(c) => console.log("c", c)}
              >
                {cardPayment.map((c, index) => {
                  return (
                    <Select.Item key={c.name} label={c.name} value={c.name} />
                  );
                })}
              </Select>
            </Box>
          </Center>
        ) : null}
        <View style={{ marginTop: 10, alignSelf: "center" }}>
          <Button
            title="Confirm"
            onPress={() => props.navigation.navigate("Confirm", { order })}
          />
        </View>
      </Container>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginLeft: width / 3.5,
  },
});
