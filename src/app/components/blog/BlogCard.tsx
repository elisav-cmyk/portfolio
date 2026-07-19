import React from 'react';
import { BlogMetaRow } from './BlogMetaRow';

export interface BlogCardProps {
  /**
   * Card title - uses Blog/H2 or Marketing/H3
   */
  title: string | React.ReactNode;
  
  /**
   * Card body text - uses Blog/Body
   */
  body?: string | React.ReactNode;
  
  /**
   * Meta information (author, date, etc.)
   */
  meta?: {
    author?: string;
    date?: string;
    readTime?: string;
    tags?: string[];
  };
  
  /**
   * Additional content
   */
  children?: React.ReactNode;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Additional className for background color
   */
  className?: string;
}

/**
 * Card / Standard
 * 
 * Shared card component for blog and marketing content.
 * - Auto layout: vertical
 * - Internal padding: 16px all around (inset-square)
 * - Spacing between internal elements: 8px (space-8)
 * - Includes: Title (Blog/H2), Body (Blog/Body), Meta row (Blog/Meta Row)
 */
export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  body,
  meta,
  children,
  onClick,
  className = '',
}) => {
  return (
    <div 
      className={`flex flex-col gap-[var(--space-8)] p-[var(--inset-square)] bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Title - Blog/H2 */}
      {typeof title === 'string' ? (
        <h2 className="font-['EB_Garamond'] text-[1.5rem] leading-[2rem] text-[#1b1c15]">
          {title}
        </h2>
      ) : (
        <div>{title}</div>
      )}
      
      {/* Body - Blog/Body */}
      {body && (
        typeof body === 'string' ? (
          <p className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-[#1b1c15]">
            {body}
          </p>
        ) : (
          <div>{body}</div>
        )
      )}
      
      {/* Meta Row */}
      {meta && (
        <BlogMetaRow
          author={meta.author}
          date={meta.date}
          readTime={meta.readTime}
          tags={meta.tags}
        />
      )}
      
      {/* Additional content */}
      {children}
    </div>
  );
};
