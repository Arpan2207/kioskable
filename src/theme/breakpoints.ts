/**
 * Breakpoint scale optimised for tablet-first POS layouts.
 * The first entry must be 0 so Unistyles can cascade like CSS media queries.
 */

export const breakpoints = {
  /** Phones and very small windows (fallback) */
  xs: 0,
  /** Small tablets in portrait, ~600 dp */
  sm: 600,
  /** Standard tablets in portrait, ~768 dp */
  md: 768,
  /** Tablets in landscape / large tablets, ~1024 dp */
  lg: 1024,
  /** Very large tablets / desktop, ~1280 dp */
  xl: 1280,
} as const;
