
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/association-info', label: 'About Us' },
  { href: '/board-members', label: 'Board Members' },
  { href: '/events', label: 'Tournaments' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact-us', label: 'Contact Us' },
];

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  registrationLink?: string;
  image: string;
  imageHint: string;
}

export const placeholderEvents: Event[] = [
  {
    id: '1',
    title: 'COMING SOON!',
    date: '',
    time: '',
    location: 'Details to be announced',
    description: 'Stay tuned for more information on our exciting upcoming tournaments and events!',
    registrationLink: '#',
    image: '/comingsoon.webp',
    imageHint: 'event coming soon'
  },
  {
    id: '2',
    title: 'COMING SOON!',
    date: '',
    time: '',
    location: 'Details to be announced',
    description: 'Keep an eye on this space for workshops and community pickleball activities.',
    registrationLink: '#',
    image: '/comingsoon.webp',
    imageHint: 'workshop coming soon'
  },
  {
    id: '3',
    title: 'COMING SOON!',
    date: '',
    time: '',
    location: 'Details to be announced',
    description: 'More pickleball events are on the way. Check back for updates!',
    registrationLink: '#',
    image: '/comingsoon.webp',
    imageHint: 'event announcement'
  },
];

export interface Club {
  id: string;
  name: string;
  location: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  website?: string;
  image: string;
  imageHint: string;
}

export const placeholderClubs: Club[] = [
  {
    id: '1',
    name: 'Bhubaneswar Pickleball Club',
    location: 'Bhubaneswar, Odisha',
    contactPerson: 'Mr. Ashok Das',
    phone: '+91 99370 23493',
    email: 'associationodishapickleball@gmail.com',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'sports club'
  },
  {
    id: '2',
    name: 'Cuttack Smashers',
    location: 'Cuttack, Odisha',
    contactPerson: 'Ms. Priya Mohanty',
    phone: '+91 91234 56789',
    email: 'associationodishapickleball@gmail.com',
    website: '#',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'team sport'
  },
  {
    id: '3',
    name: 'Puri Paddlers',
    location: 'Puri, Odisha',
    contactPerson: 'Mr. Surya Behera',
    email: 'associationodishapickleball@gmail.com',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'community group'
  },
];

export interface Coach {
  id: string;
  name: string;
  location: string;
  specialization: string;
  experience: string;
  phone?: string;
  email?: string;
  image: string;
  imageHint: string;
}

export const placeholderCoaches: Coach[] = [
 {
    id: 'c1',
    name: 'Coach Rohan Patnaik',
    location: 'Bhubaneswar',
    specialization: 'Beginner & Intermediate Training',
    experience: '5+ years',
    email: 'associationodishapickleball@gmail.com',
    image: 'https://placehold.co/300x300.png',
    imageHint: 'coach portrait'
  },
  {
    id: 'c2',
    name: 'Coach Anita Sahoo',
    location: 'Cuttack',
    specialization: 'Advanced Strategy & Doubles Play',
    experience: '8+ years, Level 2 Certified',
    phone: '+91 99887 76655',
    email: 'associationodishapickleball@gmail.com',
    image: 'https://placehold.co/300x300.png',
    imageHint: 'sports coach'
  }
];

export interface NewsArticle { // This is used in the old page structure, keeping it for now
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  href: string;
}

export const placeholderNews: NewsArticle[] = [
  {
    id: '1',
    title: 'OPA State Championship Announced!',
    description: 'Get ready for the most exciting pickleball event of the year. Dates and venue details inside.',
    image: 'https://placehold.co/500x300.png',
    imageHint: 'trophy award',
    href: '/events',
  },
  {
    id: '2',
    title: 'New Coaching Clinics for All Levels',
    description: 'Our certified coaches are starting new batches for beginners, intermediate, and advanced players.',
    image: 'https://placehold.co/500x300.png',
    imageHint: 'coaching session',
    href: '/coaching',
  },
  {
    id: '3',
    title: 'Community Day: Play & Connect',
    description: 'Join us for a fun-filled day of pickleball, food, and making new friends in the community.',
    image: 'https://placehold.co/500x300.png',
    imageHint: 'community event',
    href: '/events',
  },
];

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageHint: string;
  bio?: string;
}

export const placeholderBoardMembers: BoardMember[] = [
  {
    id: 'bm1',
    name: 'Ms. Shribani Mohanty',
    role: 'President',
    image: '/shribani.jpg',
    imageHint: 'portrait female',
    bio: 'Leading the Odisha Pickleball Association with a vision for growth and community engagement.'
  },
  {
    id: 'bm2',
    name: 'Mr. Ajay Kumar Nishank',
    role: 'Secretary',
    image: '/ajaysir.jpg',
    imageHint: 'portrait male',
    bio: 'Dedicated to expanding pickleball accessibility and fostering talent across Odisha.'
  },
];
