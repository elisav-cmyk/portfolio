import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { caseStudyPath, isPlainClick, neighbors } from '../data/caseStudies';

interface CaseStudyFooterProps {
  currentProjectId: string;
  onNavigate?: (caseStudyId: string) => void;
}

export const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({ currentProjectId, onNavigate }) => {
  const { previous, next } = neighbors(currentProjectId);

  const go = (id: string) => (e: React.MouseEvent) => {
    if (!onNavigate || !isPlainClick(e)) return;
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <div className="bg-[#F7F9F4] mt-16">
      <nav aria-label="More case studies" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-6">
          <a
            href={caseStudyPath(previous.id)}
            onClick={go(previous.id)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ChevronLeft size={20} aria-hidden="true" />
            <div className="text-left">
              <div className="text-sm">Previous</div>
              <div className="font-medium">{previous.title}</div>
            </div>
          </a>
          <a
            href={caseStudyPath(next.id)}
            onClick={go(next.id)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <div className="text-right">
              <div className="text-sm">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ChevronRight size={20} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  );
};
