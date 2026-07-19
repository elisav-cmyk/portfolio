/**
 * Design system primitive values
 * These are the foundational tokens used throughout the application
 */

export const primitives = {
  colors: {
    primary: '#546524',
    secondary: '#e3e4d3',
    border: '#c6c8b8',
    foreground: '#1b1c15',
    background: '#ffffff',
    muted: '#6a7282',
    accent: '#6a3458',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  typography: {
    fontFamilies: {
      heading: 'EB Garamond',
      body: 'Spline Sans',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    lineHeights: {
      tight: '1.1',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  contentWidth: {
    standard: '1104px',
    narrow: '928px',
    wide: '1280px',
  },
} as const;

// Export types derived from the primitives
export type Primitives = typeof primitives;
export type Color = keyof typeof primitives.colors;
export type Spacing = keyof typeof primitives.spacing;
export type FontFamily = keyof typeof primitives.typography.fontFamilies;
export type FontSize = keyof typeof primitives.typography.fontSizes;
export type Breakpoint = keyof typeof primitives.breakpoints;
