# portfolio
/my-portfolio
├── .github/workflows/    # CI/CD for automatic deployment via GitHub Pages
├── .storybook/           # Storybook configuration for design system components
├── src/
│   ├── components/       # shadcn/ui and custom design system components
│   ├── hooks/            # Custom React hooks (e.g., for MCP server communication)
│   ├── pages/            # Your portfolio views (Home, Work, About)
│   ├── styles/           # Global CSS/Tailwind configuration
│   └── utils/            # Helper functions for project snapshot mapping
├── public/               # Static assets (images, PDFs)
├── package.json          # Dependencies (React, Storybook, etc.)
├── tailwind.config.js    # Styling configuration
└── tsconfig.json         # TypeScript configuration
node_modules/
dist/
.env
.DS_Store

Portfolio Architecture
This repository serves as a production-ready portfolio, migrating from Figma-generated prototypes to a tokenized, maintainable React environment.

🏛️ Design Philosophy
We are treating this portfolio as a "living application." The architecture prioritizes:

Token-Driven Styling: Centralized design tokens (via CSS/Tailwind) to ensure design consistency and ease of theme updates.

Semantic Structure: Utilization of HTML5 semantic tags to ensure high accessibility (A11y) and performance.

Component-Based Modularity: Leveraging shadcn/ui and Storybook for isolated, reusable component development.

🏗️ Project Structure
Plaintext
/my-portfolio
├── .github/workflows/    # CI/CD for automatic deployment via GitHub Pages
├── .storybook/           # Storybook configuration for design system components
├── src/
│   ├── components/       # shadcn/ui and custom design system components
│   ├── hooks/            # Custom React hooks (e.g., for MCP server communication)
│   ├── pages/            # Portfolio views (Home, Work, About)
│   ├── styles/           # Global CSS tokens and Tailwind configuration
│   └── utils/            # Helper functions for project snapshot mapping
├── public/               # Static assets (images, PDFs)
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind theme configuration
🚀 Roadmap
[ ] Audit (1h): Map Figma patterns to design tokens in src/styles/tokens.css.

[ ] Refactor (2h): Transition Figma-exported div soup to Semantic HTML5.

[ ] Componentization (2h): Build core UI components in Storybook.

[ ] Deployment (1h): Configure GitHub Actions for auto-deploy to GitHub Pages.

🛠️ Tech Stack
Framework: React + TypeScript

Styling: Tailwind CSS (with custom design tokens)

Design System: shadcn/ui

Documentation: Storybook

Deployment: GitHub Pages
