import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack, HStack, Badge } from "native-base";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <HStack style={{ margin: 0, padding: 0, borderRadius: 0 }}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            props.categoryFilter("all"), props.setActive(-1);
          }}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              props.active == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text style={{ color: "white", padding: 3 }}>All</Text>
          </Badge>
        </TouchableOpacity>

        {props.categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              props.categoryFilter(item._id), props.setActive(index);
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 5 },
                props.active == index ? styles.active : styles.inactive,
              ]}
            >
              <Text style={{ color: "white", padding: 3 }}>{item.name}</Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </HStack>
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5a5f",
    borderRadius: 20,
  },
  active: {
    backgroundColor: "#03bafc",
  },
  inactive: { backgroundColor: "#a0e1ec" },
});
