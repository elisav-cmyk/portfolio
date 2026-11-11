import React from 'react';

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  tags?: string[];
  context: {
    title: string;
    content: React.ReactNode;
  };
  leadership: {
    title: string;
    sections: Array<{
      heading: string;
      content: React.ReactNode;
    }>;
  };
  outcomes: {
    title: string;
    content: React.ReactNode;
  };
}

export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  tags,
  context,
  leadership,
  outcomes,
}) => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      {heroImage && (
        <div className="w-full h-[100dvh] overflow-clip">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full flex flex-col items-center px-0 py-[48px]">
        <div className="w-full max-w-[968px] px-6 sm:px-8 flex flex-col gap-[48px]">
          
          {/* Title Section */}
          <div className="flex flex-col gap-[24px]">
            {tags && tags.length > 0 && (
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#546524] text-white font-body px-3 py-1 rounded-full text-label"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-heading text-[#1b1c15] text-display">
              {title}
            </h1>
            <h2 className="font-heading text-[#1b1c15] text-h2">
              {subtitle}
            </h2>
          </div>

          {/* Context & Business Challenge */}
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-heading text-[#1b1c15] text-h2">
              {context.title}
            </h2>
            <div className="font-body text-[#1b1c15] text-body">
              {context.content}
            </div>
          </div>

          {/* Design Leadership & Approach */}
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-heading text-[#1b1c15] text-h2">
              {leadership.title}
            </h2>
            
            <div className="flex flex-col gap-[24px]">
              {leadership.sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-[12px]">
                  <h3 className="font-heading text-[#1b1c15] text-h3">
                    {section.heading}
                  </h3>
                  <div className="font-body text-[#1b1c15] text-body">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes & Impact */}
          <div className="flex flex-col gap-[18px]">
            <h2 className="font-heading text-[#1b1c15] text-h2">
              {outcomes.title}
            </h2>
            <div className="font-body text-[#1b1c15] text-body">
              {outcomes.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
