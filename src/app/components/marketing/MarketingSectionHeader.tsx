import React from 'react';

export interface MarketingSectionHeaderProps {
  /**
   * Section title - uses Marketing/H2 typography
   */
  title: string | React.ReactNode;
  
  /**
   * Optional subtitle or description - uses Marketing/Body typography
   */
  description?: string | React.ReactNode;
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Marketing Section Header
 * 
 * Standard header component for marketing sections.
 * - Uses Marketing/H2 for title
 * - Uses Marketing/Body for description
 * - Follows max-w-[75ch] pattern for readability
 */
export const MarketingSectionHeader: React.FC<MarketingSectionHeaderProps> = ({
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-[75ch] ${alignClass} ${className}`}>
      {/* Title - Marketing/H2 */}
      {typeof title === 'string' ? (
        <h2 className="marketing-h2 mb-4">
          {title}
        </h2>
      ) : (
        <div className="mb-4">{title}</div>
      )}
      
      {/* Description - Marketing/Body */}
      {description && (
        typeof description === 'string' ? (
          <p className="marketing-body">
            {description}
          </p>
        ) : (
          <div>{description}</div>
        )
      )}
    </div>
  );
};