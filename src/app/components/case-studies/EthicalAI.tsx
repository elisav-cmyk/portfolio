import React from 'react';
import heroImage from '../../../assets/jstor-research-banner.jpg';
import dynamicSearchImage from '../../../assets/jstor-dynamic-search.jpg';
import traceableImage from '../../../assets/jstor-traceable-answers.jpg';
import governanceImage from '../../../assets/governance-layered.jpg';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'ethical-ai',
  hero: {
    src: heroImage,
    alt: 'A student working with the JSTOR research tool on a laptop and phone in a library',
  },
  tag: 'AI Search',
  years: '2023-2026',
  title: 'AI That Shows Its Sources',
  subtitle: "The JSTOR Research Tool: ask, discover and validate every answer",
  role: 'Director, Product Design, JSTOR',
  partners: 'Product Management, Engineering, User Insights Research, Accessibility, institutional partners',
  glance: "Led design of JSTOR's LLM research tool from beta to about 11,400 institutions, with every answer linked to the passage it came from, so people can check what AI tells them before they rely on it.",
  context: ["When generative AI arrived in 2023, students and faculty began using consumer chatbots that could fabricate information and often didn't show where an answer came from. JSTOR needed an AI tool that met scholarly standards and earned its cost in a sustainable business model, not just a feature."],
  moves: [
    { title: "Grounded every answer in the source", paragraphs: ["I shared examples of research tools that already grounded AI answers in their sources. The team's lead designer did her own research and convinced the team to build it: every answer links to the exact passage it came from, so a researcher can validate a claim instead of taking it on faith. The model reads only the item in view, never the open web."] },
    { title: "Designed a guide, not a ghostwriter", paragraphs: ["The tool helps people frame questions and weigh sources, and it declines requests like \"write my essay.\" That choice came from \"Be the guide, not the hero,\" one of five ITHAKA design principles I co-developed in 2022."] },
    { title: "Launched small, on purpose", paragraphs: ["While the market rushed to put AI into everything, product management and design chose to launch a focused chat with Save, Download and Cite, and let weekly research reviews decide what came next."] },
    { title: "Gave institutions control", paragraphs: ["Libraries have their own policies on AI, so my team designed admin controls that let each institution turn the research tool on or off, for everyone or for specific users."] },
    { title: "Grew a designer into a leader", paragraphs: ["The lead designer has built real trust with her team and now helps shape its strategy. I coached her toward setting standards for the whole team, beyond her own projects."] },
  ],
  figures: [
    {
      after: 0,
      bordered: true,
      src: traceableImage,
      alt: 'An article open in JSTOR beside the research tool. The answer cites page numbers, and hovering over p. 53 shows the exact passage it came from.',
      caption: 'Every answer cites its pages. Hovering over a citation shows the exact passage.',
      width: 'wide',
    },
    {
      after: 3,
      bordered: true,
      src: governanceImage,
      alt: 'Governance layers around the research tool: institutional control through admin toggles, a publisher opt-out, data protections with no third-party training, and the underlying language model',
      caption: 'Institutional controls sit at the top of the governance model.',
      width: 'wide',
    },
    {
      after: 4,
      bordered: true,
      src: dynamicSearchImage,
      alt: 'JSTOR search results in Dynamic mode, with AI search suggestions, an explanation of why each result matches, and a results overview with themes',
      caption: 'Dynamic Search: AI suggestions, a reason each result matches, and an overview of themes.',
      width: 'wide',
    },
  ],
  results: ["Adoption grew from a limited beta in August 2023 to about 11,400 institutions by July 2025. Only 39 institutions opted out.", "We measured honestly. A matched before-and-after study showed much of the tool's search lift came from who chose it, so we reported that plainly and focused on trust, adoption and helping people reach the right content.", "The same grounded approach now shapes Dynamic Search, a hybrid of LLM, semantic and keyword search. From Oct. 7 to Nov. 5, 2026, 52% of its queries led people to open, read or save content, versus 39% for keyword search.", "Institutional partners called it the \"most impressive and polished integration of AI for libraries\" on the market."],
  why: ["In research, trust is the product. We know that friction aids learning, so we designed to protect the work students need to do themselves, and to use AI in ways that support that work rather than replace it."],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const EthicalAI: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
