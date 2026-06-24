import React from 'react';
import { motion } from 'motion/react';

export interface MarketingHeroSectionProps {
  /**
   * Main headline - uses Marketing/Hero H1 typography
   */
  headline: string | React.ReactNode;
  
  /**
   * Subcopy - uses Marketing/Body typography
   */
  subcopy?: string | React.ReactNode;
  
  /**
   * Optional CTA buttons or additional content
   */
  children?: React.ReactNode;
  
  /**
   * Background color or style
   */
  className?: string;
  
  /**
   * Enable motion animations
   */
  animated?: boolean;
}

/**
 * Marketing/Hero Section
 * 
 * Component for hero sections on marketing pages.
 * - Spacing to next section: 64px (handled by parent ContentWrapper)
 * - Internal padding: 64px top/bottom, 32px left/right (space-64, space-32)
 * - Content aligned to 12-column grid, background can bleed full width
 * - Typography: Marketing/Hero H1 for headline, Marketing/Body for subcopy
 */
export const MarketingHeroSection: React.FC<MarketingHeroSectionProps> = ({
  headline,
  subcopy,
  children,
  className = '',
  animated = false,
}) => {
  const content = (
    <div 
      className={`py-[var(--space-64)] px-[var(--space-32)] ${className}`}
    >
      <div className="max-w-[75ch] mx-auto text-center">
        {/* Headline - Marketing/Hero H1 */}
        {typeof headline === 'string' ? (
          <h1 className="marketing-hero-h1 mb-6">
            {headline}
          </h1>
        ) : (
          <div className="mb-6">{headline}</div>
        )}
        
        {/* Subcopy - Marketing/Body */}
        {subcopy && (
          typeof subcopy === 'string' ? (
            <p className="marketing-body mb-8">
              {subcopy}
            </p>
          ) : (
            <div className="mb-8">{subcopy}</div>
          )
        )}
        
        {/* Additional content (CTAs, etc.) */}
        {children && (
          <div className="flex gap-4 justify-center flex-wrap">
            {children}
          </div>
        )}
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};