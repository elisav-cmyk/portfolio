import React from 'react';

export interface BlogDividerProps {
  /**
   * Divider style
   * - 'line': Horizontal line (default)
   * - 'dots': Three dots
   * - 'space': Just vertical spacing
   */
  variant?: 'line' | 'dots' | 'space';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Divider
 * 
 * Section divider component for blog articles.
 * - Multiple variants for different separation styles
 * - Follows spacing rhythm
 * - Constrained to blog measure (650px) and centered
 */
export const BlogDivider: React.FC<BlogDividerProps> = ({
  variant = 'line',
  className = '',
}) => {
  if (variant === 'space') {
    return <div className={`h-[var(--space-32)] ${className}`} />;
  }

  if (variant === 'dots') {
    return (
      <div className={`blog-grid flex items-center justify-center gap-[var(--space-8)] text-[#c6c8b8] ${className}`}>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    );
  }

  // Default: line
  return (
    <hr className={`blog-grid border-0 border-t-2 border-[#c6c8b8] ${className}`} />
  );
};