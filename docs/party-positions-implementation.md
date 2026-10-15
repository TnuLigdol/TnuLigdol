# Party positions page — implementation instructions

## Scope and delivery constraints
Implement the approved “מה התוכנית לילדים?” party-positions reference as a native page in this repository, at `/parties`. This is the party comparison project, not the activist field guide. Deliver a local, reviewable implementation only. Do not commit, stage, push, deploy, change hosting access, or alter remote configuration.

Baseline: clean working tree observed 15 October 2026. Repository: `/Users/shai/Projects/TnuLigdol`. Main remote: https://github.com/TnuLigdol/TnuLigdol ; fork: https://github.com/yanovskishai/TnuLigdol . Use installed native Bun (`~/.bun/bin/bun`); avoid the older Intel Node runtime because installed native dependencies are ARM64.

## References and provenance
- Approved interactive party reference: https://tnuligdol-policy-demo.kovrr-1010.chatgpt.site
- Current local reference HTML: `/Users/shai/Documents/Codex/2026-10-12/2-pdf/outputs/party-mock/index.html`
- Current reviewed source data: `/Users/shai/Documents/Codex/2026-10-12/2-pdf/outputs/party-mock/parties.json`
- Existing brand/site: https://tnuligdol.co.il/ ; use this repository’s header/footer, local `/images/logo.png`, Varela Round and green/yellow design tokens.
- Main editorial source: https://www.ynet.co.il/digital/technews/article/sjy6cb9izg (12 October 2026). Reports the FakeReporter/Brandeis questionnaire; original questionnaire responses were not independently examined. Treat these as reported positions, not a manifesto or a response to this initiative.
- Identity references: https://www.gov.il/he/pages/candidates-lists-26 and individual registry URLs retained per record. These support list identity only, not policy positions. Imported identity links have not been revalidated in this implementation task.
- Related field guide (separate project, not part of this implementation): https://tnuligdol-field-guide.kovrr-1010.chatgpt.site
- Initiative Facebook group: https://www.facebook.com/groups/tnuligdol . Do not automatically publish or contact anyone.
- Conversation PRD: public, uniform comparison of concrete policy, budget, responsibility and schedule; explicit sources; no scores or voting recommendations. The implementation below is the local editorial-data release, not a CMS or outreach system.

## Approved editorial corrections (15 October 2026)
Show only these 14 lists: ביחד, הדמוקרטים, המילואימניקים והכלכלית, הרשימה המשותפת, ישר!, ישראל ביתנו, עמך ישראל, רע״ם, הליכוד, הציונות הדתית וזהות, יהדות התורה, כחול לבן, עוצמה יהודית, ש״ס. Preserve the registered full names separately from display names.

Show six reported positions first, followed by eight records without a dedicated position. Sort alphabetically within each group. Derive all totals and filter counts from data.

Remove MK legislative activity as a substitute for party policy. For the six affected parties (Likud, Religious Zionism, UTJ, Blue and White, Otzma Yehudit, Shas), use the same concise wording as other unknown records: “לא נמצאה עמדה ייעודית בסוגיה.” This is a statement about the available evidence, not proof that no policy exists. Do not claim those parties refused this initiative: no outreach was sent. Do not infer individual non-response from Ynet’s collective coalition statement.

For ביחד, retain the short Ynet excerpt and explicitly disclose that the source spells the name “יחד” and the mapping to ביחד follows the user-supplied editorial correction. Do not silently assert an independently verified identity match. Quote the article as reporting, not as a verbatim party answer. Keep the excerpt under 25 words. Leave all budget, schedule and implementation-owner fields unknown unless backed by a specific source.

## Architecture
- `app/parties/page.tsx`: server route, metadata, passes typed content to client interface. Let the root layout render Header/Footer; do not embed a second document or iframe.
- `content/party-positions.json`: single editorial source of truth, including review date, scope, sources and complete detail fields.
- `content/party-positions.ts`: types and sorting helpers/exports, no duplicated source data.
- `components/parties/party-positions.tsx`: search, filters, selectable comparison, details, principles and sharing. Use React state rather than raw HTML injection.
- `components/parties/party-positions.module.css`: isolated responsive presentation. Use existing font and brand tokens; do not change unrelated global styles.
- Shared navigation: add an “עמדות המפלגות” entry; check desktop width after insertion. Add the route to sitemap generation (do not manually rewrite generated sitemap).

## Required behavior
1. Hero asks for a serious funded plan. Prominent last-reviewed date and editorial scope notice.
2. Cards: ballot letters, party name, evidence status, concise summary, budget/schedule/owner, source and detail access.
3. Search by name, full name or ballot letters; status filters; empty state; live visible count.
4. Details: full source trail, uncertainty, and no invented responses or adoption claim.
5. Compare 2–4 selected parties on the same four dimensions. Selection persists while filtering. One selection cannot open comparison; fifth selection produces an explanatory message.
6. Use native modal dialog for focus containment, Escape and focus restoration. Give dialog a title, visible close button and scrollable body; it must appear above the sticky site header.
7. Share a stable party anchor (`/parties#party-p37`), copy a factual message, and download a dated card. Never label a reported position as an adopted commitment. User explicitly triggers copying or download; no automatic posting.
8. Explain methodology and show draft principles. No CMS, forms collecting personal information, ratings, email integrations or backend storage.
9. Data download must be generated from the same imported JSON, not a stale parallel copy.

## Design and accessibility
Hebrew RTL; green hero, dark-green action buttons, yellow accents, light editorial cards. Desktop three columns, tablet two, mobile one. Ensure no horizontal page overflow at 390px; comparison can have its own scroll region. Visible focus rings, named inputs and checkbox labels, text-based statuses, adequate contrast. Disable decorative motion for reduced-motion preferences. Mobile header remains usable. Do not present prototype badges or fictitious party data in the real page.

## Verification and acceptance
Run the repository typecheck with Bun. Validate the data: exactly 14 unique IDs, six reported/eight unknown, no legislation type, reviewed source date separate from publication date, all detail arrays complete. Run production compilation without invoking publication. Verify local `/parties` and existing `/` respond successfully. Browser-check desktop and mobile; exercise search, filters, details, Escape, comparison bounds, sharing feedback and no-result state. Record actual results below, including any pre-existing or environment failures. Inspect final git diff/status and ensure changes remain unstaged/uncommitted.

## Future publication work (not authorized here)
Resolve the original questionnaire/name discrepancy independently; approve principles; review factual freshness; approve public navigation and deploy through the repository’s normal workflow. A CMS, outreach audit log and formal-response verification are separate follow-up scope.

## Validation results
Verified locally on 15 October 2026:
- `bun run typecheck`: passed.
- `~/.bun/bin/bun --bun next build`: passed; `/parties` is statically prerendered. Initial sandboxed build failed because Turbopack could not bind its CSS worker port; rerunning with the approved process permissions succeeded.
- Data assertions passed: 14 unique IDs, six reported/eight unknown, complete four-part detail arrays and uniform unknown status.
- Existing development server at http://localhost:3000 remains running. `/parties` and `/` both return HTTP 200. No existing server was stopped or replaced.
- Browser checks passed: search finds Likud alone; unmatched search shows reset; reported filter shows six; details include the ביחד disclosure; Escape closes the dialog; one-party comparison is disabled; a fifth selection is rejected; four-party comparison renders all dimensions; copied text includes status, date and stable party anchor.
- PNG sharing card downloaded and visually inspected at 1080×1080. Browser download-event observation timed out, but the actual files were written to Downloads and confirmed visually.
- Desktop appearance reviewed at 1280px. No page overflow at 1140px or 390px. Mobile cards, modal and navigation reviewed. Viewport override reset afterward.
- Browser console had no errors/warnings during the reviewed interactions.
- Added `/parties` to the sitemap generator; the generated sitemap remains untouched because the validation called Next directly rather than the publishing build script.
- All changes remain unstaged and uncommitted. No push, deployment, outreach or public posting performed.

## Independent review fixes (15 October 2026)
Full source verification: `docs/party-positions-fact-check.md`.

**Data (`content/party-positions.json`)**
- Ynet fidelity: the privacy concern is attributed to all five non-ביחד respondents, as the article does; it was previously on two. The global-turnover fines point was added to ביחד.
- The ביחד quote now includes its subject. The יחד→ביחד mapping is now backed by the registered list name and pc.co.il, and the disclosure says so.
- Registered names use a hyphen instead of an en dash.

**Sharing**
- Copied text and PNG cards keep the "in the sources reviewed" qualifier for unknown records and include the status line.
- The page sets its own `openGraph` URL. Previously shares resolved to the homepage.

**Search and UX**
- Search ignores quote marks, so `ש"ס`, `רע"ם` and `רעם` match.
- Phones (≤600px) get stacked per-party comparison blocks instead of a sideways-scrolling table.
- The hero title is dark, with "לילדים?" on a deep-green marker. White on the hero green was 2.48:1.
- A spacer keeps the compare bar off the footer, and only one live region announces at a time.

**Lint**
- Explicit button types, fieldset/legend for the filters, no ARIA labels on generic elements, no `!important`.
- Biome is clean on all changed files.

**Header**
- Menu is 14px at 1140-1199px and 15px from 1200px. The original 15.5px/16px overflows at every width, measured.

**Hydration**
- `suppressHydrationWarning` on the three mailto links. Mail extensions such as "Mailto for Gmail" rewrite them before hydration, which produced the reported console error. This was reproduced with a simulated rewrite and confirmed fixed.

## Local preview and maintenance
Open http://localhost:3000/parties while the existing server runs. To start later:

```sh
cd /Users/shai/Projects/TnuLigdol
~/.bun/bin/bun --bun next dev
```

Edit `content/party-positions.json` to update records and `checked_at`. Keep sources and unknown fields faithful to the evidence; do not advance the review date merely for a code change. Counts, filters, comparison, downloads and sharing read from that dataset. The proposed principles live in the client component and remain labeled as a draft. Shared header spacing was reduced slightly to accommodate the added navigation item at the existing desktop breakpoint.

Sharing links deliberately use the current origin: local previews generate localhost links; the deployed page will generate its deployment-domain links. Do not circulate localhost cards as public URLs. No backend or persistence was added.
