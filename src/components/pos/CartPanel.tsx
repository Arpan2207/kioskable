/**
 * Dark sidebar on the right side of the POS screen.
 * Shows: header ("Current cart"), order-type chips, cart line items,
 * action buttons, order totals, and the primary "Simulate place order" CTA.
 *
 * All data is static / mock for the initial UI-only build.
 */

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

/* ── Static mock data ────────────────────────────────── */

interface CartItem {
  name: string;
  note: string;
  qty: number;
}

const CART_ITEMS: CartItem[] = [
  { name: "Smash Burger", note: "Cheddar, fries upgrade", qty: 1 },
  { name: "Green Bowl", note: "No feta, extra avocado", qty: 2 },
  { name: "Sparkling Citrus", note: "Large size", qty: 1 },
];

const ORDER_TYPES = ["Dine-in", "Pickup", "Delivery"] as const;

const ACTIONS = ["Send to kitchen", "Hold order", "Add note"] as const;

/* ── Component ───────────────────────────────────────── */

export function CartPanel() {
  return (
    <View style={styles.sidebar}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Current cart</Text>
          <Text style={styles.headerMeta}>3 items · dine-in · table 14</Text>
        </View>
        <View style={styles.clearBtn}>
          <Text style={styles.clearLabel}>Clear</Text>
        </View>
      </View>

      {/* Order type chips */}
      <View style={styles.orderTypes}>
        {ORDER_TYPES.map((t) => (
          <Chip key={t} label={t} active={t === "Dine-in"} dark={t !== "Dine-in"} />
        ))}
      </View>

      {/* Cart items (scrollable) */}
      <ScrollView
        style={styles.itemsList}
        contentContainerStyle={styles.itemsContent}
        showsVerticalScrollIndicator={false}
      >
        {CART_ITEMS.map((item) => (
          <View key={item.name} style={styles.cartItem}>
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemNote}>{item.note}</Text>
            </View>
            <View style={styles.qtyControls}>
              <View style={styles.qtyBtn}>
                <Text style={styles.qtySymbol}>-</Text>
              </View>
              <Text style={styles.qtyValue}>{item.qty}</Text>
              <View style={styles.qtyBtn}>
                <Text style={styles.qtySymbol}>+</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Action buttons */}
      <View style={styles.actions}>
        {ACTIONS.map((a) => (
          <Button key={a} label={a} variant="ghost" style={styles.actionBtn} />
        ))}
      </View>

      {/* Totals */}
      <View style={styles.totals}>
        <TotalRow label="Subtotal" value="$40.00" />
        <TotalRow label="Tax" value="$3.60" />
        <TotalRow label="Total" value="$43.60" />

        <Button label="Simulate place order" variant="primary" style={styles.placeBtn} />
      </View>
    </View>
  );
}

/* ── Small helper for summary rows ───────────────────── */

function TotalRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.totalRow}>
      <Text style={styles.totalLabel}>{label}</Text>
      <Text style={styles.totalValue}>{value}</Text>
    </View>
  );
}

/* ── Styles ──────────────────────────────────────────── */

const styles = StyleSheet.create((theme) => ({
  sidebar: {
    width: {
      xs: 300,
      md: 340,
      lg: 372,
    },
    backgroundColor: theme.colors.sidebar,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 28,
    gap: 18,
    borderTopRightRadius: theme.radii["3xl"],
    borderBottomRightRadius: theme.radii["3xl"],
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    gap: 3,
  },
  headerTitle: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size["3xl"],
    color: theme.colors.textOnPrimary,
    letterSpacing: -0.84,
  },
  headerMeta: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textOnPrimary,
    opacity: 0.65,
  },
  clearBtn: {
    backgroundColor: theme.colors.sidebarControl,
    borderRadius: theme.radii.md,
    padding: 11,
  },
  clearLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textOnPrimary,
  },

  /* Order type pills */
  orderTypes: {
    flexDirection: "row",
    gap: 8,
  },

  /* Cart item list */
  itemsList: {
    flex: 1,
  },
  itemsContent: {
    gap: 10,
  },
  cartItem: {
    backgroundColor: theme.colors.sidebarCard,
    borderWidth: 1.17,
    borderColor: theme.colors.sidebarBorder,
    borderRadius: theme.radii.lg,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartItemInfo: {
    flex: 1,
    gap: 2,
  },
  cartItemName: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.base,
    color: theme.colors.textOnPrimary,
  },
  cartItemNote: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textOnPrimary,
    opacity: 0.65,
  },
  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: theme.radii.sm,
    backgroundColor: theme.colors.sidebarControl,
    alignItems: "center",
    justifyContent: "center",
  },
  qtySymbol: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.base,
    color: theme.colors.textOnPrimary,
  },
  qtyValue: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.base,
    color: theme.colors.textOnPrimary,
    minWidth: 8,
    textAlign: "center",
  },

  /* Actions row */
  actions: {
    flexDirection: "row",
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    minWidth: 0,
  },

  /* Totals section */
  totals: {
    borderTopWidth: 1.17,
    borderTopColor: theme.colors.sidebarBorder,
    paddingTop: 17,
    gap: 10,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.sm,
    color: theme.colors.textOnPrimary,
    opacity: 0.65,
  },
  totalValue: {
    fontFamily: theme.typography.fontFamily.body,
    fontSize: theme.typography.size.base,
    color: theme.colors.textOnPrimary,
  },
  placeBtn: {
    marginTop: 4,
  },
}));
