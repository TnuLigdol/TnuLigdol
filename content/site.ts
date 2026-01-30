export const siteConfig = {
  name: 'תנו לגדול על שקט',
  description: 'הטלפון הראשון הוא טלפון בטוח',
  socials: {
    facebook: 'https://facebook.com/groups/311936499275780/',
  },
  navigation: [
    { label: 'ערכת התנעה', href: '/#startup-kit' },
    { label: 'מדיה', href: '/media' },
    { label: 'מאמרים', href: '/articles' },
    {
      label: 'סיפורים מהשטח',
      href: '/stories',
      children: [
        { label: 'כל הסיפורים', href: '/stories' },
        { label: 'שתפו את הסיפור שלכם', href: '/share-your-story' },
      ],
    },
    { label: 'אני והטלפון שלי', href: '/me-and-my-phone' },
    { label: 'הצוות', href: '/the-team' },
    {
      label: 'פייסבוק',
      href: 'https://facebook.com/groups/311936499275780/',
      external: true,
      highlight: true,
    },
  ],
  footer: {
    credit: {
      text: 'סטודיו עפרי גונן',
      url: 'https://www.ofrigonen.com/',
    },
    links: [
      { label: 'מדיה', href: '/media' },
      { label: 'מאמרים', href: '/articles' },
      { label: 'הצוות', href: '/the-team' },
      { label: 'אני והטלפון שלי', href: '/me-and-my-phone' },
      { label: 'חקיקה', href: '/legal' },
      {
        label: 'פייסבוק',
        href: 'https://facebook.com/groups/311936499275780/',
        external: true,
      },
    ],
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
