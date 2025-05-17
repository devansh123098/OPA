
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <PageWrapper>
      <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
          <AnimatedSection animationClass="animate-fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Get in touch with the Odisha Pickleball Association. We'd love to hear from you!
            </p>
          </AnimatedSection>
        </div>
        <div className="hidden md:block md:col-span-4 lg:col-span-3 mt-8 md:mt-0">
          <AnimatedSection animationClass="animate-slideInFromRight" delay={200}>
            <Image
              src="/pickleball ball .webp"
              alt="Pickleball icon"
              width={150}
              height={150}
              className="animate-float object-contain mx-auto"
              priority
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection delay={100} animationClass="animate-slideInFromLeft">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Association Office</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">
                  Odisha Pickleball Association<br />
                  C/O State Olympic Association Office<br />
                  Near Kalinga Stadium, Nayapalli<br />
                  Bhubaneswar, Odisha - 751012
                </p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@pickleballodisha.org" className="text-accent hover:underline">
                  contact@pickleballodisha.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">+91 12345 67890 (Placeholder)</p>
              </div>
              <div className="mt-6 h-64 bg-secondary/30 rounded-md flex items-center justify-center">
                 <p className="text-muted-foreground">Embedded Google Map coming soon (Kalinga Stadium, Bhubaneswar)</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={200} animationClass="animate-slideInFromRight">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Contact form with reCAPTCHA will be available here soon.
              </p>
              {/* Placeholder for form */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full p-2 border border-input rounded-md shadow-sm bg-background text-foreground" placeholder="Your Name" disabled />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full p-2 border border-input rounded-md shadow-sm bg-background text-foreground" placeholder="you@example.com" disabled />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-input rounded-md shadow-sm bg-background text-foreground" placeholder="Your message..." disabled></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50" disabled>
                  Send Message (Coming Soon)
                </button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </PageWrapper>
  );
}
