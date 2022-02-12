import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ProductContainer from "./Screen/Products/ProductContainer";
import Header from "./Shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProductContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
