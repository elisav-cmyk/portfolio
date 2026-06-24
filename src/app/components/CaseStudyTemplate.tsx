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
                    className="bg-[#546524] text-white font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15]">
              {title}
            </h1>
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              {subtitle}
            </h2>
          </div>

          {/* Context & Business Challenge */}
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              {context.title}
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              {context.content}
            </div>
          </div>

          {/* Design Leadership & Approach */}
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              {leadership.title}
            </h2>
            
            <div className="flex flex-col gap-[24px]">
              {leadership.sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-[12px]">
                  <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                    {section.heading}
                  </h3>
                  <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes & Impact */}
          <div className="flex flex-col gap-[18px]">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              {outcomes.title}
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              {outcomes.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
