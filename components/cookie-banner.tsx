'use client';

import { useEffect } from 'react';

type CookieConsentConfig = NonNullable<typeof window.cookieConsentConfig>;

const COOKIE_CONSENT_CONFIG: CookieConsentConfig = {
  mainText:
    'באתר זה נעשה שימוש בטכנולוגיות איסוף מידע כגון Cookies, לרבות על ידי צדדים שלישיים, כדי לספק לך חווית גלישה טובה יותר וכן למטרות סטטיסטיקה, איפיון ושיווק. המשך הגלישה באתר מהווה הסכמתך לכך. למידע נוסף בנושא, ראו את',
  linkText: 'מדיניות הפרטיות',
  linkUrl: '/privacy-policy',
  buttonText: 'אישור',
  rtl: true,
};

const REQUIRED_FIELDS = ['mainText', 'linkText', 'linkUrl', 'buttonText'] as const;
const CONSENT_KEY = 'cookie-consent-accepted';

export function CookieBanner() {
  useEffect(() => {
    const userConfig = typeof window !== 'undefined' ? window.cookieConsentConfig ?? COOKIE_CONSENT_CONFIG : COOKIE_CONSENT_CONFIG;

    const missingFields = REQUIRED_FIELDS.filter(
      (field) => !userConfig[field] || String(userConfig[field]).trim() === ''
    );
    if (missingFields.length) {
      console.error('cookie-consent: Missing required configuration fields:', missingFields.join(', '));
      return;
    }

    if (typeof localStorage === 'undefined' || localStorage.getItem(userConfig.consentKey ?? CONSENT_KEY)) {
      return;
    }

    const isRTL = userConfig.rtl === true;
    const direction = isRTL ? 'rtl' : 'ltr';
    const textAlign = isRTL ? 'right' : 'left';
    const consentKey = userConfig.consentKey ?? CONSENT_KEY;

    const overlayHTML = `
      <div id="cookie-consent-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
      "></div>
    `;

    const bannerHTML = `
      <div id="cookie-consent-banner" style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #ffffff;
        border-top: 2px solid #e0e0e0;
        padding: 20px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        direction: ${direction};
        text-align: ${textAlign};
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        font-size: 14px;
        line-height: 1.6;
        color: #333;
      ">
        <div style="
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        ">
          <div style="flex: 1; min-width: 300px;">
            <p style="margin: 0;"><b>
              ${userConfig.mainText}
              <a href="${userConfig.linkUrl}" target="_blank" rel="noopener noreferrer" aria-label="${userConfig.linkText}" style="color: #007bff; text-decoration: underline;">${userConfig.linkText}</a>
            </b></p>
          </div>
          <button id="cookie-consent-button" style="
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            white-space: nowrap;
            transition: background-color 0.3s ease;
          ">
            ${userConfig.buttonText}
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', overlayHTML);
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    const overlay = document.getElementById('cookie-consent-overlay');
    const banner = document.getElementById('cookie-consent-banner');
    const button = document.getElementById('cookie-consent-button');
    let consentAccepted = false;

    function acceptConsent() {
      if (consentAccepted) return;
      consentAccepted = true;

      localStorage.setItem(consentKey, new Date().toISOString());

      if (overlay) {
        overlay.style.transition = 'opacity 0.3s ease';
        overlay.style.opacity = '0';
      }
      if (banner) {
        banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(100%)';
      }

      setTimeout(() => {
        overlay?.remove();
        banner?.remove();
        document.removeEventListener('click', handleDocumentClick, true);
      }, 300);
    }

    function handleDocumentClick() {
      acceptConsent();
    }

    button?.addEventListener('mouseover', () => {
      if (button) button.style.backgroundColor = '#0056b3';
    });
    button?.addEventListener('mouseout', () => {
      if (button) button.style.backgroundColor = '#007bff';
    });

    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      overlay?.remove();
      banner?.remove();
    };
  }, []);

  return null;
}
