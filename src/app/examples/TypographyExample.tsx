import React from 'react';
import { 
  getCompleteTypographyStyles, 
  getTypographyStyles,
  getResponsiveFontSize,
  typographyTokens 
} from '../utils/typography';

/**
 * Example component demonstrating how to use typography tokens
 */
export const TypographyExample: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1>Typography Token Examples</h1>
      
      {/* Method 1: Using complete styles (recommended) */}
      <div>
        <h2 className="mb-4">Method 1: Complete Styles (Recommended)</h2>
        <div style={getCompleteTypographyStyles(typographyTokens.displayLg)}>
          Display Large - Responsive sizing with clamp()
        </div>
        <div style={getCompleteTypographyStyles(typographyTokens.displayMd)}>
          Display Medium - Responsive sizing
        </div>
        <div style={getCompleteTypographyStyles(typographyTokens.bodyLg)}>
          Body Large - Clean and readable text for longer content
        </div>
      </div>

      {/* Method 2: Using individual style properties */}
      <div>
        <h2 className="mb-4">Method 2: Individual Properties</h2>
        <div style={{
          ...getTypographyStyles(typographyTokens.headlineLg),
          fontSize: getResponsiveFontSize(typographyTokens.headlineLg)
        }}>
          Headline Large - Custom composition
        </div>
      </div>

      {/* Method 3: Using with Tailwind (className approach) */}
      <div>
        <h2 className="mb-4">Method 3: Inline Styles with JSX</h2>
        <h1 
          style={{
            fontFamily: "'EB Garamond'",
            fontSize: getResponsiveFontSize(typographyTokens.displayLg),
            lineHeight: '110%',
            fontWeight: '400',
            letterSpacing: '-2%'
          }}
        >
          Display Large Heading
        </h1>
        
        <p 
          style={{
            fontFamily: "'Spline Sans'",
            fontSize: getResponsiveFontSize(typographyTokens.bodyMd),
            lineHeight: '150%',
            fontWeight: '400'
          }}
        >
          Body text using Spline Sans with responsive sizing. This will scale smoothly from mobile to desktop viewport sizes.
        </p>
      </div>

      {/* All Typography Tokens Demo */}
      <div>
        <h2 className="mb-4">All Typography Tokens</h2>
        <div className="space-y-4">
          {Object.entries(typographyTokens).map(([key, token]) => (
            <div key={key} style={getCompleteTypographyStyles(token)}>
              {key}: The quick brown fox jumps over the lazy dog
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypographyExample;
