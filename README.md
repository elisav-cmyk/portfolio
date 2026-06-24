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
