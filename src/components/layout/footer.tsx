
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, Youtube } from 'lucide-react';
import Image from 'next/image'; // Changed from LogoIcon to Image for the logo

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/association-info', label: 'About Us' },
    { href: '/events', label: 'Tournaments' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/ranking', label: 'Ranking' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400"> {/* Changed background and text color, adjusted border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 p-6 rounded-lg"> {/* Removed bg-black as it's on parent */}
          {/* About OPA */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image 
                src="/logo.png" 
                alt="OPA Logo in Footer" 
                width={40} // Example size, adjust as needed
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
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@pickleballodisha.org" className="text-gray-300 hover:text-primary transition-colors">
                  contact@pickleballodisha.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 99370 23493</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                {/* Intentionally simple text to avoid complex layout issues */}
                <p>
                  Kalinga Stadium, Bhubaneswar, Odisha
                </p>
              </li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm"> {/* Adjusted border color */}
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
