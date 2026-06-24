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
      className={`flex flex-col gap-[var(--space-8)] ${listClass} font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-[#1b1c15] ${className}`}
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
