/**
 * Central Unistyles configuration.
 * Registers the light theme, breakpoints, and TypeScript type augmentation
 * so every StyleSheet.create() call receives the theme automatically.
 */

import { StyleSheet } from "react-native-unistyles";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

const lightTheme = {
  colors,
  spacing,
  radii,
  typography,
} as const;

const appThemes = {
  light: lightTheme,
} as const;

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    initialTheme: "light",
  },
});
