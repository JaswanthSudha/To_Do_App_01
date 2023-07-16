import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function (props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}>
          <Text style={styles.itemText}>{props.items}</Text>
        </View>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemleft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    padding: 15,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "#55BCF6",
  },
  itemText: {
    maxWidth: "100%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
