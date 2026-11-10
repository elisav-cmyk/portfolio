import React from 'react';
import svgPaths from '../imports/svg-jk910edihk';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onScrollToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToTop }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onScrollToTop) onScrollToTop();
  };

  const handleNavigation = (e: React.MouseEvent, page: string) => {
    // Let Cmd-click, Ctrl-click and middle-click open a new tab.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white content-stretch flex flex-col items-center pb-0 pt-[2px] px-0 relative w-full border-t-2 border-border">
      <div className="h-auto relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center px-[36px] py-[27px] relative w-full">
            {/* Main Content */}
            <div className="content-start flex flex-col md:flex-row md:justify-between gap-6 items-start relative shrink-0 w-full max-w-[976px]">
              {/* Left Column - Name and Title */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full md:w-[284px]">
                    <div className="h-[24px] relative shrink-0 w-full">
                      <p className="absolute font-['EB_Garamond',serif] font-normal leading-[32px] left-0 text-text-dark text-[24px] text-nowrap top-0 whitespace-pre">
                        ELISA VARGAS
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col font-['Spline_Sans',sans-serif] font-normal gap-[6px] items-start leading-[20px] relative shrink-0 text-primary text-[14px] tracking-[0.25px] w-full">
                      <p className="h-[24px] relative shrink-0 w-full text-foreground">Director, Product Design</p>
                      <p className="relative shrink-0 w-full text-foreground">Adjunct Faculty, Northwestern University</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Columns - Navigation and Connect (Grouped) */}
              <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[36px] items-start relative shrink-0">
                {/* Navigation Column */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                  {/* Back to Top */}
                  <button
                    type="button"
                    onClick={handleScrollToTop}
                    className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <p className="font-['Spline_Sans',sans-serif] font-normal leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Back to the top
                    </p>
                    <div className="h-[23px] relative shrink-0 w-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
                        <g>
                          <path d={svgPaths.p753d040} fill="#3D4C0D" />
                        </g>
                      </svg>
                    </div>
                  </button>

                  {/* Home */}
                  <a
                    href="/"
                    onClick={(e) => handleNavigation(e, 'home')}
                    className="content-stretch flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <p className="font-['Spline_Sans',sans-serif] font-semibold leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Home
                    </p>
                  </a>

                  {/* Work */}
                  <a
                    href="/work"
                    onClick={(e) => handleNavigation(e, 'work')}
                    className="content-stretch flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <p className="font-['Spline_Sans',sans-serif] font-semibold leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Work
                    </p>
                  </a>

                  {/* Leadership */}
                  <a
                    href="/leadership"
                    onClick={(e) => handleNavigation(e, 'leadership')}
                    className="content-stretch flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <p className="font-['Spline_Sans',sans-serif] font-semibold leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Leadership
                    </p>
                  </a>

                  {/* Impact */}
                  <a
                    href="/impact"
                    onClick={(e) => handleNavigation(e, 'impact')}
                    className="content-stretch flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <p className="font-['Spline_Sans',sans-serif] font-semibold leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Impact
                    </p>
                  </a>
                </div>

                {/* Connect Column */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                  {/* Connect Header */}
                  <div className="content-stretch flex items-start relative shrink-0">
                    <p className="font-['Spline_Sans',sans-serif] font-semibold leading-[20px] relative shrink-0 text-text-dark text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                      Connect
                    </p>
                  </div>

                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                    {/* Email */}
                    <a
                      href="mailto:elisav@gmail.com"
                      className="content-stretch flex gap-[10px] items-center relative shrink-0 hover:opacity-70 transition-opacity"
                    >
                      <p className="font-['Spline_Sans',sans-serif] font-normal leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                        Email
                      </p>
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p362c2d00} fill="#3D4C0D" />
                          </g>
                        </svg>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/elisavargas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-stretch flex gap-[10px] items-center relative shrink-0 hover:opacity-70 transition-opacity"
                    >
                      <p className="font-['Spline_Sans',sans-serif] font-normal leading-[20px] relative shrink-0 text-primary text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                        LinkedIn
                      </p>
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p362c2d00} fill="#3D4C0D" />
                          </g>
                        </svg>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="content-stretch flex items-start relative shrink-0">
                      <p className="font-['Spline_Sans',sans-serif] font-normal leading-[20px] relative shrink-0 text-text-dark text-[14px] text-nowrap tracking-[0.25px] whitespace-pre">
                        Chicago, Illinois
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="content-stretch flex items-center justify-center pb-0 pt-[9px] px-0 relative shrink-0 w-full max-w-[976px]">
              <div aria-hidden="true" className="absolute border-border border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
              <p className="font-['Spline_Sans',sans-serif] font-medium leading-[16px] relative shrink-0 text-text-dark text-[12px] text-center tracking-[0.5px] w-fit whitespace-nowrap">
                © {new Date().getFullYear()} Elisa Vargas
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};