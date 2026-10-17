'use client';

import { useEffect, useRef, useState } from 'react';
import type { Party, PartyData } from '@/content/party-positions';
import s from './party-positions.module.css';

const dimensions = ['צעדים מעשיים', 'תקציב', 'לוח זמנים', 'אחריות לביצוע'];
const principles = [
  [
    'תוכנית לאומית מתוקצבת',
    'יעדים ברורים, תקציב ייעודי, גורם אחראי ולוח זמנים שאפשר לבדוק.',
  ],
  [
    'אחריות של הפלטפורמות',
    'הגנה על ילדים כבר בתכנון השירות, אכיפה ושקיפות, תוך שמירה על פרטיות.',
  ],
  [
    'גב להורים ולמערכת החינוך',
    'כלים, הכשרה ותמיכה להורים ולצוותי חינוך, בלי להטיל עליהם את כל האחריות.',
  ],
  [
    'חלופות ומדידה',
    'השקעה בפנאי ובמפגש חברתי, מחקר והערכה שיאפשרו לשפר את המדיניות.',
  ],
];
type Modal =
  | { kind: 'party'; party: Party }
  | { kind: 'compare' }
  | { kind: 'principles' }
  | null;

// Hebrew keyboards type ASCII " and ' where the data uses gershayim/geresh
// (ש״ס, רע״ם), so search ignores quote marks of either kind.
function normalize(text: string) {
  return text
    .replace(/["'״׳`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Shared text leaves the page behind, so an unknown record keeps its scope:
// the gap is in the sources reviewed.
function shareSummary(party: Party) {
  return party.type === 'unknown'
    ? 'במקורות שנסקרו לא נמצאה עמדה ייעודית בסוגיה.'
    : party.text;
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function PartyPositions({
  data,
  parties,
}: {
  data: PartyData;
  parties: Party[];
}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | Party['type']>('all');
  const [selected, setSelected] = useState<string[]>([]);
  const [modal, setModal] = useState<Modal>(null);
  const [notice, setNotice] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const date = data.checked_at.split('-').reverse().join('.');
  const reported = parties.filter((party) => party.type === 'reported').length;
  const needle = normalize(query);
  // Ballot letters like ל or ב also occur inside most names, so an exact
  // letters match wins over the substring search.
  const letterMatches = parties.filter(
    (party) => normalize(party.letter) === needle,
  );
  const visible = parties.filter(
    (party) =>
      (filter === 'all' || party.type === filter) &&
      (letterMatches.length
        ? letterMatches.includes(party)
        : normalize(`${party.name} ${party.full} ${party.letter}`).includes(
            needle,
          )),
  );
  const compared = parties.filter((party) => selected.includes(party.id));

  useEffect(() => {
    if (!modal) return;
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [modal]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 6000);
    return () => clearTimeout(timer);
  }, [notice]);

  // A notice belongs to where it was raised: opening or closing a dialog
  // drops it, so "copied" never shows up in a dialog the user didn't copy from.
  function changeModal(next: Modal) {
    setNotice('');
    setModal(next);
  }
  function toggle(id: string) {
    if (selected.includes(id))
      setSelected(selected.filter((item) => item !== id));
    else if (selected.length < 4) setSelected([...selected, id]);
    else setNotice('אפשר להשוות עד ארבע מפלגות. הסירו אחת כדי לבחור אחרת.');
  }
  async function copy(party?: Party) {
    const url = `${window.location.origin}/parties${party ? `#party-${party.id}` : ''}`;
    const message = party
      ? `${party.name} · ${party.status}\n${shareSummary(party)}\nנבדק ב־${date}. מה התוכנית, התקציב ולוח הזמנים?\n${url}`
      : `מה התוכנית לילדים? בודקים את עמדות המפלגות ודורשים תוכנית רצינית ומתוקצבת להגנת ילדים בעולם הדיגיטלי.\n${url}`;
    try {
      await navigator.clipboard.writeText(message);
      setNotice('הטקסט והקישור הועתקו. אפשר להדביק ולשתף.');
    } catch {
      setNotice(
        'ההעתקה לא זמינה בדפדפן הזה. אפשר להעתיק את כתובת העמוד משורת הכתובת.',
      );
    }
  }
  async function downloadCard(party: Party) {
    try {
      await document.fonts.ready;
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1080;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas unavailable');
      context.fillStyle = '#eaf1ea';
      context.fillRect(0, 0, 1080, 1080);
      context.fillStyle = '#1c631e';
      context.fillRect(0, 0, 1080, 180);
      context.direction = 'rtl';
      context.textAlign = 'right';
      context.fillStyle = '#fff';
      context.font = '40px "Varela Round", Arial';
      context.fillText('תנו לגדול על שקט · מה התוכנית לילדים?', 1000, 105);
      context.fillStyle = '#0c330d';
      context.font = '56px "Varela Round", Arial';
      context.fillText(party.name, 1000, 290, 920);
      context.font = '30px "Varela Round", Arial';
      context.fillText(party.status, 1000, 360);
      context.font = '36px "Varela Round", Arial';
      let line = '';
      let y = 455;
      for (const word of shareSummary(party).split(' ')) {
        if (context.measureText(`${line} ${word}`).width > 920 && line) {
          context.fillText(line, 1000, y);
          y += 57;
          line = word;
        } else line = `${line} ${word}`.trim();
      }
      context.fillText(line, 1000, y);
      context.font = '28px "Varela Round", Arial';
      context.fillText(
        `תקציב: ${party.budget} · לוח זמנים: ${party.time} · אחריות: ${party.owner}`,
        1000,
        820,
        920,
      );
      context.fillText(`נבדק ב־${date} · מקורות והסתייגויות בעמוד`, 1000, 895);
      context.direction = 'ltr';
      context.textAlign = 'left';
      context.font = '24px Arial';
      context.fillText(
        `${window.location.origin}/parties#party-${party.id}`,
        80,
        980,
        920,
      );
      canvas.toBlob((blob) => {
        if (blob) {
          download(blob, `party-${party.id}-${data.checked_at}.png`);
          setNotice('כרטיס השיתוף מוכן להורדה.');
        } else
          setNotice('לא ניתן ליצור את התמונה. אפשר להעתיק את הטקסט והקישור.');
      }, 'image/png');
    } catch {
      setNotice('לא ניתן ליצור את התמונה. אפשר להעתיק את הטקסט והקישור.');
    }
  }

  return (
    <div className={s.page}>
      <section className={s.hero} aria-labelledby="party-page-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow}>
              תנו לגדול על שקט · עמדות המפלגות · בחירות 2026
            </p>
            <h1 id="party-page-title">
              מה התוכנית
              <br />
              <span>לילדים?</span>
            </h1>
            <p className={s.lead}>
              הורים ואנשי חינוך לא צריכים להתמודד עם זה לבד.
              <br />
              ריכזנו כאן את עמדות המפלגות על ילדים, מסכים ורשתות חברתיות. אנחנו
              מצפים מהמפלגות להוביל תוכנית ציבורית רצינית ומתוקצבת, עם אחריות
              ברורה ולוחות זמנים לביצוע.
            </p>
            <div className={s.actions}>
              <a className={s.button} href="#positions">
                בודקים את עמדות המפלגות ↓
              </a>
              <button
                type="button"
                className={s.secondary}
                onClick={() => changeModal({ kind: 'principles' })}
              >
                מה אנחנו מבקשים?
              </button>
            </div>
            <p className={s.small}>מידע ממקורות פומביים · נבדק ב־{date}</p>
          </div>
          <aside className={s.pledge}>
            <div className={s.pledgeTop}>
              <span>לא עוד הבטחה כללית</span>
              <span>אלא תוכנית.</span>
            </div>
            <h2>
              מילים טובות הן התחלה.
              <br />
              לילדים מגיע יותר.
            </h2>
            <ul>
              {[
                'צעדים מעשיים',
                'תקציב ייעודי',
                'לוח זמנים ברור',
                'אחריות לביצוע',
              ].map((text) => (
                <li key={text}>
                  <span aria-hidden="true">✓</span>
                  {text}
                </li>
              ))}
            </ul>
            <p>זו הבקשה שלנו מכל מפלגה.</p>
          </aside>
        </div>
      </section>
      <div className={s.wrap}>
        <div className={s.stats}>
          <div>
            <strong className={s.statTitle}>תמונת המצב</strong>
            <small>לפי המקורות שנבדקו</small>
          </div>
          <div>
            <strong>{parties.length}</strong>
            <small>רשימות בסקירה</small>
          </div>
          <div>
            <strong>{reported}</strong>
            <small>עמדות שדווחו בתקשורת</small>
          </div>
          <div>
            <strong>{parties.length - reported}</strong>
            <small>ללא עמדה ייעודית שנמצאה</small>
          </div>
        </div>
        <section
          id="positions"
          className={s.section}
          aria-labelledby="positions-title"
        >
          <div className={s.sectionHead}>
            <div>
              <h2 id="positions-title">מה המפלגות אומרות?</h2>
              <p>אותן שאלות. אותם קריטריונים. המקורות פתוחים לכולם.</p>
            </div>
            <span className={s.review}>עודכן {date}</span>
          </div>
          <div className={s.toolbar}>
            <fieldset className={s.filters}>
              <legend className={s.srOnly}>סינון לפי סוג המידע</legend>
              {(
                [
                  ['all', `כל הרשימות (${parties.length})`],
                  ['reported', `עמדה שדווחה (${reported})`],
                  ['unknown', `לא נמצאה עמדה (${parties.length - reported})`],
                ] as const
              ).map(([value, label]) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </fieldset>
            <label className={s.search}>
              <span className={s.srOnly}>חיפוש מפלגה</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="חיפוש לפי שם או אותיות…"
              />
            </label>
          </div>
          <p className={s.resultCount} aria-live="polite">
            מציגים {visible.length} מתוך {parties.length} רשימות · עמדות שדווחו
            מוצגות ראשונות
          </p>
          <div className={s.grid}>
            {visible.map((party) => (
              <article
                className={s.card}
                id={`party-${party.id}`}
                key={party.id}
              >
                <div className={s.identity}>
                  <span className={s.ballot}>
                    <span className={s.srOnly}>אותיות: </span>
                    {party.letter}
                  </span>
                  <h3>{party.name}</h3>
                </div>
                <span
                  className={`${s.status} ${party.type === 'unknown' ? s.unknown : ''}`}
                >
                  {party.status}
                </span>
                <p className={s.summary}>{party.text}</p>
                <div className={s.source}>
                  {party.sources.length ? (
                    <a
                      href={party.sources[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      מקור: דיווח ynet ↗
                    </a>
                  ) : (
                    'מקור: לא נמצא במקורות שנסקרו'
                  )}
                </div>
                <dl className={s.metrics}>
                  {[
                    ['תקציב', party.budget],
                    ['לוח זמנים', party.time],
                    ['אחריות', party.owner],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className={s.cardBottom}>
                  <button
                    type="button"
                    className={s.textButton}
                    onClick={() => changeModal({ kind: 'party', party })}
                    aria-label={`פירוט ומקורות: ${party.name}`}
                  >
                    פירוט ומקורות ←
                  </button>
                  <label>
                    <input
                      type="checkbox"
                      checked={selected.includes(party.id)}
                      onChange={() => toggle(party.id)}
                      aria-label={`השוואת ${party.name}`}
                    />{' '}
                    להשוואה
                  </label>
                </div>
              </article>
            ))}
            {!visible.length && (
              <div className={s.empty}>
                <h3>לא נמצאו רשימות שמתאימות לחיפוש</h3>
                <button
                  type="button"
                  className={s.secondary}
                  onClick={() => {
                    setQuery('');
                    setFilter('all');
                  }}
                >
                  ניקוי החיפוש והסינון
                </button>
              </div>
            )}
          </div>
          <p className={s.listNote}>
            פעילות של חברי כנסת אינה מוצגת כעמדת המפלגה.
          </p>
        </section>
        <section className={s.principles} aria-labelledby="principles-title">
          <div>
            <p className={s.eyebrow}>הצעה לשיח ציבורי</p>
            <h2 id="principles-title">
              מה צריכה לכלול
              <br />
              תוכנית רצינית?
            </h2>
            <p>אחריות ציבורית משותפת, עם תמיכה במשפחות ובמערכת החינוך.</p>
            <button
              type="button"
              className={s.textButton}
              onClick={() => changeModal({ kind: 'principles' })}
            >
              לעקרונות המוצעים ←
            </button>
          </div>
          <div className={s.principleGrid}>
            {principles.map(([title, text], index) => (
              <div key={title}>
                <span className={s.number}>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={s.shareBand}>
          <div>
            <h2>התוכנית לילדים צריכה להיות על השולחן.</h2>
            <p>
              שתפו את העמוד ושאלו את המפלגה שלכם: מה התוכנית, מי אחראי, ומתי
              מתחילים?
            </p>
          </div>
          <button type="button" className={s.button} onClick={() => copy()}>
            העתקת טקסט לשיתוף ↗
          </button>
        </section>
        <section className={s.method} aria-labelledby="method-title">
          <h2 id="method-title">על המידע בעמוד</h2>
          <p className={s.disclaimer}>{data.disclaimer}</p>
          <details>
            <summary>מה נבדק, ומה עדיין לא?</summary>
            <p>
              {data.scope} הסקירה מבוססת על מקורות פומביים שנבדקו ב־{date},
              ואינה סקירה ממצה של כל פעילות המפלגות. ״לא נמצאה עמדה״ מתייחס
              למקורות שנבדקו בלבד.
            </p>
            <p>
              תקציב, לוח זמנים ואחריות נשארים ״לא ידוע״ כשהמקור אינו מפרט אותם.
              אין כאן דירוג או המלצת הצבעה.
            </p>
          </details>
          <details>
            <summary>מה המקור לעמדות המפלגות?</summary>
            <p>
              <a
                href="https://www.ynet.co.il/digital/technews/article/sjy6cb9izg"
                target="_blank"
                rel="noopener noreferrer"
              >
                כתבת ynet מ־12.10.2026
              </a>{' '}
              המדווחת על שאלון של פייק ריפורטר ומכון ברנדייס. קישורי ועדת
              הבחירות משמשים לזיהוי הרשימות, ולא כמקור לעמדה.
            </p>
          </details>
          <button
            type="button"
            className={s.textButton}
            onClick={() =>
              download(
                new Blob([JSON.stringify(data, null, 2)], {
                  type: 'application/json;charset=utf-8',
                }),
                `party-positions-${data.checked_at}.json`,
              )
            }
          >
            הורדת הנתונים והמקורות ↓
          </button>
        </section>
      </div>
      {/* Reserve room so the fixed compare bar never covers the footer. */}
      {selected.length > 0 && <div className={s.compareSpacer} />}
      {selected.length > 0 && (
        <section className={s.compareBar} aria-label="מפלגות שנבחרו להשוואה">
          <span>{selected.length} מתוך 4 נבחרו</span>
          <button
            type="button"
            disabled={selected.length < 2}
            onClick={() => changeModal({ kind: 'compare' })}
          >
            {selected.length < 2 ? 'בחרו עוד מפלגה להשוואה' : 'השוואת המפלגות'}
          </button>
          <button
            type="button"
            className={s.clear}
            onClick={() => setSelected([])}
          >
            ניקוי
          </button>
        </section>
      )}
      {/* One live region at a time: the page toast is inert under an open
          dialog, so the dialog announces its own notices instead. */}
      <output className={notice && !modal ? s.toast : s.srOnly}>
        {modal ? '' : notice}
      </output>
      {modal && (
        <dialog
          ref={dialog}
          className={s.dialog}
          aria-labelledby="party-dialog-title"
          onCancel={() => changeModal(null)}
        >
          <button
            type="button"
            className={s.close}
            onClick={() => changeModal(null)}
            aria-label="סגירת החלון"
          >
            ×
          </button>
          <output className={notice ? s.dialogNote : s.srOnly}>{notice}</output>
          <h2 id="party-dialog-title">
            {modal.kind === 'party'
              ? modal.party.name
              : modal.kind === 'compare'
                ? 'משווים על אותם דברים'
                : 'העקרונות שאנחנו מציעים'}
          </h2>
          {modal.kind === 'party' && (
            <>
              <p className={s.dialogNote}>
                {modal.party.status} · נבדק ב־{date}
              </p>
              <p>{modal.party.full}</p>
              <dl className={s.detailList}>
                {dimensions.map((label, index) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{modal.party.detail[index]}</dd>
                  </div>
                ))}
              </dl>
              <h3>מקורות</h3>
              {modal.party.sources.map((source) => (
                <p key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title} ↗
                  </a>
                </p>
              ))}
              {!modal.party.sources.length && (
                <p>לא נמצא מקור לעמדה ייעודית בסוגיה במקורות שנסקרו.</p>
              )}
              <p>
                <a
                  href={modal.party.registry}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  פרטי הרשימה בוועדת הבחירות (זיהוי בלבד) ↗
                </a>
              </p>
              <div className={s.actions}>
                <button
                  type="button"
                  className={s.button}
                  onClick={() => copy(modal.party)}
                >
                  העתקת טקסט וקישור
                </button>
                <button
                  type="button"
                  className={s.secondary}
                  onClick={() => downloadCard(modal.party)}
                >
                  הורדת כרטיס לשיתוף ↓
                </button>
              </div>
            </>
          )}
          {modal.kind === 'compare' && (
            <>
              <p>נבדק ב־{date}.</p>
              {/* Phones get one block per party; four table columns don't
                  fit in 310px and sideways scrolling hid three of them. */}
              <div className={s.compareStack}>
                {compared.map((party) => (
                  <section key={party.id} aria-labelledby={`cmp-${party.id}`}>
                    <h3 id={`cmp-${party.id}`}>{party.name}</h3>
                    <dl className={s.detailList}>
                      {['סטטוס', ...dimensions].map((label, index) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>
                            {index === 0
                              ? party.status
                              : party.detail[index - 1]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
              <section
                className={s.tableScroll}
                // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be keyboard-focusable (WCAG 2.1.1).
                tabIndex={0}
                aria-label="טבלת השוואה, ניתנת לגלילה"
              >
                <table>
                  <caption className={s.srOnly}>
                    השוואת עמדות, תקציב, לוח זמנים ואחריות לביצוע
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">מה בודקים?</th>
                      {compared.map((party) => (
                        <th scope="col" key={party.id}>
                          {party.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {['סטטוס', ...dimensions].map((label, index) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        {compared.map((party) => (
                          <td key={party.id}>
                            {index === 0
                              ? party.status
                              : party.detail[index - 1]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </>
          )}
          {modal.kind === 'principles' && (
            <>
              <p className={s.dialogNote}>
                הצעה לשיח ציבורי · אינה מצע שאומץ בידי מפלגה
              </p>
              <p>
                אנחנו מבקשים מכל מפלגה להציג תוכנית רצינית ומתוקצבת להגנת ילדים
                בעולם הדיגיטלי, עם צעדים שאפשר ליישם ולבחון.
              </p>
              {principles.map(([title, text]) => (
                <section className={s.principleDetail} key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </section>
              ))}
              <p>
                הדרישה היא למדיניות ציבורית שתומכת במשפחות. בחירות של הורים אינן
                מבחן, והאחריות אינה שלהם בלבד.
              </p>
            </>
          )}
        </dialog>
      )}
    </div>
  );
}
