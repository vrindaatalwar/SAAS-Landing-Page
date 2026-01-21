# ChainForecast - Retail Analytics Platform Landing Page

---

### Directory Structure

```
ChainForecast/
├── public/                     # Static assets
│   ├── dashboard-preview.png
│   ├── dashboard-preview.jpg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── blocks/            # Reusable page sections
│   │   │   ├── hero-section-9.jsx        # Hero with spotlight effects
│   │   │   ├── logos-slider.jsx          # Technology stack slider
│   │   │   └── testimonials-with-marquee.jsx
│   │   ├── ui/                # Foundational UI components
│   │   │   ├── accordion.jsx           # Radix-based accordion
│   │   │   ├── avatar.jsx              # User avatars
│   │   │   ├── bento-grid.jsx          # Feature grid layout
│   │   │   ├── button.jsx              # Base button component
│   │   │   ├── button-shiny.jsx        # Gradient button variant
│   │   │   ├── display-cards.jsx       # Stacked card display
│   │   │   ├── floating-navbar.jsx     # Sticky nav component
│   │   │   ├── infinite-slider.jsx     # Continuous scroll slider
│   │   │   ├── marquee.jsx             # Text marquee animation
│   │   │   ├── neon-button.jsx         # Neon-styled button
│   │   │   ├── progressive-blur.jsx    # Gradient blur effect
│   │   │   ├── spotlight.jsx           # SVG spotlight effect
│   │   │   ├── testimonial-card.jsx    # Customer testimonial card
│   │   │   ├── text-reveal.jsx         # Text reveal animation
│   │   │   └── theme-toggle.jsx        # Dark/light mode toggle
│   │   ├── BentoGrid.jsx      # Feature showcase (5 departments)
│   │   ├── FAQs.jsx           # Frequently asked questions
│   │   ├── Footer.jsx         # Footer with links
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Pipeline.jsx       # How-it-works pipeline
│   │   ├── TechStack.jsx      # Technology carousel
│   │   └── Testimonials.jsx   # Customer testimonials
│   ├── lib/
│   │   └── utils.js           # Utility functions (cn combiner)
│   ├── App.jsx                # Main application component
│   ├── App.css                # Component-specific styles
│   ├── index.css              # Global styles & Tailwind directives
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # NPM dependencies & scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── eslint.config.js           # ESLint rules
├── components.json            # Component registry (shadcn/ui)
├── dependencies.txt           # Dependency documentation
└── .gitignore                 # Git ignore rules
```

---

## Tech Stack

### Core Framework & Build Tools
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 19.2.0 | UI library |
| `react-dom` | 19.2.0 | DOM rendering |
| `vite` | 7.2.4 | Lightning-fast build tool |
| `@vitejs/plugin-react` | 5.1.1 | React Fast Refresh |

### Styling & Design
| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 3.4.17 | Utility-first CSS framework |
| `postcss` | 8.5.6 | CSS processing |
| `autoprefixer` | 10.4.22 | Vendor prefixes |
| `tailwind-merge` | 3.4.0 | Smart class merging |
| `tailwindcss-animate` | 1.0.7 | Animation utilities |


---


## Getting Started

### Prerequisites
- **Node.js** v18+ (recommended v20 LTS)
- **npm** v9+ or **yarn** v3+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vrindaatalwar/SAAS-Landing-Page.git
   cd LandingPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The app will be available at `http://localhost:5173` (Vite default port)

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   # or
   yarn lint
   ```

---

## License & Attribution

This project builds upon the React + Vite template and incorporates components from:
- Shadcn/ui component patterns
- Radix UI primitives
- Community animation patterns

For third-party libraries, see `package.json` for respective licenses.

---

Thank you!