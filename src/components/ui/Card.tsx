/**
 * Generic card surface used for menu items, upsell tiles, and similar containers.
 * Supports a `variant` prop to switch between the default light surface
 * and a warm/highlighted surface for the selected-item editor panel.
 */

import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type CardVariant = "default" | "warm" | "upsellHighlight";

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: ViewStyle;
}

export function Card({ children, variant = "default", style }: CardProps) {
  return (
    <View
      style={[
        styles.base,
        variant === "warm" && styles.warm,
        variant === "upsellHighlight" && styles.upsellHighlight,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1.17,
    borderColor: theme.colors.border,
    borderRadius: theme.radii["2xl"],
    paddingHorizontal: 13,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 4,
    overflow: "hidden",
  },
  warm: {
    backgroundColor: theme.colors.surfaceWarm,
  },
  upsellHighlight: {
    backgroundColor: theme.colors.primaryLight,
    borderColor: "rgba(255,122,26,0.16)",
  },
}));
