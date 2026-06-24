import React from 'react';

export interface MarketingContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Marketing/Content Wrapper
 * 
 * Top-level vertical auto layout container for marketing page content.
 * - Direction: Vertical
 * - Spacing between items: 64px (space-64)
 * - Padding: 64px top/bottom, 24px left/right (space-64, space-24)
 * - Width: Fill container
 * - Clips content: No
 */
export const MarketingContentWrapper: React.FC<MarketingContentWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div 
      className={`flex flex-col gap-[var(--space-64)] py-[var(--space-64)] px-[var(--space-24)] w-full ${className}`}
      style={{
        overflow: 'visible', // Clips content: No
      }}
    >
      {children}
    </div>
  );
};