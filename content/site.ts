export const siteConfig = {
  name: "תנו לגדול על שקט",
  description: "הטלפון הראשון הוא טלפון בטוח",
  facebookGroup: "https://facebook.com/groups/311936499275780/",
  navigation: [
    { label: "ערכת התנעה", href: "/#startup-kit" },
    { label: "מדיה", href: "/media" },
    { label: "מאמרים", href: "/articles" },
    {
      label: "סיפורים מהשטח",
      href: "/stories",
      children: [
        { label: "כל הסיפורים", href: "/stories" },
        { label: "שתפו את הסיפור שלכם", href: "/share-your-story" },
      ],
    },
    { label: "אני והטלפון שלי", href: "/me-and-my-phone" },
    { label: "הצוות", href: "/the-team" },
  ],
  footer: {
    credit: "עיצוב: סטודיו עפרי גונן",
    links: [
      { label: "מדיה", href: "/media" },
      { label: "מאמרים", href: "/articles" },
      { label: "הצוות", href: "/the-team" },
      { label: "אני והטלפון שלי", href: "/me-and-my-phone" },
      { label: "חקיקה", href: "/legal" },
    ],
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
