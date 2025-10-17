# Copilot Instructions for Vittorio's Portfolio

## Architecture Overview
This is a **single-page application (SPA)** portfolio built with Vue.js 3 + Vite, structured as a vertical scrolling showcase with anchor-linked sections. The app renders entirely through `HomeView.vue`, which composes five main sections as separate components.

### Key Architectural Patterns
- **Section-based layout**: Each portfolio section (`LandingSection`, `AboutSection`, `ProjectSection`, `SkillSection`, `ContactSection`) is a standalone component imported into `HomeView.vue`
- **Base component system**: Reusable UI elements live in `src/components/base/` (e.g., `Tile.vue`, `SkillTile.vue`, `ProjectOverlay.vue`)
- **Asset organization**: Static assets are categorized in `src/assets/` with `picture/`, `icons/`, and `file/` subdirectories
- **CSS custom properties**: Global design system defined in `base.css` using CSS variables (e.g., `--color-background: #1E1E1E`, `--color-third: #00EE01`)

## Development Workflow

### Commands
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production (outputs to `dist/`)  
- `npm run preview` - Preview production build locally

### Deployment
Auto-deploys to GitHub Pages via `.github/workflows/static.yml` on pushes to `main`. The workflow expects build output in `./dist` directory.

## Component Patterns

### Section Components
Follow this structure for main sections:
```vue
<template>
  <div class="section-name" id="section-anchor">
    <div class="title">
      <h3>Subtitle</h3>
      <h1>Main Title</h1>  
    </div>
    <div class="content">
      <!-- Section content -->
    </div>
  </div>
</template>
```

### Base Components
- **Tile pattern**: Used for project cards, accepts `imgSource`, `title`, `paragraph`, and `ToggleButton` props
- **SkillTile pattern**: Simplified tiles for skills, takes `imgSource` and `title` only  
- **Overlay pattern**: Modal-like overlays (e.g., `ProjectOverlay.vue`) controlled by reactive `btnTrigger` object

### Asset References
Import images as modules in script section:
```javascript
import ProjectImage from '../assets/picture/project-name.jpeg';
```

## Styling Conventions
- Uses **CSS custom properties** for consistent theming
- **Dark theme**: Primary background `#1E1E1E`, accent green `#00EE01`
- **Nunito font** from Google Fonts
- **30px border radius** standard (`--border-radius`)
- Anchor links for navigation (`#landing`, `#about`, `#projects`, `#skills`, `#contacts`)

## Project-Specific Notes
- Router configured but unused - everything renders through single `HomeView`
- External dependency: Lordicon for animated icons (`https://cdn.lordicon.com/ritcuqlt.js`)
- Vue Carousel 3D available but check current usage before implementing
- TODO items in README indicate mobile responsiveness and animations are pending

## File Organization
- Section components: `src/components/[SectionName].vue`
- Reusable UI: `src/components/base/[ComponentName].vue`  
- Static assets: `src/assets/[category]/[filename]`
- Single view: `src/views/HomeView.vue` (entry point for all sections)