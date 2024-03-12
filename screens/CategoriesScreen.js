import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategory = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}
