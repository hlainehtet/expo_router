import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Link href="/products/1">
        <Text>Product 1</Text>
      </Link>
      <Link href="/products/2">
        <Text>Product 2</Text>
      </Link>
      <Link href="/products/3">
        <Text>Product 3</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
