# Party positions page: fact-check record

Status as of 15 October 2026. Independent review of `DB/2026-10-party-positions.json`, the data behind `/parties`.
This file records what was checked, what is still open, and what the data needs before public release.
No data or code was changed during this review.

> **Update, 17 October 2026.** A second independent check confirmed all six reported records against ynet. The FakeReporter graphic in the article shows each party's answers. It also corrected two statements below:
>
> - **Not byte-identical:** the production JSON is no longer byte-identical to the prototype. It was edited after this review (section 9).
> - **Waldiger:** MK מיכל וולדיגר is #30 on behalf of האיחוד הלאומי - תקומה, not זהות.
>
> The יחד/ביחד match is a strong inference, not a confirmed fact. No list is registered as "יחד", and pc.co.il calls it Bennett and Lapid's party, but the original questionnaire answer was not seen. The explanation was removed from the page for public release; the pc.co.il source stays on the ביחד card.

## 1. Sources examined

| Source                                                                                                                                                                  | Access                                                       | Notes                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| ynet, "המערב הפרוע של הרשתות: הציבור רוצה להגן על הילדים. הפוליטיקאים מהססים", רפאל קאהאן, 12.10.2026 11:34. https://www.ynet.co.il/digital/technews/article/sjy6cb9izg | Full text (HTTP 200)                                         | The main source.                                         |
| pc.co.il, 12.10.2026, coverage of the same questionnaire. https://www.pc.co.il/news/%D7%A8%D7%A9%D7%AA%D7%95%D7%AA-%D7%97%D7%91%D7%A8%D7%AA%D7%99%D7%95%D7%AA/459488/   | Full text                                                    | Used for corroboration only.                             |
| mako, 12.10.2026, coverage of the same conference                                                                                                                       | Full text                                                    | Used for corroboration only.                             |
| gov.il candidates-lists-26 (updated 12.10.2026) and all 14 registry pages                                                                                               | gov.il returns 403 to scripts; read via the r.jina.ai mirror | Used for identity only.                                  |
| the7eye.org.il/594759                                                                                                                                                   | **Not accessible** (Cloudflare CAPTCHA)                      |                                                          |
| FakeReporter data graphic inside the ynet article                                                                                                                       | **Not readable** (image only)                                | It may hold a per-party breakdown that we have not seen. |
| Original FakeReporter / Brandeis questionnaire answers                                                                                                                  | **Not available**                                            | Every "reported" position is second-hand, through Ynet.  |

## 2. Structural checks (all pass)

- Exactly 14 lists, with display names matching the approved list exactly. There are 14 unique IDs.
- 6 records are `reported` and 8 are `unknown`. No record uses the legislation type.
- Order: the reported records come first, sorted alphabetically, followed by the unknown records, sorted alphabetically.
- All 8 unknown records use "לא נמצאה עמדה ייעודית בסוגיה."
- All 14 detail arrays have 4 entries. Budget, timeline and owner are "לא ידוע" for all 14.
- At the time of this review, the production JSON was **byte-identical** to the reviewed prototype `party-mock/parties.json`. Every content issue below was inherited from the prototype, not introduced in implementation.
- The page states that no outreach was sent and does not imply that any party ignored this initiative.
- The principles are labelled as a draft.

## 3. Claim-by-claim verification against Ynet

### What the article actually says (verbatim)

1. "בעוד שכל שש המפלגות שהשיבו עד כה לשאלון – ישר!, יחד, הדמוקרטים, ישראל ביתנו, הרשימה המשותפת ורשימת המילואימניקים והכלכלית – הביעו תמיכה גורפת בחובות הגנה מוגברות על קטינים, חמש מתוכן הצהירו כי "טרם גיבשו עמדה" לגבי הגבלת גיל השימוש ל- 16 ומעלה."
2. "המפלגה היחידה שהתייצבה מאחורי המהלך היא "יחד", שהציגה תוכנית להטלת קנסות על הפלטפורמות עצמן ואימות גיל ללא מסירת תעודות מזהות. שאר המפלגות, ובראשן רשימת המילואימניקים והכלכלית והדמוקרטים, הביעו חשש מיצירת מאגרי זיהוי ביומטריים בידי תאגידים זרים ומפגיעה באנונימיות."
3. "ושש המפלגות תומכות בהכפפת התאגידים לדין הישראלי, תוך איום בקנסות הנגזרים מהמחזור הגלובלי, כפי שהציעו יחד, הדמוקרטים והמילואימניקים."
4. "ynet פנה גם למפלגות הקואליציה ... עד למועד פרסום הכתבה לא התקבלה תגובה מטעמן."

### Verdicts

| Claim in our data                                  | Parties                       | Verdict                                                                                                                                                                                                                                   |
| -------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Support for enhanced duties to protect minors      | All 6                         | **Verified.** The statement is collective, but the article names all six. Wording it as each party's position is fair.                                                                                                                    |
| "טרם גובשה עמדה על סף גיל 16"                      | The 5 other than ביחד         | **Verified by inference.** The article says "five of them" and that "יחד" is the only exception, so the five are identifiable even though none is named individually. pc.co.il confirms: "שאר המפלגות טרם גיבשו עמדה".                    |
| Subjecting platforms to Israeli law                | All 6                         | **Verified** ("שש המפלגות").                                                                                                                                                                                                              |
| Fines based on global turnover                     | הדמוקרטים, המילואימניקים      | **Verified.** The article names them specifically.                                                                                                                                                                                        |
| Fines based on global turnover                     | ביחד                          | **Missing from our data.** The article also names "יחד" here.                                                                                                                                                                             |
| Privacy concerns, marked "דווח גם"                 | Only הדמוקרטים, המילואימניקים | **Partly inaccurate.** The article attributes this to all five "remaining parties" and names these two only as the leading examples ("ובראשן"). It is not specific to them. It is also missing from ישר!, הרשימה המשותפת and ישראל ביתנו. |
| Support for an age-16 limit                        | ביחד                          | **Verified.** "יחד" is the only party that backs the move. pc.co.il: "רק מפלגת יחד של בנט ולפיד תומכת באיסור על שימוש ברשתות החברתיות מתחת לגיל 16."                                                                                      |
| Quote "שהציגה תוכנית להטלת קנסות ... תעודות מזהות" | ביחד                          | **Verbatim and correctly attributed**, but it starts mid-sentence (see 5.B).                                                                                                                                                              |

**Collective statement wrongly attributed to an individual party?** Partly: the privacy concern is presented as specific to two parties when the article gives it to five. No other misattribution was found.

**Coalition:** The article contains only a collective statement that ynet's request went unanswered. A photo caption is stronger ("מפלגות הקואליציה סירבו לענות"). The page correctly does not use either. כחול לבן, רע"ם and עמך ישראל are not mentioned in ynet.

## 4. יחד vs. ביחד

**Supported, with good evidence. Recommend changing the disclosure from "per editorial correction" to "verified".**

- No list registered under the exact name "יחד" exists in the 26th Knesset elections.
- The official list "ביחד בראשות נפתלי בנט" (letters רק) is a joint run of "ביחד בראשות בנט מחזירים את התקווה" and "יש עתיד".
- pc.co.il calls it "מפלגת יחד של בנט ולפיד".
- mako, covering the same conference, quotes Eitan Ginzburg "ממפלגת ביחד". He is #8 on the ביחד list.
- **Possible confusion:** a separate list, "ביחד נצליח – רשימה משותפת ערבית יהודית בראשות אבי שקד" (letters בד), exists. The evidence above excludes it as ynet's "יחד".

## 5. Issues to fix in the data

**A. Privacy concern misattributed (high).** In p1 (הדמוקרטים) and p8 (המילואימניקים), "דווח גם על חשש לפגיעה בפרטיות" implies something said only by those two. Fix it one of two ways:

- add it to all five non-ביחד reported records, as "לפי ynet, חמש המפלגות שלא תמכו בהגבלת גיל הביעו חשש...", or
- remove it from both.

**B. ביחד record incomplete, and the quote is a fragment (medium).** Add the global-turnover fines point, which the article attributes to "יחד". Rewrite the quote with its subject, for example: לפי ynet, "המפלגה היחידה שהתייצבה מאחורי המהלך היא 'יחד', שהציגה תוכנית להטלת קנסות על הפלטפורמות עצמן ואימות גיל ללא מסירת תעודות מזהות" (23 words).

**C. "Not found" loses its qualifier when shared (medium, code).** The copied text and the PNG card read "הליכוד: לא נמצאה עמדה ייעודית בסוגיה." with no "במקורות שנסקרו". On the PNG the phrase appears twice. Fix this in `components/parties/party-positions.tsx`.

**D. Gershayim vs. ASCII quotes (low).** The data uses ״ and ׳. The registry uses " and '. Display is fine, but search breaks (see the technical report).

**E. En dashes in registered names (low, style).** "יהדות התורה והשבת אגודת ישראל – דגל התורה" and "רע״ם – הרשימה הערבית המאוחדת" **match the official names**. Keep them, or switch to hyphens per house style. The page copy also has two em dashes, which house style says to replace.

## 6. Identity (all pass)

- All 14 ballot letters and registered full names match gov.il.
- All 14 registry URLs return 200 and are the ones linked from the official page.
- The odd slugs are legitimate:
  - `halikud-tikvahadasha_iist29` is Likud plus New Hope. "iist" is gov.il's own typo.
  - `yehudit-meuhedet_list14` is עוצמה יהודית with "ארץ ישראל שלנו - מפלגה יהודית מאוחדת".
  - `yahadut-degel_list37` is דגל התורה, אגודת ישראל and חומת תורת ישראל.

## 7. Freshness risk for the 8 "not found" records

No party-level 2026 position was found for any of the eight. These MK-level items exist; they are **not** party policy, but readers may cite them against the page:

- **ש"ס:** bill פ/6415/25 by MK יוסף טייב (#9 on the Shas list) sets 16 as the minimum age for opening a social-network account. This is the highest risk of the page looking stale or unfair. https://www.law.co.il/legislation/2026/01/03/protection-of-minors-online-age-restriction-private-bill/
- **הציונות הדתית וזהות:** MK מיכל וולדיגר (#30, of האיחוד הלאומי - תקומה) presented her bill at the 12.10 conference: Israeli courts as the venue, parental monitoring, 150K ₪ fines.
- No hits for the other six: הליכוד, עוצמה יהודית, יהדות התורה, כחול לבן, רע"ם, עמך ישראל. The search was limited (about 6 queries), so confidence is moderate.

**Context worth knowing (pc.co.il):** the questionnaire went to 13 parties. All 5 coalition parties, plus רע"ם and עמך ישראל, did not answer. That accounts for 13, which implies **כחול לבן was not sent the questionnaire**. This is an inference. The page doesn't claim non-response, so nothing is wrong today, but never add "did not answer" for כחול לבן.

## 8. Not completed

- The per-party breakdown in the FakeReporter graphic (image only) was not read.
- the7eye coverage was blocked by a CAPTCHA.
- Knesset bill database and party websites were not searched directly.
- The original questionnaire answers were not seen.

## 9. Before public release

1. ~~Fix A and B in the JSON. Change the ביחד disclosure to reflect that the mapping is now independently supported.~~ **Done, 15.10.2026.**
   - The privacy concern is now stated as the five parties' collective concern on all five non-ביחד records. הדמוקרטים and המילואימניקים are noted as leading it and as proposing global-turnover fines.
   - ביחד now has a 20-word full-clause quote and the global-turnover fines point.
   - The disclosure now cites the registered list name and pc.co.il, which was added as a second source.
2. ~~Fix C in the component.~~ **Done.** Copied text and PNG cards now carry "במקורות שנסקרו... אין בכך קביעה שאין מדיניות" plus the status line.
3. ~~Dashes (E).~~ **Done.** Registered names now use a hyphen per house style; the gov.il originals use an en dash. Page copy has no em dashes.
4. **Open, editorial decision:** should MK bills (especially Shas's age-16 bill) be acknowledged in the methodology, for example "קיימות הצעות חוק פרטיות של ח״כים; הן אינן מוצגות כעמדת מפלגה", so readers don't see an omission?
5. **Open:** re-run the freshness search close to publication, and update `checked_at` only then.
