# תנו לגדול על שקט

Website for the "Let Them Grow Quietly" initiative - promoting delayed smartphone adoption for children.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Linting/Formatting**: Biome
- **Package Manager**: Bun

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SITE_URL` | Base URL for sitemap generation | `https://tnuligdol.co.il` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for metadata | `https://tnuligdol.co.il` |

## Development

```bash
bun run lint        # Check for linting issues
bun run lint:fix    # Fix linting issues
bun run format      # Format code
bun run typecheck   # Run TypeScript type checking
```

## CI

Pull requests and pushes to `main` run the following checks:

- Type checking (TypeScript)
- Linting (Biome)
- Production build

## Project Structure

```
app/           # Next.js App Router pages
components/    # React components (layout, ui, forms, cards)
content/       # Local TypeScript content files
public/        # Static assets (images, downloads)
```

## Adding UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. To add a new component:

```bash
npx shadcn@latest add <component-name>
```

For example: `npx shadcn@latest add dialog`

## Features

- RTL Hebrew layout
- Responsive design
- Embedded Google Forms for submissions
- Auto-generated sitemap
