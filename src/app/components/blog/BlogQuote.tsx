// Not on the site yet. Kept for future blog or article pages.
// Styled with the site's tokens (font-heading, font-body, text-*, colors),
// so it matches the portfolio if you use it.
import React from 'react';

export interface BlogQuoteProps {
  /**
   * Quote text
   */
  children: React.ReactNode;
  
  /**
   * Quote author/attribution
   */
  author?: string;
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Quote
 * 
 * Blockquote component for blog articles.
 * - Uses Blog/Body text style with styling
 * - Optional attribution
 * - Follows typographic rhythm with 16px spacing
 */
export const BlogQuote: React.FC<BlogQuoteProps> = ({
  children,
  author,
  className = '',
}) => {
  return (
    <blockquote 
      className={`flex flex-col gap-[var(--stack-base)] border-l-4 border-primary pl-[var(--space-24)] py-[var(--space-8)] ${className}`}
    >
      <p className="font-heading text-foreground italic text-quote">
        {children}
      </p>
      
      {author && (
        <cite className="font-body text-muted-foreground not-italic text-small">
          — {author}
        </cite>
      )}
    </blockquote>
  );
};
