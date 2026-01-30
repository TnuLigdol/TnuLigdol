export {};

declare global {
  interface Window {
    accessibility_rtl?: boolean;
    pixel_from_side?: number;
    pixel_from_start?: number;
    cookieConsentConfig?: {
      mainText: string;
      linkText: string;
      linkUrl: string;
      buttonText: string;
      consentKey?: string;
      rtl?: boolean;
    };
  }
}
