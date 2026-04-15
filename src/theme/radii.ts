/**
 * Border-radius scale pulled from the Figma component corners.
 * Named from smallest to largest for easy mental mapping.
 */

export const radii = {
  /** 3px — tiny elements */
  xs: 3,
  /** 10px — small controls, quantity buttons */
  sm: 10,
  /** 12px — chips, clear button, modifier pills */
  md: 12,
  /** 14px — category pills, add-item buttons, cart items */
  lg: 14,
  /** 16px — search bar, place-order button */
  xl: 16,
  /** 20px — menu item cards, editor panel */
  "2xl": 20,
  /** 28px — outer screen container */
  "3xl": 28,
} as const;
