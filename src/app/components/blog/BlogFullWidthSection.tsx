import React from 'react';

export interface BlogFullWidthSectionProps {
  /**
   * Section content
   */
  children: React.ReactNode;
  
  /**
   * Background color className (e.g., 'bg-secondary', 'bg-primary')
   */
  backgroundColor?: string;
  
  /**
   * Vertical padding
   * - 'small': 32px (space-32)
   * - 'medium': 48px (space-48)
   * - 'large': 64px (space-64)
   */
  padding?: 'small' | 'medium' | 'large';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Full Width Section
 * 
 * Full viewport width section with background color for blog pages.
 * - Extends to full viewport width
 * - Content inside is constrained to blog measure (650px) and centered
 * - Vertical padding options
 * - Useful for callouts, quotes, or featured content
 */
export const BlogFullWidthSection: React.FC<BlogFullWidthSectionProps> = ({
  children,
  backgroundColor = '',
  padding = 'medium',
  className = '',
}) => {
  const paddingClass = {
    small: 'py-[var(--space-32)]',
    medium: 'py-[var(--space-48)]',
    large: 'py-[var(--space-64)]',
  }[padding];

  return (
    <div className={`w-full ${backgroundColor} ${paddingClass} ${className}`}>
      <div className="blog-grid">
        {children}
      </div>
    </div>
  );
};
