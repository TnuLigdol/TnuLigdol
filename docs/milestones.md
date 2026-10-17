# Milestones (`/milestones`)

An unlisted timeline of milestones in protecting children from early smartphone use. Records live in `DB/milestones.json` and are loaded by `content/milestones.ts`; the timeline (`app/milestones/page.tsx`) and the detail pages (`app/milestones/[slug]/page.tsx`) are generic, so adding a record needs no code change.

## Rule: always keep a local copy of every milestone's source

External links break. For every milestone, save a copy of the source document under `public/downloads/milestones/<slug>.pdf` and set `copyUrl` to `/downloads/milestones/<slug>.pdf`. The detail page then offers "למסמך המקורי" plus an "עותק נוסף לגיבוי" link. Do this when adding the record, not later.

`copyUrl` is optional in the type only so a record can ship when a copy is truly impossible. Treat that as a gap to report to the user, never as a default.

### Getting the copy

- **Direct PDF link:** `curl -sL -o public/downloads/milestones/<slug>.pdf "<url>"`, then check it is a real PDF (`file`, and page count with `pypdf`).
- **Web page (e.g. a ministry circular or press release):** print it to PDF with headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf=<out>.pdf "<url>"`
- **Collapsed accordions:** printed pages drop the content of collapsed sections, and this has already bitten us (circular 0466 first shipped without its "הגורם האחראי" and "התחולה" sections). Never trust a plain print of a page that has toggles. Save the HTML (`curl -A "Mozilla/5.0"`), add `<base href>` (the page's directory) and a stylesheet/script that force every hidden section open, then print the local file with `--print-to-pdf=<out>.pdf "file://<local>.html"`. Find the toggles by reading the HTML (`grep -n 'ToggleDiv\|collapse\|accordion\|aria-expanded\|display: *none'`) and note which content containers they hide. For the gov.il circulars database (`apps.education.gov.il/mankal`), the sections are `.divHoraaTochen`, so inject `<style>.divHoraaTochen{display:block !important}</style>` before `</body>`. Do not force-show broader selectors such as `[id^=div]` or `.tabcontent`: they also reveal the search form and menus.
  Then check the result: extract the text (`pypdf`), search for a string from every section (every toggle heading **and** a line of its body, e.g. the contact email under "הגורם האחראי"), and look at two or three rendered pages (`pymupdf`, `get_pixmap`) to confirm the sections are open and no search form or menu leaked in.
- **Bot-blocked sites (gov.il, kan.org.il and others serve a Cloudflare challenge):** headless Chrome and `WebFetch` get a 403 or a challenge page. Do not try to get around it. Read the page through the user's own browser (Claude in Chrome), or tell the user the copy is missing and ask them to add the PDF.
- Always read the result before publishing it (see below). A PDF of a challenge page is worse than no copy.

### Verify

1. Extract the text (`pypdf`) and confirm it is the right document, not an error or challenge page, and that the body of every collapsible section is present (see "Collapsed accordions").
2. Page count looks plausible against the source.
3. `bunx tsc --noEmit` passes (known unrelated errors in `DB/suppliers.ts`), and the detail page returns 200 with the copy link.

## Record fields (`DB/milestones.json`)

| Field                  | Notes                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _(object key)_         | The slug: `DB/milestones.json` is an object keyed by slug, not an array. Format `YYYY-MM-DD-kebab-case` (starts with the `date`); it is the URL segment and the PDF file name |
| `title`, `description` | `description` is the few words shown on the timeline                                                                                                                          |
| `date`                 | `YYYY-MM-DD` only. The list is sorted newest first by string comparison, whatever the order in the file                                                                       |
| `author`               | author slug (foreign key into `DB/authors.json`), e.g. `education-ministry`, `knesset`; an unknown slug throws at load                                                        |
| `categories`           | values of the `MilestoneCategory` enum; a typo throws at load                                                                                                                 |
| `url`                  | the original source                                                                                                                                                           |
| `copyUrl`              | local copy, see the rule above                                                                                                                                                |
| `notice`               | optional warning shown under the date (e.g. an outdated document)                                                                                                             |
| `replacedBy`           | optional slug of the milestone that superseded this one; the detail page shows a warning linking to it                                                                        |
| `summary`              | optional bullet points, written from reading the source, not copied                                                                                                           |
| `articles`             | optional list of news-article slugs (foreign keys into `DB/publications.json`); an unknown slug throws at load                                                                |

### News articles, publishers and authors

Coverage lives outside the milestone records, so one article or outlet is defined once:

- `DB/publishers.json`, keyed by publisher slug (e.g. `kan-news`, `knesset`): `name`, optionally `icon`.
- `DB/publications.json`, keyed by article slug (`YYYY-MM-DD-<publisher>-<topic>`): `publisher` (a publisher slug), `headline`, `date`, `url`, and optionally `author` (an author slug), `description`.
- `DB/authors.json`, keyed by author slug (e.g. `noa-limona`): `name`.

A milestone lists only article slugs in `articles`; `content/milestones.ts` resolves them (and the publisher and author names) into `Publication` objects.

### Adding a news article (checklist for AI agents)

1. Read the article itself (the user's browser via Claude in Chrome, or `curl -A "Mozilla/5.0"`). Take the exact headline, the byline and the publication date from the page. Meta tags such as `article:published_time` or JSON-LD `datePublished` are reliable; image upload paths are not. If you cannot establish the date, ask the user.
2. Publisher: reuse a slug from `DB/publishers.json`. If the outlet is new, add it (slug = lowercase outlet name, `name` as the outlet writes it). `icon` is optional; if you add one, save the logo under `public/images/publishers/<publisher>.png`. Without a logo, tell the user it is missing.
3. Author: if there is a byline, reuse or add a slug in `DB/authors.json` (kebab-case transliteration of the name, `name` in Hebrew). Omit `author` when there is no byline.
4. Add the record to `DB/publications.json` with the slug `YYYY-MM-DD-<publisher>-<topic>`, `publisher`, `headline` (verbatim), `date`, `url` (the canonical article URL without tracking parameters), `author` and a short `description` (the subheadline, or a summary in your own words; never copy long passages).
5. Attach it by appending the article slug to `articles` of the relevant milestone in `DB/milestones.json`. Choose the milestone the article is about; if unclear, ask. Several articles on one milestone are fine.
6. Keep the JSON formatting (2-space indent, UTF-8 Hebrew, no escapes) and check that every slug you referenced exists, since an unknown slug throws at load.

Do not use `as` assertions in new code. Validate with type guards (or Zod if really needed).
