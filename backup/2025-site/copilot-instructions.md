# AI Coding Assistant Instructions

## Project Overview
This is a personal portfolio website built as a **single-file architecture** with vanilla HTML/CSS/JS. Despite being a static site, it features complex interactive components including an infinite carousel, particle animations, and glassmorphism effects.

## Key Architecture Patterns

### Single-File Design Philosophy
- **Everything in `index.html`**: All styles are embedded in `<style>` tags, JavaScript animations inline in `<script>` tags
- **Minimal external dependencies**: Only Tailwind CSS (CDN), Google Fonts, and `assets/js/projects.js`
- **No build pipeline required**: Site works directly from `index.html` for GitHub Pages compatibility

### Component-Based JavaScript in `assets/js/projects.js`
```javascript
// Self-contained project data - modify this array to add/edit projects
const projectsData = [
    {
        title: "Project Name",
        highlight: true, // Creates special styling and carousel centering
        buttons: [
            { text: "Primary Action", url: "...", primary: true },
            { text: "Secondary Action", url: "...", primary: false }
        ]
    }
];
```

### Infinite Carousel System
- **Buffer-based infinite scrolling**: Uses `BUFFER_SIZE` to create seamless wraparound
- **Responsive tile dimensions**: `getResponsiveDimensions()` handles viewport-based sizing
- **Depth-based styling**: `.center`, `.side`, `.far` classes applied dynamically for 3D effect
- **Highlighted projects**: Use `highlight: true` to get special animations and larger sizing

## Critical Styling Patterns

### Glassmorphism Effects
```css
.glass-card {
    background: rgba(24, 24, 27, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Performance-Optimized Animations
- **`prefers-reduced-motion` respect**: All animations check for reduced motion preference
- **Frame rate capping**: Starfield animation runs at 20-40fps depending on preference
- **Throttled mouse interactions**: Mouse events throttled to 20fps for performance

### Color System
- **Primary accent**: rgba(68, 255, 171, *) - bright green used for glows and highlights
- **Background**: #0a0a0a - near-black base
- **Text**: #e5e7eb - off-white for readability

## Development Workflow

### Local Development
```bash
npm install
npm run dev        # Starts Vite dev server with hot reload
```

### Production Build
```bash
npm run build      # Builds to dist/ directory
npm run preview    # Preview production build
```

### Direct Deployment
The site can be deployed directly from `index.html` without building, maintaining GitHub Pages compatibility.

## File Organization

- **Static assets**: `assets/pdf/` for PDFs, `assets/logo.png` for favicon
- **JavaScript components**: `assets/js/projects.js` - the only external JS file
- **No CSS files**: All styles embedded in `index.html` for single-file architecture

## Debugging Tools

The carousel exposes global debugging functions:
```javascript
window.debugCarousel()           // Current carousel state
window.testCarouselAnimation()   // Test navigation
window.updateCarouselDimensions(config) // Modify responsive behavior
```

## Adding New Projects

1. Add project object to `projectsData` array in `assets/js/projects.js`
2. Use `highlight: true` for featured projects (gets special styling)
3. Place PDFs in `assets/pdf/` directory
4. Reference external links or local PDF paths in buttons array

## Performance Considerations

- **Minimal DOM manipulation**: Tiles created once, positioned via CSS transforms
- **Efficient starfield**: Frame rate capped, reduced particle count for reduced motion
- **Responsive design**: Viewport-based calculations for optimal tile sizing across devices