# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
bun dev       # Start development server with Turbopack (localhost:3000)
bun run build # Production build
bun start     # Start production server
bun run lint  # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router
- **Package Manager**: Bun
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (coming soon)

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - React components (layout, ui, forms, cards)
- `content/` - Local TypeScript content files
- `public/` - Static assets (images, downloads)

## Design System

- Primary color: `#66b768` (green)
- Hover color: `#e49d0d` (orange)
- Font: Varela Round
- RTL Hebrew layout (`dir="rtl"`, `lang="he"`)

## Path Alias

`@/*` maps to the project root.
