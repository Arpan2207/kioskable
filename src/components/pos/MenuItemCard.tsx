/**
 * A single menu-item tile shown in the responsive grid on the left pane.
 * Pressing the card selects the item (driving the bottom editor panel);
 * pressing "Add item" adds it straight to the cart.
 *
 * Card height adapts via breakpoints instead of using a single fixed value,
 * so the grid stays readable from small tablets to large landscape screens.
 */

import React from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Card } from "@/components/ui/Card";

interface MenuItemCardProps {
  name: string;
  price: string;
  /** Whether this card is the currently selected item. */
  selected?: boolean;
  /** Called when the card body is pressed (selects the item). */
  onSelect?: () => void;
  /** Called when the "Add item" button is pressed (adds to cart). */
  onAdd?: () => void;
}

/**
 * Presentational menu tile with selection + add handlers.
 * @param props Item name, formatted price, selection state, and callbacks.
 */
export function MenuItemCard({
  name,
  price,
  selected = false,
  onSelect,
  onAdd,
}: MenuItemCardProps) {
  return (
    <Pressable style={styles.pressable} onPress={onSelect}>
      <Card style={[styles.card, selected && styles.cardSelected]}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <Pressable style={styles.addButton} onPress={onAdd}>
            <Text style={styles.addLabel}>Add item</Text>
          </Pressable>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  pressable: {
    flex: 1,
    minWidth: 0,
  },
  card: {
    flex: 1,
    minWidth: 0,
    minHeight: {
      xs: 80,
      sm: 88,
      md: 96,
      lg: 100,
    },
    justifyContent: "space-between",
  },
  cardSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surfaceWarm,
  },
  name: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: {
      xs: theme.typography.size.xl,
      lg: theme.typography.size["2xl"],
    },
    lineHeight: 20,
    color: theme.colors.textPrimary,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 6,
  },
  price: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.xl,
    color: theme.colors.textPrimary,
  },
  addButton: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.radii.lg,
    paddingHorizontal: {
      xs: 10,
      md: 14,
    },
    paddingVertical: {
      xs: 8,
      md: 11,
    },
  },
  addLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textAccent,
  },
}));
