/**
 * Bottom-left panel that shows the currently-selected item with its modifier chips.
 * In a future iteration this will be driven by real selection state;
 * for now it displays hardcoded "Smash Burger" data from the Figma design.
 */

import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Card } from "@/components/ui/Card";

const MODIFIERS = ["No onions", "Extra pickles", "Gluten-free bun"] as const;

export function SelectedItemPanel() {
  return (
    <Card variant="warm" style={styles.card}>
      <Text style={styles.title}>Selected item: Smash Burger</Text>
      <Text style={styles.subtitle}>
        Keep item details visible in the main canvas instead of switching to a
        full-screen step.
      </Text>

      <View style={styles.modifiers}>
        {MODIFIERS.map((mod) => (
          <View key={mod} style={styles.chip}>
            {/* Coloured left section mimicking the Figma toggle visual */}
            <View style={styles.chipToggle} />
            <Text style={styles.chipLabel}>{mod}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    flex: 1,
    paddingHorizontal: 17,
    gap: 8,
  },
  title: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size["2xl"],
    lineHeight: 20,
    color: theme.colors.textPrimary,
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    lineHeight: 17,
    color: theme.colors.textSecondary,
  },
  modifiers: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.md,
    height: 34,
    overflow: "hidden",
  },
  chipToggle: {
    width: 28,
    height: 34,
    borderRadius: theme.radii.md,
    borderWidth: 1.17,
    borderColor: theme.colors.borderSubtle,
  },
  chipLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textPrimary,
    paddingHorizontal: 12,
  },
}));
