/**
 * Small toolbar row of icon placeholders between the category bar and the menu grid.
 * In the Figma design these are "Quick filters" + four small icon buttons.
 * Currently rendered as simple shapes to match the visual layout.
 */

import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export function QuickTools() {
  return (
    <View style={styles.row}>
      {/* "Quick filters" label chip */}
      <View style={styles.filterLabel}>
        <Text style={styles.filterText}>Quick filters</Text>
      </View>

      {/* Icon placeholders */}
      {[0, 1, 2, 3].map((i) => (
        <View key={i} style={[styles.iconBtn, i === 3 && styles.iconHighlight]}>
          {i === 0 && <View style={styles.dotIcon} />}
          {i === 1 && (
            <View style={styles.barsWrapper}>
              <View style={[styles.bar, { width: 12 }]} />
              <View style={[styles.bar, { width: 8 }]} />
            </View>
          )}
          {i === 2 && (
            <View style={styles.gridWrapper}>
              <View style={styles.gridRow}>
                <View style={styles.gridCell} />
                <View style={styles.gridCell} />
              </View>
              <View style={styles.gridRow}>
                <View style={styles.gridCell} />
                <View style={styles.gridCell} />
              </View>
            </View>
          )}
          {i === 3 && <View style={styles.highlightSquare} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 36,
    overflow: "hidden",
  },
  filterLabel: {
    borderWidth: 1,
    borderColor: theme.colors.textPrimary,
    borderRadius: theme.radii.lg,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: theme.colors.surfaceLight,
    opacity: 0.18,
  },
  filterText: {
    fontFamily: theme.typography.fontFamily.label,
    fontWeight: "500",
    fontSize: theme.typography.size.sm,
    color: theme.colors.icon,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: theme.radii.lg,
    borderWidth: 1,
    borderColor: theme.colors.textPrimary,
    backgroundColor: theme.colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  dotIcon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  barsWrapper: {
    gap: 3,
    alignItems: "center",
  },
  bar: {
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.icon,
  },
  gridWrapper: {
    gap: 2,
  },
  gridRow: {
    flexDirection: "row",
    gap: 2,
  },
  gridCell: {
    width: 4,
    height: 4,
    borderRadius: 1,
    backgroundColor: theme.colors.icon,
  },
  iconHighlight: {
    opacity: 0.9,
  },
  highlightSquare: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: theme.colors.primaryLighter,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
}));
