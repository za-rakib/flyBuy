import { Image, StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Image 
        source={require("../assets/data/logo.png")}
        style={styles.logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
     width: "100%",
     flexDirection: "row",
     alignContent: "center",
     justifyContent: "center",
     padding:10,
     backgroundColor: "gainsboro",
  },
  logo:{
    width:60,
    height:60,
  }
});
