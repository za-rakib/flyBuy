import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Shared/Header";
import Main from "./Navigators/Main";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Header />
          <Main />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
