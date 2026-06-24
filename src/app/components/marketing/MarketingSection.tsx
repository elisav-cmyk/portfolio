import React from 'react';
import { motion } from 'motion/react';

export interface MarketingSectionProps {
  /**
   * Section content
   */
  children: React.ReactNode;
  
  /**
   * Section variant type
   * - 'standard': padding 32px (space-32) all sides
   * - 'featured': padding 24px vertical, 16px horizontal (inset-stretch-y, inset-stretch-x)
   */
  variant?: 'standard' | 'featured';
  
  /**
   * Additional className for background colors or custom styling
   */
  className?: string;
  
  /**
   * ID for section anchoring
   */
  id?: string;
  
  /**
   * Enable motion animations
   */
  animated?: boolean;
  
  /**
   * Custom spacing override (defaults to 48px between section chunks)
   */
  spacing?: 'default' | 'tight' | 'loose';
}

/**
 * Marketing Section
 * 
 * Reusable section component for marketing pages.
 * - Vertical auto layout with spacing = 48px (space-48) between main chunks
 * - Two variants:
 *   - Standard: padding 32px (space-32)
 *   - Featured: padding 24px vertical, 16px horizontal
 */
export const MarketingSection: React.FC<MarketingSectionProps> = ({
  children,
  variant = 'standard',
  className = '',
  id,
  animated = false,
  spacing = 'default',
}) => {
  // Determine padding based on variant
  const paddingClass = variant === 'standard' 
    ? 'p-[var(--space-32)]' 
    : 'py-[var(--space-24)] px-[var(--space-16)]';
  
  // Determine internal spacing
  const spacingClass = {
    default: 'gap-[var(--space-48)]',
    tight: 'gap-[var(--space-32)]',
    loose: 'gap-[var(--space-64)]',
  }[spacing];

  const content = (
    <section 
      id={id}
      className={`flex flex-col ${spacingClass} ${paddingClass} ${className}`}
    >
      {children}
    </section>
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