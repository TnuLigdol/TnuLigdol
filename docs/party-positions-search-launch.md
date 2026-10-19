# Party positions page: search launch handoff

Status as of 17 October 2026.

- **Production URL:** https://tnuligdol.co.il/parties
- **Search phrase:** תנו לגדול מפלגות
- **Live state:** published 17.10.2026 via #49 (`d8bcfa2`). All post-deploy checks in section 4 passed on production.
- **Search visibility:** nothing here guarantees indexing or ranking. Google decides both.

## Launch log (17.10.2026)

**Search Console:**
- **Property:** `https://tnuligdol.co.il/` (URL prefix), verified by yanovskishai with the HTML file `public/googlecc2c7af39290314b.html` (#50).
  - **Keep that file.** Deleting it un-verifies the property.
  - A separate Domain property was already verified by someone else through a DNS TXT record, so it predates this work.
- **URL Inspection, `/parties`:**
  - The live test said "URL is available to Google".
  - Indexing was requested, and the URL was added to the priority crawl queue.
- **Homepage:** indexing re-requested, since it now links to `/parties`.
- **Sitemaps:** `sitemap.xml` submitted; Google read 12 URLs. The old WordPress `sitemap_index.xml` (404 since the rebuild) was removed from the list.

**Hosting and DNS:**
- DNS is managed at **livedns.co.il** (`park1`/`park2.livedns.co.il`), not Cloudflare. Cloudflare only serves the traffic.

**Still open:**
- the prototype redirect (section 7)
- the "חפשו בגוגל" wording, which waits until the page actually appears for the phrase

## 1. What was implemented and verified locally

| Change | File |
|---|---|
| Final title "תנו לגדול - עמדות המפלגות על ילדים, מסכים ורשתות חברתיות". It uses `title.absolute`, so the root template doesn't add the brand a second time. | `app/parties/page.tsx` |
| Meta description. Every record's budget, timeline and owner are unknown, so it says the page *checks whether* they were published. | `app/parties/page.tsx` |
| Open Graph and Twitter title and description match the page. The OG image height is corrected to its real 628px, here and in the root layout. | `app/parties/page.tsx`, `app/layout.tsx` |
| Visible intro. The eyebrow names the initiative and the page. The lead names the subject and the demand. The H1 "מה התוכנית לילדים?" is unchanged. | `components/parties/party-positions.tsx` |
| Compact homepage panel linking to `/parties`. It is a plain `<a href>` placed after the signup band. Placed before that band, the band's decorative kid images covered it. | `components/home/parties-section.tsx`, `content/homepage.ts`, `app/page.tsx` |

**Already in place before this change:**
- the nav link "עמדות המפלגות" (desktop and mobile menu)
- `/parties` in the sitemap generator
- `robots.txt` allowing everything and pointing to the sitemap
- `index, follow` from the root layout

**Verified on the static export (`out/`):**
- `out/parties.html` has:
  - one document `<title>`, with the expected text
  - the description
  - canonical `https://tnuligdol.co.il/parties`
  - robots `index, follow`
  - `og:url` matching the canonical
  - `og:image` pointing to `https://tnuligdol.co.il/og-image.png`, which is live (HTTP 200, image/png)
  - all 14 party cards, the intro and the disclaimer in the server HTML
- It has no keywords tag and no structured data. The site has no structured-data convention, and none was added.
- `bun run scripts/generate-sitemap.ts` (the repo's `prebuild` step) outputs `<loc>https://tnuligdol.co.il/parties</loc>`.
  - The URL is absolute, has no `lastmod`, and the sitemap has 12 URLs.
  - The sitemap is generated at build time and is gitignored.

**Browser checks** (Chrome, 1280px and 390px):
- The homepage panel is fully visible: no element covers its heading or button.
- The homepage button and the mobile menu link both reach `/parties`.
- Search, filters, the comparison dialog and the details dialog still work.
- No horizontal overflow and no console errors.

Typecheck, Biome, `git diff --check` and `next build` all pass.

## 2. How the site is deployed

The site is a Next.js static export (`output: 'export'`). Commit `dbfeed3` set it up for Render. Production is served through Cloudflare.

The Render service settings were **not inspected** because there was no account access. Confirm in Render that:
- the build command runs `bun run build`, so `prebuild` regenerates the sitemap
- the publish directory is `out`
- the service deploys automatically from `main` of `TnuLigdol/TnuLigdol`

## 3. Publication steps

Asaf-S merges. Pushing to `origin` returns 403.

1. Push the branch to the fork: `git push fork feat/parties-public-ready`.
2. Open a PR to `TnuLigdol/TnuLigdol:main` with `--head yanovskishai:feat/parties-public-ready`.
   - It carries three commits: the page, the public-release edits, and this search work.
3. Asaf reviews, approves the fork CI run, and merges.
   - A fork PR run showing "failure" with 0 jobs means it was not approved. Check the post-merge `push` run on `main`.
4. Render deploys. Confirm the deploy finished in Render.

## 4. Post-deployment checks

```sh
curl -sI https://tnuligdol.co.il/parties | grep -iE '^HTTP|x-robots'       # expect 200, no X-Robots-Tag noindex
curl -s https://tnuligdol.co.il/parties | grep -oE '<title>[^<]*</title>|<link rel="canonical"[^>]*>|<meta name="robots"[^>]*>'
curl -s https://tnuligdol.co.il/robots.txt                                # Allow: / and the Sitemap line
curl -s https://tnuligdol.co.il/sitemap.xml | grep parties                # <loc>https://tnuligdol.co.il/parties</loc>
curl -s https://tnuligdol.co.il/ | grep -o 'href="/parties"' | wc -l      # expect 2 (nav + homepage panel)
```

- Open the page on a phone.
- Check that copied share links and PNG cards now show `https://tnuligdol.co.il/parties#party-…`, not localhost.
- Render also serves `/parties/` and `/parties.html` with HTTP 200. The canonical tag points all of them to `/parties`, so nothing needs to change.

## 5. Google Search Console

These steps need the owner or a full user of the site's property. Done once on 17.10.2026; see the launch log at the top.

1. **Find the property.** Prefer an existing Domain property `tnuligdol.co.il`, or a URL-prefix property `https://tnuligdol.co.il/`.
   - If none exists, the site owner verifies one. A Domain property needs a DNS TXT record at livedns.co.il.
   - Don't create tokens on someone else's behalf.
2. **Inspect the page.** After the deploy, open URL Inspection for `https://tnuligdol.co.il/parties`.
3. **Run the live test.** Click "Test live URL" and confirm the page can be indexed, the canonical matches, and the HTML is rendered.
4. **Request indexing.** Do this once. Repeat requests don't speed it up and are limited by a quota.
5. **Sitemap.** Under Sitemaps, confirm `https://tnuligdol.co.il/sitemap.xml` is submitted. Submit it if not, then check its read status and the number of URLs found.
6. **Monitor:**
   - Check URL Inspection for the indexing state.
   - In Performance, filter by page `/parties`, then by queries containing "תנו לגדול מפלגות", "עמדות המפלגות ילדים" and "תנו לגדול".
   - Low-volume queries can be anonymized and missing from the report.
   - Crawling can take days to weeks.

## 6. Account access needed

| Task | Who |
|---|---|
| PR merge | Asaf-S |
| Check Render settings and confirm the deploy | Render account |
| URL Inspection, request indexing, sitemap | Search Console owner or full user |
| If a Domain property must be verified: DNS TXT record | DNS at livedns.co.il for tnuligdol.co.il |
| Prototype redirect, noindex or takedown | Owner of the kovrr-1010.chatgpt.site hosting |

## 7. The standalone prototype

https://tnuligdol-policy-demo.kovrr-1010.chatgpt.site/ is public, returns 200, and has no noindex and no canonical. Its "robots.txt" path returns the HTML page itself.

It could compete for brand searches. Its title is "מי מתחייב לשמור על הילדים ברשת? | תנו לגדול על שקט - עמדות ומקורות". It also still shows older wording that was removed for production, such as "גרסת עבודה", "טרם נשלחו פניות" and the earlier ביחד summary.

**Do this only after `/parties` is live**, so the content never disappears from the web in between. In order of preference:

1. **301 redirect** the whole prototype to `https://tnuligdol.co.il/parties`, if the host supports redirects. This is the strongest consolidation signal.
2. **If it can't redirect:** replace the page with a short notice linking to the production URL, and add `<meta name="robots" content="noindex">`.
3. **Or unpublish it,** if nobody needs it anymore.

A cross-domain `rel="canonical"` to production is weaker. It's a hint, and only appropriate if the prototype must stay identical and accessible. Don't combine it with noindex.

The activist field guide is a separate project and outside this plan.

## 8. Campaign wording

Use "חפשו בגוגל: תנו לגדול מפלגות" only after the page appears in Google for that phrase. Until then, always share the direct link.

Suggested message (until search visibility is confirmed):

> מה התוכנית לילדים? ריכזנו את עמדות המפלגות על ילדים, מסכים ורשתות חברתיות, עם המקורות. אנחנו מבקשים מכל מפלגה תוכנית ציבורית רצינית ומתוקצבת, עם אחריות ברורה ולוחות זמנים.
> https://tnuligdol.co.il/parties

After it is visible in search, append the line "חפשו בגוגל: תנו לגדול מפלגות" and keep the link.

## 9. Limits

- Indexing, ranking, the displayed title and the snippet are decided by Google. Google may rewrite the title or description.
- Nothing here guarantees a first-place result, quick indexing, or indexing at all.

## Open editorial notes (not changed in this task)

- **Removed wording:** the page no longer shows the "no outreach was sent" notes, the "draft" principles label, or the יחד/ביחד explanation. They were removed on 17.10.2026 at the user's request for public release. The ynet quote on the ביחד card still says "יחד", explained only by the pc.co.il source title.
- **Shas:** MK bills from Shas (an age-16 bill from Taieb, and an under-14 bill from Taieb with Shiri) are the main risk of the page looking stale. Re-run the freshness search before publishing. Update `checked_at` only if the evidence was actually reviewed again.
- **Sitemap gaps:** the generator omits `/devices`, `/suppliers` and `/contribute`. This was already the case before this work and is outside its scope.
