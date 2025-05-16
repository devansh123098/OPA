
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import LogoIcon from '@/components/icons/logo-icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/clubs', label: 'Clubs' },
    { href: '/about-pickleball', label: 'About Pickleball' },
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-border/40 bg-background text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About APPA */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <LogoIcon className="h-10 w-10 text-primary" />
              <span className="font-semibold text-lg text-foreground">
                Arunachal Pradesh Pickleball Association
              </span>
            </Link>
            <p className="text-sm">
              Promoting and developing the sport of pickleball across Arunachal Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@pickleballarunachal.org" className="hover:text-primary transition-colors">
                  contact@pickleballarunachal.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 12345 67890 (Placeholder)</span>
              </li>
              <li className="flex items-start gap-2">
                <p>
                  Naharlagun, Arunachal Pradesh, India
                </p>
              </li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Arunachal Pradesh Pickleball Association. All rights reserved.
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
