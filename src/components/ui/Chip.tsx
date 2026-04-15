/**
 * Small pill-shaped element used for category tabs, order-type toggles,
 * and modifier labels. The `active` prop switches between the highlighted
 * (orange) and muted (cream) visual states.
 */

import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ChipProps {
  label: string;
  active?: boolean;
  /** Render on a dark surface (e.g. inside the cart sidebar). */
  dark?: boolean;
  style?: ViewStyle;
}

export function Chip({ label, active = false, dark = false, style }: ChipProps) {
  return (
    <View
      style={[
        styles.base,
        active && styles.active,
        !active && !dark && styles.inactive,
        !active && dark && styles.darkInactive,
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          active && styles.activeLabel,
          !active && !dark && styles.inactiveLabel,
          !active && dark && styles.darkInactiveLabel,
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    borderRadius: theme.radii.lg,
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  label: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.md,
  },
  active: {
    backgroundColor: theme.colors.primary,
  },
  activeLabel: {
    color: theme.colors.textOnPrimary,
  },
  inactive: {
    backgroundColor: theme.colors.surfaceMuted,
  },
  inactiveLabel: {
    color: theme.colors.textSecondary,
  },
  darkInactive: {
    backgroundColor: theme.colors.surfaceMuted,
  },
  darkInactiveLabel: {
    color: theme.colors.textSecondary,
  },
}));
