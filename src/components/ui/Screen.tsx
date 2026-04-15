/**
 * Full-screen container that applies the app's background colour,
 * hides the status bar safe area, and fills the available space.
 * Every route screen should wrap its content in <Screen>.
 */

import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return <View style={styles.root}>{children}</View>;
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
