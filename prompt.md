Act as an expert frontend engineer specializing in Astro, TypeScript, and modern CSS (Tailwind CSS). 

Build a static website using Astro. The architecture must prioritize performance, proper asset optimization, and a robust system for handling symbols, icons, and graphical assets.

### 1. Project Requirements & Architecture
- Framework: Astro (latest stable version, static output mode).
- Styling: Tailwind CSS configured cleanly within the Astro project.
- Content: Use Astro's Content Layer API (src/content.config.ts) for any structured text data (e.g., projects, blog posts, testimonials).
- Layouts: Create a reusable `BaseLayout.astro` that includes proper HTML metadata, responsive navigation, and a footer.

### 2. Icon & Symbol Architecture
To handle icons, logos, and symbols efficiently without shipping unnecessary JavaScript, implement the following approach:
- Use the `astro-icon` package for managing icon sets (like Lucide, Phosphor, or FontAwesome), OR design a local custom SVG component pattern.
- Create an `Icon.astro` component or leverage `astro-icon` so that symbols are injected directly as inline SVGs at build time.
- Ensure all icons accept dynamic Tailwind utility classes via props (e.g., `class={Astro.props.class}`) to easily handle size, color shifts, hover states, and dark mode scaling.
- Include common fallback symbols/indicators (like arrows, chevrons, close menus) natively embedded as semantic SVGs.

### 3. File Structure
Organize the repository using this clean layout:
├── src/
│   ├── assets/          # Global raw images, illustrations, and logos
│   ├── components/      # Reusable UI elements (Button, Card, MobileMenu)
│   │   └── ui/          # Low-level primitives, including the Icon system
│   ├── content/         # Markdown or JSON data files
│   ├── layouts/         # BaseLayout and page-specific wrappers
│   └── pages/           # Site routing (index.astro, about.astro, etc.)
├── public/              # Static fallbacks, favicons, robots.txt
└── astro.config.mjs     # Configuration enabling static generation

### 4. Code Quality & Standards
- Component Design: Keep components isolated. Use Astro's scoped `<style>` tags only if standard Tailwind utilities don't cover the use case.
- Performance: Ensure images utilize the built-in `<Image />` component from `astro:assets` for automatic WebP/AVIF generation, sizing, and optimization.
- Interactivity: For small interactive bits (like a mobile menu toggle), use vanilla JavaScript inside a scoped `<script>` tag within the component. Avoid heavy frameworks unless explicitly asked.

Generate the configuration files, the core Icon implementation system, the layout wrapper, and a clean, visually polished home page (`src/pages/index.astro`) demonstrating the icon system in action.