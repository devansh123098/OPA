
import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'; // Added MapPin
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/association-info', label: 'About Us' },
    { href: '/board-members', label: 'Board Members' },
    { href: '/events', label: 'Tournaments' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/ranking', label: 'Ranking' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  const socialLinks = [
    { href: 'https://www.instagram.com/odishapickleballofficial/', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 p-6 rounded-lg">
          {/* About OPA */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image 
                src="/opalogo.png" 
                alt="OPA Logo in Footer" 
                width={40}
                height={40} 
                className="h-10 w-10 object-contain" 
              />
              <span className="font-semibold text-lg text-white">
                Odisha Pickleball Association
              </span>
            </Link>
            <p className="text-sm text-gray-300">
              Promoting and developing the sport of pickleball across Odisha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:associationodishapickleball@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  associationodishapickleball@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 99370 23493</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" /> 
                <span>
                  Kalinga Stadium, Bhubaneswar, Odisha
                </span>
              </li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Odisha Pickleball Association. All rights reserved.
          </p>
          <p className="mt-1">
            Designed with <span className="text-primary">&hearts;</span> for the love of Pickleball.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
