import React from 'react';
import motoHeroImage from '../../../assets/moto-app.jpg';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'moto-app',
  hero: {
    src: motoHeroImage,
    alt: 'Screens from the redesigned Moto app, with its illustrated welcome screen, Moto Actions and tips',
    position: 'object-top',
  },
  tag: 'Brand & Craft',
  years: '2016-2020',
  title: 'Teaching People What Their Phone Can Do',
  subtitle: 'The Moto app turned a list of settings into a reason to explore',
  role: 'Design Director, then Global UX Director, Motorola Mobility',
  partners: 'Product Management, Engineering, Research, Marketing',
  context: [
    'Motorola phones ran a mostly "pure" version of Android, so people rarely noticed the features unique to Moto phones, or understood what those features could do for them. The Moto app, where those features lived, was mostly a collection of settings.',
  ],
  moves: [
    {
      title: 'Set the vision',
      paragraphs: [
        'I drove the vision of the Moto app as an educational, brand-building app, which meant coordinating across several product management and software teams. The redesign, launched on the Moto G7, turned a list of settings into a visual, editorial-style app with quick tips and tutorials for the features that mattered most.',
      ],
    },
    {
      title: 'Gave writing a bigger role',
      paragraphs: [
        "I encouraged my copywriter to take a larger role in setting the app's direction: defining the content strategy and a roadmap for new categories, such as Tips and Personalize, which gave people more reasons to come back and explore their phones.",
      ],
    },
    {
      title: 'Built a shared illustration system',
      paragraphs: [
        "My creative lead and a senior designer in Chicago created a mix-and-match library of illustrated people, objects and settings, so designers in any studio could build new illustrations quickly. It raised the look of the Moto app and gave Motorola's experiences a more consistent feel.",
      ],
    },
    {
      title: 'Made animation work everywhere',
      paragraphs: [
        "My visual designers wanted to use Lottie animations, but earlier attempts had run into technical conflicts. I set up a proof of concept with developers in Brazil, personally drove security approval with the legal team, and negotiated Lottie's integration into Motorola's framework so it could be used in core features, not just apps.",
        "Moving from video files to Lottie's lightweight animation files fixed problems with different screen shapes and display colors, and saved significant space, even after dark mode was added.",
      ],
    },
  ],
  results: [
    "Two 2019 Brazil Design Awards: People's Choice and Application Design.",
    'Preloaded on the Moto G7 and later mid- and high-tier Motorola phones.',
    'More than 23 million active users and a 4.3 rating on the Play Store, as of 2020. The app has changed significantly since.',
  ],
  why: [
    'This app is an example of my passion for brand, craft and design fidelity, and of how closely my team worked with research, other studios, product management and engineering.',
  ],
  videos: [
    {
      src: 'https://player.vimeo.com/video/347808760?h=4418d191b2&dnt=1',
      title: 'Moto app video',
    },
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const MotoApp: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
