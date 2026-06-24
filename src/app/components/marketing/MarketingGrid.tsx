import React from 'react';

export interface MarketingGridProps {
  /**
   * Grid content
   */
  children: React.ReactNode;
  
  /**
   * Number of columns (uses CSS Grid)
   * - 2: 2-column grid
   * - 3: 3-column grid
   * - 4: 4-column grid
   * - 12: Full 12-column grid
   */
  columns?: 2 | 3 | 4 | 12;
  
  /**
   * Column span for direct children (for 12-column grid)
   * Example: [6, 6] for two items spanning 6 columns each
   */
  columnSpans?: number[];
  
  /**
   * Gap between items (uses spacing variables)
   */
  gap?: 'small' | 'medium' | 'large';
  
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Marketing Grid
 * 
 * Grid layout component for marketing page content.
 * - Uses the 12-column marketing grid system
 * - Supports common column configurations
 * - Gap uses spacing variables
 */
export const MarketingGrid: React.FC<MarketingGridProps> = ({
  children,
  columns = 3,
  columnSpans,
  gap = 'medium',
  className = '',
}) => {
  // Determine gap size using spacing variables
  const gapClass = {
    small: 'gap-[var(--space-16)]',
    medium: 'gap-[var(--space-24)]',
    large: 'gap-[var(--space-32)]',
  }[gap];

  // Determine column configuration
  const gridClass = columns === 12 
    ? 'marketing-grid-cols' // Use the 12-column grid class
    : `grid-cols-1 md:grid-cols-${columns}`;

  return (
    <div className={`grid ${gridClass} ${gapClass} ${className}`}>
      {columnSpans && columns === 12 ? (
        // Apply custom column spans to children
        React.Children.map(children, (child, index) => {
          const span = columnSpans[index] || 1;
          return (
            <div style={{ gridColumn: `span ${span}` }}>
              {child}
            </div>
          );
        })
      ) : (
        children
      )}
    </div>
  );
};