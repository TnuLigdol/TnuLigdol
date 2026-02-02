'use client';

import { useCallback, useEffect, useState } from 'react';

type CookieConsentConfig = NonNullable<typeof window.cookieConsentConfig>;

const COOKIE_CONSENT_CONFIG: CookieConsentConfig = {
  mainText:
    'באתר זה נעשה שימוש בטכנולוגיות איסוף מידע כגון Cookies, לרבות על ידי צדדים שלישיים, כדי לספק לך חווית גלישה טובה יותר וכן למטרות סטטיסטיקה, איפיון ושיווק. המשך הגלישה באתר מהווה הסכמתך לכך. למידע נוסף בנושא, ראו את',
  linkText: 'מדיניות הפרטיות',
  linkUrl: '/privacy-policy',
  buttonText: 'אישור',
  rtl: true,
};

const REQUIRED_FIELDS = [
  'mainText',
  'linkText',
  'linkUrl',
  'buttonText',
] as const;
const CONSENT_KEY = 'cookie-consent-accepted';

export function CookieBanner() {
  const [config, setConfig] = useState<CookieConsentConfig | null>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const userConfig =
      typeof window !== 'undefined'
        ? (window.cookieConsentConfig ?? COOKIE_CONSENT_CONFIG)
        : COOKIE_CONSENT_CONFIG;

    const missingFields = REQUIRED_FIELDS.filter(
      (field) => !userConfig[field] || String(userConfig[field]).trim() === '',
    );
    if (missingFields.length) {
      console.error(
        'cookie-consent: Missing required configuration fields:',
        missingFields.join(', '),
      );
      return;
    }

    if (typeof localStorage === 'undefined' || localStorage.getItem(userConfig.consentKey ?? CONSENT_KEY)) {
      return;
    }

    setConfig(userConfig);
  }, []);

  const acceptConsent = useCallback(() => {
    if (!config) return;
    setClosing(true);
    localStorage.setItem(config.consentKey ?? CONSENT_KEY, new Date().toISOString());
  }, [config]);

  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(() => setConfig(null), 300);
    return () => clearTimeout(t);
  }, [closing]);

  useEffect(() => {
    if (!config || closing) return;
    const handleDocumentClick = () => acceptConsent();
    document.addEventListener('click', handleDocumentClick, true);
    return () =>
      document.removeEventListener('click', handleDocumentClick, true);
  }, [config, closing, acceptConsent]);

  if (!config) return null;

  const isRTL = config.rtl === true;

  return (
    <>
      <div
        role="presentation"
        className={`fixed inset-0 z-[9999] bg-black/50 transition-opacity duration-300 ease-out ${closing ? 'opacity-0' : 'opacity-100'}`}
        onClick={acceptConsent}
        onKeyDown={(e) => e.key === 'Escape' && acceptConsent()}
      />
      <div
        id="cookie-consent-banner"
        role="dialog"
        aria-label="Cookie consent"
        className={`fixed bottom-0 left-0 right-0 z-[10000] bg-background border-t-2 border-border p-5 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${closing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        style={{
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left',
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5">
          <div className="min-w-[300px] flex-1">
            <p className="m-0 text-sm leading-relaxed text-foreground">
              <strong>
                {config.mainText}{' '}
                <a
                  href={config.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={config.linkText}
                  className="text-primary underline hover:text-primary-hover"
                >
                  {config.linkText}
                </a>
              </strong>
            </p>
          </div>
          <button
            type="button"
            id="cookie-consent-button"
            onClick={(e) => {
              e.stopPropagation();
              acceptConsent();
            }}
            className="whitespace-nowrap rounded border-0 bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
