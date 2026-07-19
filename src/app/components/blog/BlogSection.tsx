import React from 'react';

export interface BlogSectionProps {
  /**
   * Section heading (optional) - uses Blog/H2
   */
  heading?: string | React.ReactNode;
  
  /**
   * Section content
   */
  children: React.ReactNode;
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Blog Section
 * 
 * Content section component for blog articles.
 * - Vertical auto layout with 16px spacing (stack-base)
 * - Optional heading using Blog/H2
 * - All child elements rely on parent spacing (no manual margins)
 * - Constrained to blog measure (650px) and centered
 */
export const BlogSection: React.FC<BlogSectionProps> = ({
  heading,
  children,
  className = '',
}) => {
  return (
    <section className={`flex flex-col gap-[var(--stack-base)] blog-grid ${className}`}>
      {/* Section Heading - Blog/H2 */}
      {heading && (
        typeof heading === 'string' ? (
          <h2 className="font-['EB_Garamond'] text-[1.5rem] leading-[2rem] text-[#1b1c15]">
            {heading}
          </h2>
        ) : (
          <div>{heading}</div>
        )
      )}
      
      {/* Section Content */}
      {children}
    </section>
  );
};