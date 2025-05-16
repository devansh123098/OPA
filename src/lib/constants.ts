export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/association-info', label: 'Association Info' },
  { href: '/events', label: 'Events' },
  { href: '/clubs', label: 'Clubs Directory' },
  { href: '/ai-workout', label: 'AI Workout' },
  { href: '/about-pickleball', label: 'About Pickleball' },
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
    title: 'Arunachal State Open Pickleball Championship',
    date: 'October 26-28, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Rajiv Gandhi Stadium, Naharlagun',
    description: 'Join us for the biggest pickleball tournament in Arunachal Pradesh! Categories for all skill levels.',
    registrationLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'pickleball tournament'
  },
  {
    id: '2',
    title: 'Beginner Pickleball Workshop',
    date: 'November 12, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Itanagar Sports Complex',
    description: 'Learn the basics of pickleball from certified coaches. Paddles and balls provided.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'pickleball workshop'
  },
  {
    id: '3',
    title: 'Advanced Dinking Clinic',
    date: 'December 3, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Pasighat Indoor Stadium',
    description: 'Sharpen your dinking skills and strategy with advanced drills and coaching.',
    registrationLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'pickleball training'
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
    name: 'Itanagar Pickleball Club',
    location: 'Itanagar, Arunachal Pradesh',
    contactPerson: 'Mr. Tamo Tagar',
    phone: '+91 98765 43210',
    email: 'itanagarclub@pickleballarunachal.org',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'sports club'
  },
  {
    id: '2',
    name: 'Naharlagun Smashers',
    location: 'Naharlagun, Arunachal Pradesh',
    contactPerson: 'Ms. Pema Dorjee',
    phone: '+91 91234 56789',
    email: 'naharlagunsmashers@pickleballarunachal.org',
    website: '#',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'team sport'
  },
  {
    id: '3',
    name: 'Pasighat Paddlers',
    location: 'Pasighat, Arunachal Pradesh',
    contactPerson: 'Mr. Karma Leta',
    email: 'pasighatpaddlers@pickleballarunachal.org',
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
    name: 'Coach Ankit Sharma',
    location: 'Itanagar',
    specialization: 'Beginner & Intermediate Training',
    experience: '5+ years',
    email: 'ankit.sharma@email.com',
    image: 'https://placehold.co/300x300.png',
    imageHint: 'coach portrait'
  },
  {
    id: 'c2',
    name: 'Coach Priya Singh',
    location: 'Naharlagun',
    specialization: 'Advanced Strategy & Doubles Play',
    experience: '8+ years, Level 2 Certified',
    phone: '+91 99887 76655',
    image: 'https://placehold.co/300x300.png',
    imageHint: 'sports coach'
  }
];
