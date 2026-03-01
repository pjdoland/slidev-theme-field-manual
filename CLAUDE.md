# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the theme

There are no local `node_modules` — the theme is loaded directly by a globally installed Slidev CLI:

```bash
npx slidev example.md          # dev server with hot reload
npx slidev build example.md    # static build
npx slidev export example.md   # export to PDF/PNG
```

## Architecture

This is a **Slidev theme package** with no build step of its own. Slidev loads files directly from the directory at runtime via Vite.

### How Slidev resolves theme files

- `styles/index.css` — auto-loaded globally; defines all CSS custom properties and base styles
- `styles/code.css` — auto-loaded globally; styles the `.fm-code-container` system used by `CodeBlock.vue` and the `code-right`/`code-full` layouts
- `layouts/*.vue` — resolved by name when a slide front matter specifies `layout: <name>`
- `components/*.vue` — auto-imported globally into all layouts and slides by name
- `setup/shiki.ts` — must export a **plain default function** (no imports from `@slidev/types`; the package is not installed locally). Slidev calls `mod.default()` to get the Shiki theme config.

### Design token system

All visual values flow from CSS custom properties declared on `:root` in `styles/index.css`. Dark mode is handled by redefining the same properties under `.dark`. Nothing is hardcoded in components — always use the `--c-*`, `--color-*`, `--space-*`, `--text-*`, and `--rule-*` variables.

### Layout anatomy

Every layout follows this structure:
```
<FieldManualHeader>   ← flex-shrink: 0, auto-injects doc/section/classification labels
<main content area>   ← flex: 1, overflow: hidden
<FieldManualFooter>   ← flex-shrink: 0, uses $nav?.currentPage for slide count
```

The `.slidev-layout` root element is always a `display: flex; flex-direction: column` container at 960×540px (16:9; renders at 1920×1080 at 2x). Layouts must not exceed this height.

### CodeBlock / code panel system

`styles/code.css` defines `.fm-code-container` and its child classes (`.fm-code-header`, `.fm-code-body`, `.fm-code-content`, `.fm-code-footer`, corner bracket spans). This system is shared between:
- `components/CodeBlock.vue` — standalone component for use inline on any slide
- `layouts/code-right.vue` — duplicates the header/badge/body/caption structure directly in the layout (does not use `CodeBlock.vue`)
- `layouts/code-full.vue` — same

### CSS corner brackets

Implemented as sibling `<span>` elements (`.fm-bracket-bl`, `.fm-bracket-br`) inside the bracketed container plus `::before`/`::after` pseudo-elements for the top pair. The `fm-bracketed` utility class in `index.css` handles the top corners; bottom corners require explicit `<span class="fm-bracket-bl"></span><span class="fm-bracket-br"></span>` in the template.

### FieldManualFooter

Uses `$nav?.currentPage` (Vue template global injected by Slidev) — not `useNav()` from `@slidev/client`, which requires the package to be installed locally.

## Key constraints

- `setup/shiki.ts` must export a **bare function**, not an object, and must have **no imports** (no `@slidev/types`, no `@slidev/client`)
- Layout scoped styles use short two-letter prefixes (e.g. `.ir-` for `image-right`, `.cdf-` for `code-full`) to avoid collisions since Slidev may not fully isolate scoped styles across layouts
- The paper grain overlay is on `.slidev-layout::before` (z-index: 1000, pointer-events: none) — don't use z-index above 1000 for decorative elements
