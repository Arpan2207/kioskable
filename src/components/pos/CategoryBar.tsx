/**
 * Horizontal scrollable row of category chips at the top of the left pane.
 * The first chip ("Popular") is active by default; the rest are inactive.
 * A search bar placeholder fills the remaining space on the right.
 */

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Chip } from "@/components/ui/Chip";

const CATEGORIES = [
  "Popular",
  "Burgers",
  "Bowls",
  "Sides",
  "Drinks",
  "Desserts",
] as const;

export function CategoryBar() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pills}
      >
        {/* Menu icon placeholder */}
        <View style={styles.menuIcon}>
          <Text style={styles.menuDots}>⋮</Text>
        </View>

        {CATEGORIES.map((cat) => (
          <Chip key={cat} label={cat} active={cat === "Popular"} />
        ))}
      </ScrollView>

      <View style={styles.searchBar}>
        <Text style={styles.searchPlaceholder}>
          Search menu items, combos, drinks...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 42,
  },
  pills: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: theme.radii.md,
    backgroundColor: theme.colors.surfaceMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  menuDots: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  searchBar: {
    flex: 1,
    height: 42,
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: theme.radii.xl,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  searchPlaceholder: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.md,
    color: theme.colors.textTertiary,
  },
}));
