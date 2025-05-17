
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/association-info', label: 'About Us' },
  { href: '/association-info#board-members', label: 'Board Members' },
  { href: '/events', label: 'Tournaments' },
  { href: '/clubs#coaches', label: 'Coaching' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/association-info#contact', label: 'Contact Us' },
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
    title: 'Odisha State Open Pickleball Championship',
    date: 'October 26-28, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Kalinga Stadium, Bhubaneswar',
    description: 'Join us for the biggest pickleball tournament in Odisha! Categories for all skill levels.',
    registrationLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'pickleball tournament'
  },
  {
    id: '2',
    title: 'Beginner Pickleball Workshop',
    date: 'November 12, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Bhubaneswar Sports Complex',
    description: 'Learn the basics of pickleball from certified coaches. Paddles and balls provided.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'pickleball workshop'
  },
  {
    id: '3',
    title: 'Advanced Dinking Clinic',
    date: 'December 3, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Cuttack Indoor Stadium',
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
    name: 'Bhubaneswar Pickleball Club',
    location: 'Bhubaneswar, Odisha',
    contactPerson: 'Mr. Ashok Das',
    phone: '+91 98765 43210',
    email: 'bhubaneswarclub@pickleballodisha.org',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'sports club'
  },
  {
    id: '2',
    name: 'Cuttack Smashers',
    location: 'Cuttack, Odisha',
    contactPerson: 'Ms. Priya Mohanty',
    phone: '+91 91234 56789',
    email: 'cuttacksmashers@pickleballodisha.org',
    website: '#',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'team sport'
  },
  {
    id: '3',
    name: 'Puri Paddlers',
    location: 'Puri, Odisha',
    contactPerson: 'Mr. Surya Behera',
    email: 'puripaddlers@pickleballodisha.org',
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
    email: 'rohan.patnaik@pickleballodisha.org',
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
    image: 'https://placehold.co/300x300.png',
    imageHint: 'sports coach'
  }
];
