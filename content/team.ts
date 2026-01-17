export interface TeamMember {
  name: string;
  role: 'founder' | 'advisor' | 'coordinator';
  region?: string;
  bio: string;
  photo?: string;
}

export const team: TeamMember[] = [
  // Founders
  {
    name: 'סיגל רובין שהם',
    role: 'founder',
    bio: 'מייסדת שותפה. עורכת בכירה בחדשות 12, עורכת דין בהכשרתה, אמא לשלושה.',
    photo: '/images/team/sigal.jpg',
  },
  {
    name: 'נעמה גלעדי',
    role: 'founder',
    bio: 'מייסדת שותפה. סמנכ"לית קשרי חוץ בפרוקטר אנד גמבל, בעלת תואר במנהל עסקים, אמא לשלושה.',
    photo: '/images/team/naama.jpg',
  },

  // Academic Advisor
  {
    name: 'פרופ׳ יאיר עמיחי-המבורגר',
    role: 'advisor',
    bio: 'ראש מרכז המחקר לפסיכולוגיה של האינטרנט. בעל דוקטורט מאוקספורד, פרסם 5 ספרים על השפעת האינטרנט על רווחת האדם.',
    photo: '/images/team/yair.jpg',
  },

  // Regional Coordinators
  {
    name: 'יעל גודמן קורדה',
    role: 'coordinator',
    region: 'ירושלים',
    bio: 'רכזת אזורית',
  },
  {
    name: 'דנה זיידס טאובין',
    role: 'coordinator',
    region: 'מטה יהודה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'דנה רוזן',
    role: 'coordinator',
    region: 'רעננה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'יפעת גולדמן',
    role: 'coordinator',
    region: 'להבים',
    bio: 'רכזת אזורית',
  },
  {
    name: 'שושי רשף מור',
    role: 'coordinator',
    region: 'גבעתיים',
    bio: 'רכזת אזורית',
  },
  {
    name: 'מיטל לוי ראובן',
    role: 'coordinator',
    region: 'פתח תקווה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'כרמית וקנין',
    role: 'coordinator',
    region: 'פתח תקווה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'טל סלע אורן',
    role: 'coordinator',
    region: 'פרדס חנה-כרכור',
    bio: 'רכזת אזורית',
  },
  {
    name: 'תמר גלזר',
    role: 'coordinator',
    region: 'רחובות',
    bio: 'רכזת אזורית',
  },
  {
    name: 'שלומי אורנשטיין',
    role: 'coordinator',
    region: 'רמת גן',
    bio: 'רכז אזורי',
  },
  {
    name: 'חגית סימן טוב',
    role: 'coordinator',
    region: 'כפר סבא',
    bio: 'רכזת אזורית',
  },
  {
    name: 'דלית פלס',
    role: 'coordinator',
    region: 'תל אביב',
    bio: 'רכזת אזורית',
  },
  {
    name: 'מילי גפני',
    role: 'coordinator',
    region: 'חדרה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'דור שביט',
    role: 'coordinator',
    region: 'הרצליה',
    bio: 'רכז אזורי',
  },
  {
    name: 'סתיו קפון רפופורט',
    role: 'coordinator',
    region: 'הרצליה',
    bio: 'רכזת אזורית',
  },
  {
    name: 'עפרי גונן',
    role: 'coordinator',
    region: 'נתניה',
    bio: 'רכזת אזורית ומעצבת האתר',
  },
];

export const founders: TeamMember[] = [];
export const advisors: TeamMember[] = [];
export const coordinators: TeamMember[] = [];

team.forEach((member) => {
  switch (member.role) {
    case 'founder':
      founders.push(member);
      break;
    case 'advisor':
      advisors.push(member);
      break;
    case 'coordinator':
      coordinators.push(member);
      break;
  }
});
