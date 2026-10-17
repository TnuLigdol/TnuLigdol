# Milestones (`/milestones`)

An unlisted timeline of milestones in protecting children from early smartphone use. Records live in `DB/milestones.json` and are loaded by `content/milestones.ts`; the timeline (`app/milestones/page.tsx`) and the detail pages (`app/milestones/[slug]/page.tsx`) are generic, so adding a record needs no code change.

## Rule: always keep a local copy of every milestone's source

External links break. For every milestone, save a copy of the source document under `public/downloads/milestones/<slug>.pdf` and set `copyUrl` to `/downloads/milestones/<slug>.pdf`. The detail page then offers "למסמך המקורי" plus an "עותק נוסף לגיבוי" link. Do this when adding the record, not later.

`copyUrl` is optional in the type only so a record can ship when a copy is truly impossible. Treat that as a gap to report to the user, never as a default.

### Getting the copy

- **Direct PDF link:** `curl -sL -o public/downloads/milestones/<slug>.pdf "<url>"`, then check it is a real PDF (`file`, and page count with `pypdf`).
- **Web page (e.g. a ministry circular or press release):** print it to PDF with headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf=<out>.pdf "<url>"`
- **Collapsed accordions:** printed pages drop the content of collapsed sections. Save the HTML, add a `<base href>` and a small script that clicks every closed toggle on load, then print the local file. Confirm the hidden text is now in the PDF (extract it with `pypdf` and search for a string from each section).
- **Bot-blocked sites (gov.il, kan.org.il and others serve a Cloudflare challenge):** headless Chrome and `WebFetch` get a 403 or a challenge page. Do not try to get around it. Read the page through the user's own browser (Claude in Chrome), or tell the user the copy is missing and ask them to add the PDF.
- Always read the result before publishing it (see below). A PDF of a challenge page is worse than no copy.

### Verify

1. Extract the text (`pypdf`) and confirm it is the right document, not an error or challenge page.
2. Page count looks plausible against the source.
3. `bunx tsc --noEmit` passes (known unrelated errors in `DB/suppliers.ts`), and the detail page returns 200 with the copy link.

## Record fields (`DB/milestones.json`)

| Field                  | Notes                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _(object key)_         | The slug: `DB/milestones.json` is an object keyed by slug, not an array. Format `YYYY-MM-DD-kebab-case` (starts with the `date`); it is the URL segment and the PDF file name |
| `title`, `description` | `description` is the few words shown on the timeline                                                                                                                          |
| `date`                 | `YYYY-MM-DD` only. The list is sorted newest first by string comparison, whatever the order in the file                                                                       |
| `categories`           | values of the `MilestoneCategory` enum; a typo throws at load                                                                                                                 |
| `url`                  | the original source                                                                                                                                                           |
| `copyUrl`              | local copy, see the rule above                                                                                                                                                |
| `notice`               | optional warning shown under the date (e.g. an outdated document)                                                                                                             |
| `summary`              | optional bullet points, written from reading the source, not copied                                                                                                           |
| `articles`             | optional related news coverage: `publication`, `headline`, `date`, `url`, and optionally `author`, `description`                                                              |

Do not use `as` assertions in new code. Validate with type guards (or Zod if really needed).
