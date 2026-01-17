# תנו לגדול על שקט

Website for the "Let Them Grow Quietly" initiative - promoting delayed smartphone adoption for children.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
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

## Project Structure

```
app/           # Next.js pages
components/    # React components
content/       # Local content files
public/        # Static assets
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
