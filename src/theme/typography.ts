/**
 * Typography scale matching the Figma text styles.
 * Arimo is the primary UI font; Inter is used for tool labels.
 */

export const typography = {
  fontFamily: {
    body: "Arimo",
    label: "Inter",
  },
  size: {
    /** 11px — small upsell descriptions */
    xs: 11,
    /** 12px — captions, subtitles, cart meta */
    sm: 12,
    /** 13px — category pills, order-type chips */
    md: 13,
    /** 14px — cart item names, bold values */
    base: 14,
    /** 15px — CTA button text */
    lg: 15,
    /** 16px — prices on menu cards */
    xl: 16,
    /** 18px — card titles */
    "2xl": 18,
    /** 20px — section headers ("Current cart") */
    "3xl": 20,
  },
  lineHeight: {
    tight: 1.1,
    normal: 1.45,
    relaxed: 1.6,
  },
} as const;
