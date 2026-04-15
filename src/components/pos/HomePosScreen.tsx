/**
 * Full Home POS screen assembled from domain-specific components.
 * Layout: two-pane split — left pane (categories, menu grid, editor area)
 * and right pane (persistent cart sidebar).
 *
 * All data is static for this initial UI-only pass.
 */

import React from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Screen } from "@/components/ui/Screen";
import { HStack } from "@/components/ui/Stack";
import { CategoryBar } from "./CategoryBar";
import { QuickTools } from "./QuickTools";
import { MenuItemCard } from "./MenuItemCard";
import { SelectedItemPanel } from "./SelectedItemPanel";
import { UpsellGrid } from "./UpsellGrid";
import { CartPanel } from "./CartPanel";

/* ── Static menu data (matched to Figma) ─────────────── */

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const MENU_ITEMS: MenuItem[] = [
  { name: "Smash Burger", description: "Double patty, cheddar, pickles, house sauce.", price: "$13.50" },
  { name: "Hot Honey Chicken", description: "Crispy chicken, slaw, chili honey glaze.", price: "$14.25" },
  { name: "Green Bowl", description: "Rice, avocado, greens, roasted vegetables.", price: "$11.75" },
  { name: "Classic Fries", description: "Crispy fries with sea salt and herb seasoning.", price: "$6.50" },
  { name: "Sparkling Lime", description: "Fresh citrus soda with mint and crushed ice.", price: "$4.25" },
  { name: "Chicken Wrap", description: "Grilled chicken, greens, and aioli in a soft wrap.", price: "$11.90" },
];

const COLUMNS = 3;

/** Split a flat array into rows of `cols` items each. */
function chunkArray<T>(arr: T[], cols: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += cols) {
    rows.push(arr.slice(i, i + cols));
  }
  return rows;
}

/* ── Component ───────────────────────────────────────── */

export function HomePosScreen() {
  const menuRows = chunkArray(MENU_ITEMS, COLUMNS);

  return (
    <Screen>
      <View style={styles.root}>
        {/* ── Left pane ── */}
        <View style={styles.leftPane}>
          <CategoryBar />
          <QuickTools />

          {/* Menu grid (scrollable on overflow) */}
          <ScrollView
            style={styles.menuScroll}
            contentContainerStyle={styles.menuContent}
            showsVerticalScrollIndicator={false}
          >
            {menuRows.map((row, ri) => (
              <HStack key={ri} gap={12}>
                {row.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
                {/* Fill remaining column slots so cards size equally */}
                {row.length < COLUMNS &&
                  Array.from({ length: COLUMNS - row.length }).map((_, j) => (
                    <View key={`spacer-${j}`} style={styles.spacer} />
                  ))}
              </HStack>
            ))}
          </ScrollView>

          {/* Bottom editor area */}
          <View style={styles.bottomEditor}>
            <SelectedItemPanel />
            <UpsellGrid />
          </View>
        </View>

        {/* ── Right pane (cart) ── */}
        <CartPanel />
      </View>
    </Screen>
  );
}

/* ── Styles ──────────────────────────────────────────── */

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    flexDirection: "row",
  },
  leftPane: {
    flex: 1,
    padding: theme.spacing["4xl"],
    gap: theme.spacing["3xl"],
  },
  menuScroll: {
    flex: 0,
  },
  menuContent: {
    gap: 12,
  },
  bottomEditor: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
    minWidth: 0,
  },
}));
