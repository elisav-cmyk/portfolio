// Not on the site yet. Kept for future blog or article pages.
// Styled with the site's tokens (font-heading, font-body, text-*, colors),
// so it matches the portfolio if you use it.
import React from 'react';
import { BlogMetaRow, BlogMetaRowProps } from './BlogMetaRow';

export interface BlogHeaderProps {
  /**
   * Article title - uses Blog/H1
   */
  title: string | React.ReactNode;
  
  /**
   * Article subtitle (optional)
   */
  subtitle?: string | React.ReactNode;
  
  /**
   * Meta information
   */
  meta?: Omit<BlogMetaRowProps, 'children' | 'className'>;
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Header
 * 
 * Article header component with title, subtitle, and metadata.
 * - Uses Blog/H1 for title
 * - Uses Blog/Body for subtitle
 * - Includes Blog/Meta Row
 * - Follows typographic rhythm: 16px spacing between elements
 * - Constrained to blog measure (650px) and centered
 */
export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  subtitle,
  meta,
  className = '',
}) => {
  return (
    <header className={`flex flex-col gap-[var(--stack-base)] blog-grid ${className}`}>
      {/* Title - Blog/H1 */}
      {typeof title === 'string' ? (
        <h1 className="font-heading text-foreground text-display">
          {title}
        </h1>
      ) : (
        <div>{title}</div>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className="font-body text-muted-foreground text-lead">
            {subtitle}
          </p>
        ) : (
          <div>{subtitle}</div>
        )
      )}
      
      {/* Meta Row */}
      {meta && <BlogMetaRow {...meta} />}
    </header>
  );
};