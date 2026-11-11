// Not on the site yet. Kept for future blog or article pages.
// Styled with the site's tokens (font-heading, font-body, text-*, colors),
// so it matches the portfolio if you use it.
import React from 'react';

export interface BlogMetaRowProps {
  /**
   * Author name
   */
  author?: string;
  
  /**
   * Publication date (will use oldstyle numerals)
   */
  date?: string;
  
  /**
   * Read time (will use oldstyle numerals)
   */
  readTime?: string;
  
  /**
   * Tags array
   */
  tags?: string[];
  
  /**
   * Custom meta items (for flexibility)
   */
  children?: React.ReactNode;
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog/Meta Row
 * 
 * Horizontal layout for article metadata (author, date, tags, read time).
 * - Layout: Horizontal auto layout
 * - Gap between items: 8px (space-8)
 * - Uses oldstyle numerals for dates and read-time values
 * - Uses Blog/Meta text style
 */
export const BlogMetaRow: React.FC<BlogMetaRowProps> = ({
  author,
  date,
  readTime,
  tags,
  children,
  className = '',
}) => {
  return (
    <div 
      className={`flex flex-wrap items-center gap-[var(--space-8)] font-body text-muted-foreground ${className} text-small`}
      style={{
        fontVariantNumeric: 'oldstyle-nums', // Oldstyle numerals for dates and read time
      }}
    >
      {author && <span>{author}</span>}
      
      {author && (date || readTime || tags) && (
        <span className="text-border">•</span>
      )}
      
      {date && <time>{date}</time>}
      
      {date && (readTime || tags) && (
        <span className="text-border">•</span>
      )}
      
      {readTime && <span>{readTime}</span>}
      
      {readTime && tags && (
        <span className="text-border">•</span>
      )}
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-[var(--space-8)]">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-label"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
};
