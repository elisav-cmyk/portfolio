import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { caseStudyPath, isPlainClick, neighbors } from '../data/caseStudies';

interface CaseStudyNavProps {
  currentProjectId: string;
  onNavigate: (caseStudyId: string) => void;
}

// Sticky bar under the site header with links to the previous and next
// case studies. It sits right below the header, whatever its height.
export const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ currentProjectId, onNavigate }) => {
  const { previous, next } = neighbors(currentProjectId);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const measure = () => {
      const header = document.getElementById('site-nav');
      setTop(header ? header.offsetHeight : 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    onNavigate(id);
  };

  const linkClass =
    "flex items-center gap-2 min-w-0 py-1 text-primary hover:text-primary/80 transition-colors rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <nav
      aria-label="Case studies"
      className="sticky z-40 bg-white/95 backdrop-blur border-b-2 border-border"
      style={{ top }}
    >
      <div className="blog-grid py-3 flex items-center justify-between gap-6 font-body text-small">
        <a href={caseStudyPath(previous.id)} onClick={go(previous.id)} className={linkClass}>
          <ChevronLeft size={18} className="shrink-0" aria-hidden="true" />
          <span className="text-muted-foreground shrink-0">Previous</span>
          <span className="hidden sm:inline truncate font-medium">{previous.title}</span>
        </a>
        <a href={caseStudyPath(next.id)} onClick={go(next.id)} className={`${linkClass} justify-end text-right`}>
          <span className="text-muted-foreground shrink-0">Next</span>
          <span className="hidden sm:inline truncate font-medium">{next.title}</span>
          <ChevronRight size={18} className="shrink-0" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};
