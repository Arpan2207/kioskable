/**
 * Root layout — wraps the entire app in the Expo Router stack.
 * The navigation header is hidden since the POS screen has its own chrome.
 */

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
