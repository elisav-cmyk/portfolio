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
      <p className="font-['EB_Garamond'] text-[1.25rem] leading-[1.75rem] text-[#1b1c15] italic">
        {children}
      </p>
      
      {author && (
        <cite className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-[#6a7282] not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
};
