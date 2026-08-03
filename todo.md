# TODO

Work uncovered while migrating the static WordPress/Elementor archive that used
to live in `public/web/` to Next.js components. **That folder is now gone** —
all 11 pages were converted and every asset still in use was moved into
`public/images/` and `public/downloads/`.

## Blocking / functional

### Forms are inert site-wide
Every form renders but is `disabled` — nothing validates, nothing submits.
There are now three of them:

| Component | Where | Extra needs |
|---|---|---|
| `startup-kit-form.tsx` | homepage ×2, plus the footer CTA on every page | success modal + kit download |
| `share-story-form.tsx` | `/share-your-story` | **file uploads** (photos, Word docs) |
| `contact-form.tsx` | `/me-and-my-phone` | — |

Each file carries a TODO with what the original did (all three POSTed to
`wp-admin/admin-ajax.php` behind reCAPTCHA v3).

Needs a backend decision first:
- **(a)** third-party endpoint (Formspree / Google Forms / Netlify Forms) —
  keeps `output: 'export'`; needs an endpoint URL and a spam guard; or
- **(b)** Next route handler / server action + email provider — requires
  dropping `output: 'export'` and changing how we deploy.

Then still needed: controlled inputs, required-field validation, a bot
challenge, the success modal, and the kit download link. The share-story form
additionally needs somewhere to put attachments (object storage, or a service
that accepts multipart) — a plain form endpoint won't take them.

### `public/downloads/` is ~118 MB of presentations
`/me-and-my-phone` hands out the classroom material, and those files are the
point of the page. Recovered from the archive:

- 4 × `.pptx` (10–38 MB each) + 3 × parent-note `.pdf` — `phone-guide/`
- the Ministry of Education guidelines PDF — 228 KB

That is a lot to keep in git. Worth deciding between committing as-is, Git LFS,
or moving them to object storage / a CDN and pointing `content/phone-guide.ts`
at the new URLs (it is the single place the hrefs live).

### ~~`/legal` links to a PDF that does not exist~~ — fixed
The real PDF was in the archive and is now at
`public/downloads/ministry-of-education-mobile-phone-guidelines-2019.pdf`.

## UI issues found

### Header overflows horizontally between ~1025px and ~1190px
The nav wraps past the viewport edge, giving a horizontal scrollbar. Confirmed
via `document.documentElement.scrollWidth` > viewport across that band. Not
present at 1280 / 1366 / 1440 / 1920, and not on mobile (burger menu).

The original avoids it with a third responsive tier this rebuild does not have
— its nav drops the items' 16px horizontal padding below ~1350px. Fixing
properly means adding that tier to `components/layout/header.tsx`, not just
clamping padding.

Pre-existing since the homepage build; affects every page.

### Hero decorative circles overflow at ~1100px (inherited, deliberate)
The homepage hero's floating circles push ~140px past the viewport. **The
original does exactly this** — identical `scrollWidth` in both — so it was left
alone. One line of `overflow-x: clip` on the hero fixes it if we decide the
original's behaviour was a bug worth correcting.

### Footer link text is ~5px narrower than the original (cosmetic)
The original's Elementor icon-list had a trailing space inside the link text, so
its box measured ~5px wider. Both versions share the same outer edge, font, size
and line-height, so nothing moves visually. Recorded only so the geometry diff
isn't re-chased.

## Content gaps — the archive was a partial crawl

### `/stories` is missing 5 of its 8 stories
The archived index listed eight; only three detail pages were captured.

| Title | Original slug | Date |
|---|---|---|
| תהליך 'תנו לגדול על שקט' באורנית | `your-stories/oranit` | 03/02/2020 |
| תהליך יצירת התוכנית העירונית… בהוד השרון | `your-stories/hod-hasharon` | 17/01/2020 |
| התנעת היוזמה בהרצוג נתניה – חלק ב' | `your-stories/hertozg-part-b` | 03/01/2020 |
| התנעת היוזמה בהרצוג נתניה – חלק א' | `your-stories/hertozg-part-a` | 02/01/2020 |
| כך סחפתי את הורי כיתות א׳ להתחבר ליוזמה | `your-stories/this-is-how-i-pulled-the-parents` | 21/12/2019 |

`/stories` lists only the three with content, to honour the "no 404s" rule. Add
the rest to `content/stories.ts` once the bodies are supplied.

Knock-on: the `when-children-grow` story originally linked the phrase
"הפרויקט לרכישה מרוכזת של טלפונים פשוטים" to `hertozg-part-a`. It is plain text
for now — restore the link when that story exists (noted in the file).

### `/articles` is missing all three of its articles

| Title | Original slug | Category | Date |
|---|---|---|---|
| רובי ריבלין לא עומד מהצד | `internet-safety/lo-omdim` | בטיחות ברשת | 16/02/2020 |
| חינוך בעידן הסחות הדעת | `translated/חינוך-בעידן-הסחות-הדעת` | מתורגמים | 18/01/2020 |
| כך תפתחו את החוזקות של ילדיכם… | `more/developing-childrens-strengths` | שונות | 17/12/2019 |

A second page of results (`/articles/2`) and a `/blog` index were also not
captured, so there may be more.

**Two things were deleted rather than shipped:**
1. `content/articles.ts` held three *invented* articles with fabricated bodies
   attributed to real people (משרד החינוך, פרופ' יאיר עמיחי-המבורגר). The array
   is now empty, with the missing titles recorded in a comment there.
2. `app/articles/[category]/[slug]/page.tsx` was removed — it could only render
   that fabricated content. Restore it when real articles arrive; `/articles`
   already renders whatever is in `articles` alongside the stories.

### `/me-and-my-phone` — two recoverable-elsewhere links
- **מצגת #4 (חברות)** — the original's button pointed at a WordPress *attachment
  page*, not a file, and the file itself was never archived. The session renders
  with its video and description but no download.
- **Some source links in the last FAQ answer** — the crawler stripped query
  strings, so several `youtube.com/watch` and `facebook.com/watch` URLs lost
  their video IDs and were dropped rather than left pointing nowhere. The ones
  that survived intact are kept.

### RSS feeds were not migrated
The archive had `feed/` and `comments/feed/` (WordPress RSS). Not pages, so they
were deleted with the folder. If a feed is wanted on the new site that is a
separate feature, not a migration step.

## Migration progress — complete

- [x] `/` (homepage)
- [x] `/the-team` — מי אנחנו
- [x] `/media` — אנחנו בתקשורת
- [x] `/legal` — חקיקה
- [x] `/stories` — סיפורים מהשטח
- [x] `/stories/lehavim` — תנו לגדול בלהבים
- [x] `/stories/emek-hefer` — מתקדמים בעמק חפר
- [x] `/stories/when-children-grow` — כשהילדים גדלים
- [x] `/share-your-story` — שתפו את הסיפור שלכם
- [x] `/articles` — מאמרים
- [x] `/me-and-my-phone` — אני והטלפון
- [x] `public/web/` deleted (255 MB → 122 MB)
