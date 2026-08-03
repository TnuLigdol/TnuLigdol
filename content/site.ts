export const siteConfig = {
  name: 'תנו לגדול על שקט',
  description: 'הטלפון הראשון הוא טלפון בטוח',
  socials: {
    facebook: 'https://www.facebook.com/groups/311936499275780/',
  },
  /**
   * The desktop menu of the WordPress original, verbatim. (The old site also
   * had a second, divergent menu for phones/tablets; it was dropped in favour
   * of showing this one at every width.)
   */
  navigation: [
    { label: 'להורדת קובץ התנעה', href: '/#kickstart' },
    { label: 'בתקשורת', href: '/media' },
    { label: 'מאמרים', href: '/articles' },
    {
      label: 'סיפורים מהשטח',
      href: '/stories',
      children: [
        { label: 'סיפורים מהשטח', href: '/stories' },
        { label: 'שתפו את הסיפור שלכם', href: '/share-your-story' },
      ],
    },
    { label: 'כשכבר יש סמרטפון', href: '/me-and-my-phone' },
    { label: 'מי אנחנו', href: '/the-team' },
  ] as NavItem[],
  footer: {
    credit: {
      text: 'סטודיו עפרי גונן',
      url: 'https://ofrigonen.co.il',
    },
    facebook: {
      text: 'תנו לגדול על שקט',
      url: 'https://www.facebook.com/groups/311936499275780',
    },
  },
  /**
   * The green "download the kit" card + form that closes out every page on
   * the original site except /me-and-my-phone (which has its own contact
   * form instead). Lived in the site-wide WordPress footer template.
   */
  footerCta: {
    title: 'זה יכול להצליח גם בקהילה שלכם.',
    image: '/images/hero/kid-playing.png',
  },
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  children?: { label: string; href: string }[];
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};
