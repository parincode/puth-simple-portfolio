# GEMINI.md - Project Context & Instructions

This project is a modern, responsive portfolio website for **Parin Puth**, a Data Analyst. It is designed to be hosted on GitHub Pages and features a clean, professional aesthetic with a focus on data storytelling.

## Project Overview
- **Purpose:** Showcase data analysis projects, skills, and contact information.
- **Tech Stack:** 
  - HTML5 (Semantic structure)
  - CSS3 (Custom properties, Flexbox, Grid, Dark/Light themes)
  - JavaScript (Vanilla JS for theme toggling and scroll animations)
  - **Typography:** JetBrains Mono (via Google Fonts)
- **Architecture:** Single-page layout with modular sections:
  - `Hero`: Personal introduction and high-level value proposition.
  - `Projects`: Card-based gallery of selected data analysis work.
  - `Contact`: Professional links and call to action.

## Key Features
- **Modern Dark Theme:** Default theme inspired by GitHub's aesthetic (`#0d1117`).
- **Light Theme Toggle:** Accessible switch in the navigation bar with state persistence via `localStorage`.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Interactive Elements:** Smooth scrolling and scroll-triggered fade-in animations for project cards.

## Building and Running
As this is a static website, no build step is required.
- **Development:** Open `index.html` directly in any modern web browser.
- **Recommended Tooling:** VS Code with the "Live Server" extension for real-time preview.
- **Deployment:** Push the repository to GitHub and enable **GitHub Pages** in the repository settings (Branch: `master` or `main`, Folder: `/root`).

## Development Conventions
- **Naming:** Use descriptive class names (BEM-lite approach).
- **Styling:** Utilize CSS variables (defined in `:root`) for all colors and fonts to ensure theme consistency.
- **Scripts:** Keep interactions lightweight and ensure they enhance rather than hinder accessibility.
- **Assets:** Store all project-related images or thumbnails in the `/assets` directory.

## File Structure
- `index.html`: Main entry point and structural definition.
- `style.css`: Theme variables, layout, and component styling.
- `script.js`: Theme switching logic and interaction enhancements.
- `plan/our_plan.md`: The original project design and strategy document.
- `assets/`: Directory for media assets.

---
*This file serves as instructional context for Gemini CLI interactions within this workspace.*
