import React from 'react';
import { motion } from 'motion/react';

export interface BlogPageTemplateProps {
  children: React.ReactNode;
  className?: string;
  pageVariants?: any;
  pageTransition?: any;
}

/**
 * Blog Page Template
 * 
 * Frame archetype for blog/case study pages following the design system.
 * - Single centered column layout (max width 650px)
 * - 4px baseline grid for vertical rhythm
 * - Uses spacing variables from design tokens
 */
export const BlogPageTemplate: React.FC<BlogPageTemplateProps> = ({
  children,
  className = '',
  pageVariants,
  pageTransition,
}) => {
  const content = (
    <div className={`blog-container ${className}`}>
      {children}
    </div>
  );

  // If animation variants are provided, wrap in motion.div
  if (pageVariants && pageTransition) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
