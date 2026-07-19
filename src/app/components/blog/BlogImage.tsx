import React from 'react';

export interface BlogImageProps {
  /**
   * Image source URL
   */
  src: string;
  
  /**
   * Image alt text
   */
  alt: string;
  
  /**
   * Optional caption
   */
  caption?: string | React.ReactNode;
  
  /**
   * Image size variant
   * - 'full-bleed': Full viewport width (breaks out of content constraint)
   * - 'content': Full content width within 650px measure (default)
   * - 'large': Large but not full content width
   * - 'medium': Medium width
   */
  size?: 'full-bleed' | 'content' | 'large' | 'medium';
  
  /**
   * Additional className for the container
   */
  className?: string;
}

/**
 * Blog Image
 * 
 * Image component for blog articles with optional caption.
 * - Full-bleed by default (full viewport width)
 * - Optional caption with Blog/Meta text style
 * - Follows typographic rhythm with 8px spacing
 */
export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  caption,
  size = 'full-bleed',
  className = '',
}) => {
  // Full-bleed images break out to full viewport width
  if (size === 'full-bleed') {
    return (
      <figure className={`flex flex-col gap-[var(--space-8)] w-full ${className}`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full"
        />
        
        {caption && (
          <figcaption className="blog-grid font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-[#6a7282] text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Content-constrained images use blog-grid class
  const sizeClass = {
    content: 'w-full',
    large: 'w-5/6 mx-auto',
    medium: 'w-2/3 mx-auto',
  }[size];

  return (
    <figure className={`flex flex-col gap-[var(--space-8)] blog-grid ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className={`${sizeClass} rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]`}
      />
      
      {caption && (
        <figcaption className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-[#6a7282] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};