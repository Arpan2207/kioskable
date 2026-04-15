/**
 * 2x2 grid of compact upsell / add-on cards shown beside the selected-item panel.
 * The first card uses the orange-highlighted variant; the rest use the default surface.
 */

import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Card } from "@/components/ui/Card";

interface UpsellItem {
  label: string;
  description: string;
  highlight?: boolean;
}

const UPSELLS: UpsellItem[] = [
  { label: "Add cheddar +$1.00", description: "Fast accessory choice.", highlight: true },
  { label: "Upgrade fries +$2.50", description: "Compact upsell card." },
  { label: "Combo +$5.00", description: "Bundle actions card." },
  { label: "Add note", description: "Custom instructions." },
];

export function UpsellGrid() {
  return (
    <View style={styles.grid}>
      {/* Row 1 */}
      <View style={styles.row}>
        {UPSELLS.slice(0, 2).map((item) => (
          <Card
            key={item.label}
            variant={item.highlight ? "upsellHighlight" : "default"}
            style={styles.cell}
          >
            <Text style={styles.title} numberOfLines={1}>
              {item.label}
            </Text>
            <Text style={styles.desc} numberOfLines={2}>
              {item.description}
            </Text>
          </Card>
        ))}
      </View>
      {/* Row 2 */}
      <View style={styles.row}>
        {UPSELLS.slice(2).map((item) => (
          <Card key={item.label} style={styles.cell}>
            <Text style={styles.title} numberOfLines={1}>
              {item.label}
            </Text>
            <Text style={styles.desc} numberOfLines={2}>
              {item.description}
            </Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  grid: {
    width: 295,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  cell: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 13,
    paddingTop: 11,
    paddingBottom: 8,
  },
  title: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.md,
    lineHeight: 20,
    color: theme.colors.textPrimary,
  },
  desc: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.xs,
    lineHeight: 17,
    color: theme.colors.textSecondary,
  },
}));
