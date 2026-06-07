/**
 * Bottom-left panel showing the currently-selected menu item.
 * Driven entirely by local POS state: it reflects the selected item, lets the
 * user toggle that item's modifiers, and adds the configured item to the cart.
 * When nothing is selected it renders a stable empty state so the layout holds.
 */

import React from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/mockData";
import type { MenuItem } from "@/types/pos";

interface SelectedItemPanelProps {
  /** The currently selected item, or null when nothing is selected. */
  item: MenuItem | null;
  /** Ids of the modifiers currently toggled on for the selected item. */
  selectedModifierIds: string[];
  /** Toggle a modifier on/off by id. */
  onToggleModifier: (modifierId: string) => void;
  /** Add the selected item (with its modifiers) to the cart. */
  onAddToCart: () => void;
}

/**
 * Selected-item editor panel with modifier toggles and an add-to-cart action.
 * @param props Selected item, modifier selection, and the change handlers.
 */
export function SelectedItemPanel({
  item,
  selectedModifierIds,
  onToggleModifier,
  onAddToCart,
}: SelectedItemPanelProps) {
  // Empty state — keeps the panel height stable when no item is selected.
  if (!item) {
    return (
      <Card variant="warm" style={styles.card}>
        <Text style={styles.title}>No item selected</Text>
        <Text style={styles.description}>
          Tap a menu item to view details and add it to the order.
        </Text>
      </Card>
    );
  }

  return (
    <Card variant="warm" style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.headerCopy}>
          <Text style={styles.title} numberOfLines={1}>
            Selected item: {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <Pressable style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addLabel}>Add to order</Text>
        </Pressable>
      </View>

      {item.modifiers.length > 0 && (
        <View style={styles.modifiers}>
          {item.modifiers.map((mod) => {
            const active = selectedModifierIds.includes(mod.id);
            return (
              <Pressable
                key={mod.id}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => onToggleModifier(mod.id)}
              >
                {/* Coloured left section mimicking the Figma toggle visual */}
                <View style={[styles.chipToggle, active && styles.chipToggleActive]} />
                <Text style={styles.chipLabel}>
                  {mod.label}
                  {mod.priceDelta > 0 ? ` +${formatCurrency(mod.priceDelta)}` : ""}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    flex: 1,
    paddingHorizontal: 17,
    gap: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  headerCopy: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  title: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size["2xl"],
    lineHeight: 20,
    color: theme.colors.textPrimary,
  },
  description: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.md,
    lineHeight: 19,
    color: theme.colors.textPrimary,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radii.lg,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  addLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textOnPrimary,
  },
  modifiers: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.md,
    borderWidth: 1.17,
    borderColor: theme.colors.borderSubtle,
    height: 34,
    overflow: "hidden",
  },
  chipActive: {
    borderColor: theme.colors.primary,
  },
  chipToggle: {
    width: 28,
    height: 34,
    borderRadius: theme.radii.md,
    borderWidth: 1.17,
    borderColor: theme.colors.borderSubtle,
  },
  chipToggleActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  chipLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textPrimary,
    paddingHorizontal: 12,
  },
}));
