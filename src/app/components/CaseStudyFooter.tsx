import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CaseStudyFooterProps {
  currentProjectId: string;
  onNavigate?: (caseStudyId: string) => void;
}

// Main case studies in navigation order
const MAIN_PROJECTS = [
  { id: 'ethical-ai', title: 'Ethical AI Research Tool', company: 'JSTOR' },
  { id: 'razr-foldable', title: 'Android RAZR Foldable', company: 'Motorola' },
  { id: 'one-platform', title: 'One Platform Integration', company: 'JSTOR' },
  { id: 'ai-library', title: 'AI-Assisted Library Transformation', company: 'JSTOR' },
  { id: 'grubhub-direct', title: 'Grubhub Direct', company: 'Grubhub' },
  { id: 'ecosystem-infrastructure', title: 'Ecosystem & Design Infrastructure', company: 'JSTOR' },
];

export const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({ currentProjectId, onNavigate }) => {
  // Find current project index
  const currentIndex = MAIN_PROJECTS.findIndex(project => project.id === currentProjectId);
  
  // Calculate previous and next indices (circular)
  const previousIndex = currentIndex === 0 ? MAIN_PROJECTS.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === MAIN_PROJECTS.length - 1 ? 0 : currentIndex + 1;
  
  const previousProject = MAIN_PROJECTS[previousIndex];
  const nextProject = MAIN_PROJECTS[nextIndex];

  const handlePrevious = () => {
    if (onNavigate && previousProject) {
      onNavigate(previousProject.id);
    }
  };

  const handleNext = () => {
    if (onNavigate && nextProject) {
      onNavigate(nextProject.id);
    }
  };

  return (
    <div className="bg-[#F7F9F4] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevious}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft size={20} />
            <div className="text-left">
              <div className="text-sm">Previous</div>
              {previousProject && (
                <div className="font-medium">{previousProject.title}</div>
              )}
            </div>
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <div className="text-right">
              <div className="text-sm">Next</div>
              {nextProject && (
                <div className="font-medium">{nextProject.title}</div>
              )}
            </div>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};