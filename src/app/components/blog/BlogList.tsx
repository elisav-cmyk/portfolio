// Not on the site yet. Kept for future blog or article pages.
// Styled with the site's tokens (font-heading, font-body, text-*, colors),
// so it matches the portfolio if you use it.
import React from 'react';

export interface BlogListProps {
  /**
   * List items
   */
  items: (string | React.ReactNode)[];
  
  /**
   * List type
   * - 'unordered': Bullet list (default)
   * - 'ordered': Numbered list
   */
  type?: 'unordered' | 'ordered';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog List
 * 
 * List component for blog articles (ordered or unordered).
 * - Uses Blog/Body text style
 * - Spacing between items: 8px (space-8)
 * - No manual margins (relies on parent spacing)
 */
export const BlogList: React.FC<BlogListProps> = ({
  items,
  type = 'unordered',
  className = '',
}) => {
  const ListTag = type === 'ordered' ? 'ol' : 'ul';
  const listClass = type === 'ordered' 
    ? 'list-decimal list-inside' 
    : 'list-disc list-inside';

  return (
    <ListTag 
      className={`flex flex-col gap-[var(--space-8)] ${listClass} font-body text-foreground ${className} text-body`}
      style={{
        fontVariantNumeric: type === 'ordered' ? 'oldstyle-nums' : 'normal',
      }}
    >
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' ? item : <div>{item}</div>}
        </li>
      ))}
    </ListTag>
  );
};
