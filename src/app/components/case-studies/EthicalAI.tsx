import React from 'react';
import heroImage from '../../../assets/jstor-research-banner.jpg';
import dynamicSearchImage from '../../../assets/jstor-dynamic-search.jpg';
import traceableImage from 'figma:asset/a72184f5b2b8091a17608300f53e559bab83a11c.png';
import governanceImage from '../../../assets/governance-layered.jpg';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'ethical-ai',
  hero: {
    src: heroImage,
    alt: 'A student working with the JSTOR research tool on a laptop and phone in a library',
  },
  tag: 'AI Ethics',
  years: '2023-2026',
  title: 'AI That Shows Its Sources',
  subtitle: "The JSTOR Research Tool: ask, discover and validate every answer",
  role: 'Product Design Director, JSTOR',
  partners: 'Product Management, Engineering, User Insights Research, Accessibility, institutional partners',
  context: [
    "When generative AI arrived in 2023, students and faculty quickly began using consumer chatbots for research. Those tools could fabricate information and often didn't show where an answer came from, which runs against everything academic work depends on. JSTOR needed an AI tool that met scholarly standards; otherwise it risked becoming a place people skipped on the way to a chatbot. The tool was also costly to run, so it had to earn its place in a sustainable business model, not just exist as a feature.",
  ],
  moves: [
    {
      title: 'Grounded every answer in the source',
      paragraphs: [
        "I don't usually hand my designers hard requirements; I'd rather bring examples and help them find their own answer. Here, I shared examples from STEM research tools on the open web that were already grounding AI answers in their sources. The team's lead designer, the only designer on the team, did her own research and convinced the team to build it: every AI answer links to the exact passage it came from, so a researcher can validate a claim instead of taking it on faith. The model reads only the item in view, never the open web.",
      ],
    },
    {
      title: 'Designed a guide, not a ghostwriter',
      paragraphs: [
        'The tool helps people frame questions, weigh sources and build arguments, and it declines requests like "write my essay." That choice came straight from "Be the guide, not the hero," one of five ITHAKA design principles I co-developed in 2022 with Liza Pagano, Director of Brand + Creative. We later mapped the principle to the ACRL Framework for Information Literacy, which treats research as a set of habits, such as framing a question, evaluating a source and building an argument, rather than a single search for an answer.',
      ],
    },
    {
      title: 'Launched small, on purpose',
      paragraphs: [
        'The market was rushing to put AI into everything at once. Our agile team, with product management and design deciding together, chose to launch a focused chat with three additions (Save, Download and Cite) and let research tell us what to build next. Weekly design reviews with User Insights made sure findings set our priorities instead of just informing them.',
      ],
    },
    {
      title: 'Gave institutions control',
      paragraphs: [
        'Libraries have their own policies on AI, and they needed to decide for themselves how the tool would be used on their campuses. My team designed admin controls that let each institution turn the research tool on or off, for everyone or for specific users.',
      ],
    },
    {
      title: 'Grew a designer into a leader',
      paragraphs: [
        'The lead designer has built real trust with her team and now helps shape its strategy. I coached her toward setting standards for the whole team, beyond her own projects.',
      ],
    },
  ],
  figures: [
    {
      after: 0,
      src: traceableImage,
      alt: 'Research tool answer with links to the exact passages in the source text',
      caption: 'Every answer links to the passage it came from.',
    },
    {
      after: 3,
      src: governanceImage,
      alt: 'Governance layers around the research tool: institutional control through admin toggles, a publisher opt-out, data protections with no third-party training, and the underlying language model',
      caption: 'Institutional controls sit at the top of the governance model.',
      width: 'wide',
    },
    {
      after: 4,
      src: dynamicSearchImage,
      alt: 'JSTOR search results in Dynamic mode, with AI search suggestions, an explanation of why each result matches, and a results overview with themes',
      caption: 'Dynamic Search: AI suggestions, a reason each result matches, and an overview of themes.',
      width: 'wide',
    },
  ],
  results: [
    'Adoption grew from a limited beta in August 2023 to 272 early-access institutions by the end of 2024, about 1,500 by March 2025 and about 11,400 by July 2025. Only 39 institutions opted out.',
    'We measured honestly. Research tool users searched far more than other JSTOR users, but a matched before-and-after study showed much of that gap came from who chose the tool. We reported it plainly and focused on what the tool could own: trust, adoption and helping people reach the right content.',
    'The same grounded approach now shapes search. My team led the design of Dynamic Search, a hybrid of LLM query interpretation, semantic retrieval and keyword search. From Oct. 7 to Nov. 5, 2026, 52% of Dynamic Search queries led people to open, read or save content, versus 39% for keyword search, with fewer searches per session (2.69 vs. 3.11).',
    'Recommendations follow the same logic. After we found that 80% of users never saw them, moving recommendations inline and above the fold raised primary source use 80%, book use 48% and journal use 15% year over year (Q1 2023).',
    'Institutional partners called it the "most impressive and polished integration of AI for libraries" on the market.',
  ],
  why: [
    'In research, trust is the product. We know that friction aids learning, so we designed to protect the work students need to do themselves, and to use AI in ways that support that work rather than replace it.',
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const EthicalAI: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
