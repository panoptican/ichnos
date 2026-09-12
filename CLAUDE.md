# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ICHNOS is a static literary journal website featuring experimental poetry and prose. Each literary work ("trace") has its own subdirectory with custom HTML, CSS, and JavaScript animations unique to that piece.

## Development

The project uses a Node.js build pipeline, but **the source files in `src/` are served directly** for development. The build scripts in package.json are legacy/unused (note the empty `"build": ""`).

**Local development:** Open `src/index.html` directly in a browser, or use any static file server.

**No tests:** This is a static site with no test suite. Validation is manual (Lighthouse, W3C validator).

## Architecture

```
src/
├── index.html          # Landing page with table of contents
├── css/                # Global styles (normalize, type, main)
├── img/                # Site images
├── type/               # Web fonts
└── traces/             # Individual literary works (6 total)
    └── {author-name}/  # Each trace is self-contained
        ├── index.html
        ├── styles.css
        ├── scripts.js  # Custom animation (varies by trace)
        └── ...         # Trace-specific assets (images, libraries)
```

**Key pattern:** Each trace directory is independent with its own styles and scripts. Some traces include vendored libraries (D3.js, Three.js, dat.gui, jQuery magnify).

## Trace-Specific Technologies

| Trace | Animation Technology |
|-------|---------------------|
| meagen-crawford | Delaunay triangulation (canvas, dat.gui) |
| michael-thomas-taren | Three.js 3D graphics |
| rem-plus-rom | jQuery magnify (image zoom) |
| philippa-snow | Particle chain with WebGL postprocessing |
| kristin-peterson | Canvas wave animations |
| dennis-james-sweeney | D3.js v3 circle packing |

## Analytics

The site uses Spidleweb analytics (analytics.spidleweb.net). All pages should include only the Spidleweb script, not the legacy Plausible script.

## Active Improvement Plan

See `plans/IMPROVEMENT-PLAN.md` for the current code quality roadmap with prioritized phases.
