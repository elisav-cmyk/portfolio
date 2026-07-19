import React from 'react';
import { motion } from 'motion/react';

export interface MarketingCardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  
  /**
   * Card variant
   * - 'default': Standard card with shadow
   * - 'outlined': Border only, no shadow
   * - 'flat': No shadow or border
   */
  variant?: 'default' | 'outlined' | 'flat';
  
  /**
   * Padding size
   * - 'small': 16px (space-16)
   * - 'medium': 24px (space-24)
   * - 'large': 32px (space-32)
   */
  padding?: 'small' | 'medium' | 'large';
  
  /**
   * Background color/className
   */
  className?: string;
  
  /**
   * Enable hover effect
   */
  hoverable?: boolean;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Enable motion animations
   */
  animated?: boolean;
}

/**
 * Marketing Card
 * 
 * Reusable card component for marketing content.
 * - Multiple variants for different use cases
 * - Uses spacing variables for padding
 * - Optional hover and click interactions
 */
export const MarketingCard: React.FC<MarketingCardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  className = '',
  hoverable = false,
  onClick,
  animated = false,
}) => {
  // Determine padding class
  const paddingClass = {
    small: 'p-[var(--space-16)]',
    medium: 'p-[var(--space-24)]',
    large: 'p-[var(--space-32)]',
  }[padding];

  // Determine variant styles
  const variantClass = {
    default: 'bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]',
    outlined: 'bg-white rounded-[10px] border-2 border-border',
    flat: 'bg-white rounded-[10px]',
  }[variant];

  // Hover effect
  const hoverClass = hoverable ? 'hover:shadow-lg transition-shadow cursor-pointer' : '';

  const cardContent = (
    <div 
      className={`${variantClass} ${paddingClass} ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={hoverable ? { scale: 1.02 } : undefined}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};