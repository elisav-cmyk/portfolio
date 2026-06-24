import typographyTokens from '../tokens/typography.json';

export type TypographyToken = keyof typeof typographyTokens.typography;

interface TypographyStyles {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  fontSize: {
    mobile: string;
    desktop: string;
  };
}

/**
 * Get typography token values
 * @param token - The typography token name (e.g., 'text-display-lg')
 * @returns The typography styles for the token
 */
export function getTypographyToken(token: TypographyToken): TypographyStyles {
  return typographyTokens.typography[token].value as TypographyStyles;
}

/**
 * Generate CSS class string for a typography token with responsive font sizes
 * @param token - The typography token name
 * @returns Tailwind-compatible style object
 */
export function getTypographyStyles(token: TypographyToken) {
  const styles = getTypographyToken(token);
  
  return {
    fontFamily: `'${styles.fontFamily}'`,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight,
    letterSpacing: styles.letterSpacing || '0',
  };
}

/**
 * Generate responsive font size using clamp() based on mobile and desktop values
 * @param token - The typography token name
 * @returns CSS clamp() string for responsive font sizing
 */
export function getResponsiveFontSize(token: TypographyToken): string {
  const styles = getTypographyToken(token);
  const mobileSize = parseFloat(styles.fontSize.mobile);
  const desktopSize = parseFloat(styles.fontSize.desktop);
  
  // If sizes are the same, just return the static size
  if (mobileSize === desktopSize) {
    return styles.fontSize.mobile;
  }
  
  // Calculate viewport-based scaling
  // Assuming mobile breakpoint at 375px and desktop at 1440px
  const minVw = 375;
  const maxVw = 1440;
  const slope = (desktopSize - mobileSize) / (maxVw - minVw);
  const yIntercept = mobileSize - slope * minVw;
  const vwValue = (slope * 100).toFixed(4);
  
  return `clamp(${styles.fontSize.mobile}, ${yIntercept.toFixed(4)}px + ${vwValue}vw, ${styles.fontSize.desktop})`;
}

/**
 * Get complete typography styles including responsive font size
 * @param token - The typography token name
 * @returns Complete style object ready to use in components
 */
export function getCompleteTypographyStyles(token: TypographyToken) {
  const baseStyles = getTypographyStyles(token);
  const fontSize = getResponsiveFontSize(token);
  
  return {
    ...baseStyles,
    fontSize,
  };
}

// Export all typography token names for autocomplete
export const typographyTokens = {
  displayLg: 'text-display-lg' as const,
  displayMd: 'text-display-md' as const,
  displaySm: 'text-display-sm' as const,
  headlineLg: 'text-headline-lg' as const,
  headlineMd: 'text-headline-md' as const,
  bodyLg: 'text-body-lg' as const,
  bodyMd: 'text-body-md' as const,
  labelMd: 'text-label-md' as const,
  labelSm: 'text-label-sm' as const,
};
