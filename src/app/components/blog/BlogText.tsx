import React from 'react';

export interface BlogTextProps {
  /**
   * Text content
   */
  children: React.ReactNode;
  
  /**
   * Text variant
   * - 'body': Standard body text (Blog/Body)
   * - 'lead': Larger introductory text
   * - 'small': Smaller text for captions/notes
   */
  variant?: 'body' | 'lead' | 'small';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Text
 * 
 * Text component for blog body content.
 * - Uses Blog/Body text style
 * - No manual margins (relies on parent spacing)
 * - Variants for different text sizes
 */
export const BlogText: React.FC<BlogTextProps> = ({
  children,
  variant = 'body',
  className = '',
}) => {
  const variantClass = {
    body: "font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-[#1b1c15]",
    lead: "font-['Spline_Sans'] text-[1.25rem] leading-[1.75rem] text-[#1b1c15]",
    small: "font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-[#6a7282]",
  }[variant];

  return (
    <p className={`${variantClass} ${className}`}>
      {children}
    </p>
  );
};
