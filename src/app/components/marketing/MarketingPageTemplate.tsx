import React from 'react';
import { motion } from 'motion/react';

export interface MarketingPageTemplateProps {
  children: React.ReactNode;
  className?: string;
  pageVariants?: any;
  pageTransition?: any;
}

/**
 * Marketing Page Template
 * 
 * Frame archetype for marketing pages following the design system.
 * - 12-column stretch grid (24px gutters, 64px margins)
 * - 4px baseline grid for vertical rhythm
 * - Uses spacing variables from design tokens
 */
export const MarketingPageTemplate: React.FC<MarketingPageTemplateProps> = ({
  children,
  className = '',
  pageVariants,
  pageTransition,
}) => {
  const content = (
    <div className={`marketing-grid ${className}`}>
      {children}
    </div>
  );

  // If animation variants are provided, wrap in motion.div
  if (pageVariants && pageTransition) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};