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
        <h1 className="font-['EB_Garamond'] text-[2.5rem] leading-[3rem] text-[#1b1c15]">
          {title}
        </h1>
      ) : (
        <div>{title}</div>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className="font-['Spline_Sans'] text-[1.25rem] leading-[1.75rem] text-[#4a5565]">
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