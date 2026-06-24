import React from 'react';

export interface BlogContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Blog/Content Wrapper
 * 
 * Top-level vertical auto layout container for blog article content.
 * - Direction: Vertical
 * - Spacing between items: 16px (stack-base / space-16)
 * - Padding: 0 (no horizontal padding - handled by child elements)
 * - Max width: None (children handle their own width constraints)
 * - Horizontal alignment: Centered in page frame
 * 
 * IMPORTANT: All text blocks rely on parent spacing only - no manual margins on children.
 */
export const BlogContentWrapper: React.FC<BlogContentWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div 
      className={`w-full flex flex-col gap-[var(--stack-base)] ${className}`}
    >
      {children}
    </div>
  );
};