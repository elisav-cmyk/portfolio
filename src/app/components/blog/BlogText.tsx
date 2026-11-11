// Not on the site yet. Kept for future blog or article pages.
// Styled with the site's tokens (font-heading, font-body, text-*, colors),
// so it matches the portfolio if you use it.
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
    body: "font-body text-foreground text-body",
    lead: "font-body text-foreground text-lead",
    small: "font-body text-muted-foreground text-small",
  }[variant];

  return (
    <p className={`${variantClass} ${className}`}>
      {children}
    </p>
  );
};
