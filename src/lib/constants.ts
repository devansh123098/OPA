
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

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  href: string;
}

export const placeholderNews: NewsArticle[] = [ // This is used in the old page structure, keeping it for now.
  {
    id: 'news1',
    title: 'The Indian Pickleball Association (IPA) - now officially recognised by the Ministry of Youth Affairs and Sports, Government of India',
    description: 'With systematic and painstaking groundwork laid by the members in IPA and a fast-growing community behind it, IPA is ready to drive the next chapter: building a nationwide ecosystem of access, excellence, and opportunity.',
    image: '/news1.webp',
    imageHint: 'IPA recognition sports ministry',
    href: 'https://www.timesnownews.com/sports/pickleball/ipa-to-lead-national-expansion-and-global-strategy-article-151547725',
  },
  {
    id: 'news2',
    title: 'IPA Hosts Special Meeting In New Delhi To Mark Official Recognition As National Sports Federation',
    description: 'The objective of the meeting was to outline IPA’s strategic roadmap for the development and promotion of pickleball across India.',
    image: 'https://images.timesnownews.com/thumb/msid-151596199,width-1280,height-720,resizemode-75/151596199.jpg',
    imageHint: 'pickleball meeting',
    href: 'https://www.timesnownews.com/sports/pickleball/ipa-hosts-special-meeting-in-new-delhi-to-mark-official-recognition-as-national-sports-federation-article-151596188',
  },
  {
    id: 'news3',
    title: 'Indian Pickleball Association Receives Official Recognition From The Sports Ministry As The National Federation For Pickleball In India',
    description: 'Following the recognition, the IPA - announced that India will host the Pickleball Asia Cup 2025 later this year.',
    image: '/newsthree.jpg',
    imageHint: 'news article image',
    href: 'https://www.timesnownews.com/sports/pickleball/indian-pickleball-association-gets-official-recognition-from-sports-ministry-approval-as-the-national-federation-for-pickleball-in-india-article-151539176',
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
