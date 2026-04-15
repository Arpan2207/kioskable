/**
 * Lightweight flex layout helpers equivalent to Tamagui's XStack / YStack.
 * They accept a `gap` prop and pass through any extra ViewStyle.
 */

import React from "react";
import { View, ViewStyle } from "react-native";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  style?: ViewStyle;
}

/**
 * Horizontal flex row. Items lay out left-to-right by default.
 */
export function HStack({ children, gap, style }: StackProps) {
  return (
    <View style={[{ flexDirection: "row", gap }, style]}>{children}</View>
  );
}

/**
 * Vertical flex column. Items lay out top-to-bottom by default.
 */
export function VStack({ children, gap, style }: StackProps) {
  return (
    <View style={[{ flexDirection: "column", gap }, style]}>{children}</View>
  );
}
