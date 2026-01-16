# Replication Plan: tnuligdol.co.il

## Executive Summary

Replicate the Hebrew RTL website "תנו לגדול על שקט" using Next.js 16 with local content files and embedded Google Forms.

---

## Pages (10 Total)

| # | Page | Route | Key Content |
|---|------|-------|-------------|
| 1 | Homepage | `/` | Hero, About, FAQ, Stories preview, Form |
| 2 | Media | `/media` | Press coverage grid (6 items) |
| 3 | Articles Hub | `/articles` | Article cards with category filter, pagination |
| 4 | Article Detail | `/articles/[category]/[slug]` | Full article content |
| 5 | Stories Hub | `/stories` | Story cards grid |
| 6 | Story Detail | `/stories/[slug]` | Full story content |
| 7 | Share Your Story | `/share-your-story` | Google Form embed |
| 8 | Me and My Phone | `/me-and-my-phone` | Curriculum guide, downloads |
| 9 | Team | `/the-team` | Founders, advisor, coordinators |
| 10 | Legal | `/legal` | Ministry guidelines PDF |

---

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Next.js | 16.1 |
| React | React | 19.2 |
| Language | TypeScript | 5.7 |
| Styling | Tailwind CSS | 4.1 |
| UI Components | shadcn/ui | Latest |
| Forms | **Google Forms (embedded)** | - |
| Content | Local TypeScript files | - |
| Hosting | Vercel | - |

---

## Forms Strategy (Google Forms Embed)

### Forms Needed

1. **Startup Kit Request Form**
   - Fields: Name, City, School, Email
   - Appears on: Homepage, Media, Articles, Stories, Legal pages

2. **Share Your Story Form**
   - Fields: Name, Email, School, Location, Story text, File upload
   - Appears on: `/share-your-story` page

### Implementation

```tsx
// components/forms/startup-kit-form.tsx
export function StartupKitForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
        width="100%"
        height="500"
        frameBorder="0"
        className="rounded-lg"
      >
        Loading...
      </iframe>
    </div>
  );
}
```

### Setup Steps
1. Create Google Forms for each form type
2. Configure form fields to match original site
3. Set up Google Sheets to collect responses
4. Enable email notifications for new submissions
5. Get embed URLs and add to components

---

## Content Architecture

```
content/
├── site.ts           # Nav, footer, site config
├── homepage.ts       # Hero, about, FAQ
├── team.ts           # Team members
├── articles.ts       # Articles data
├── stories.ts        # Stories data
├── media.ts          # Press coverage
└── phone-guide.ts    # Curriculum content
```

---

## File Structure

```
app/
├── layout.tsx
├── page.tsx                    # Homepage
├── globals.css
├── media/page.tsx
├── articles/
│   ├── page.tsx
│   └── [category]/[slug]/page.tsx
├── stories/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── share-your-story/page.tsx   # Google Form embed
├── me-and-my-phone/page.tsx
├── the-team/page.tsx
└── legal/page.tsx

components/
├── ui/                         # shadcn/ui
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   └── mobile-menu.tsx
├── forms/
│   ├── startup-kit-form.tsx    # Google Form iframe
│   └── share-story-form.tsx    # Google Form iframe
└── cards/
    ├── article-card.tsx
    ├── story-card.tsx
    └── team-card.tsx

content/
├── site.ts
├── homepage.ts
├── team.ts
├── articles.ts
├── stories.ts
├── media.ts
└── phone-guide.ts

public/
├── images/
└── downloads/
```

---

## Design Tokens

```css
--primary: #66b768;         /* Green */
--primary-hover: #e49d0d;   /* Orange */
--dark: #32373c;
--text: #333333;
--text-muted: #666666;
--font: "Varela Round", system-ui, sans-serif;
```

---

## Implementation Phases

### Phase 1: Setup
- [ ] Upgrade to Next.js 16, React 19, Tailwind 4
- [ ] Configure RTL + Hebrew font
- [ ] Set up shadcn/ui
- [ ] Create layout components (header, footer, nav)

### Phase 2: Pages
- [ ] Homepage
- [ ] Team page
- [ ] Legal page
- [ ] Me and My Phone page
- [ ] Media page
- [ ] Articles hub + detail
- [ ] Stories hub + detail
- [ ] Share Your Story page

### Phase 3: Forms
- [ ] Create Google Forms (Startup Kit, Share Story)
- [ ] Embed forms in pages
- [ ] Style iframe containers

### Phase 4: Polish
- [ ] SEO meta tags
- [ ] Performance optimization
- [ ] Deploy to Vercel

---

## Summary

- **10 pages** with local content
- **2 Google Forms** embedded (no backend needed)
- **Latest stack**: Next.js 16, React 19, Tailwind 4
- **Simple architecture**: Easy to maintain and extend

Ready to start when you approve.
