
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Target, Mail, Phone, MapPin, Users } from 'lucide-react';

export default function AssociationInfoPage() {
  return (
    <PageWrapper>
      <section className="relative py-16 md:py-20 rounded-xl overflow-hidden bg-secondary/10 mb-12">
        <AnimatedSection animationClass="animate-fadeIn">
          <div className="absolute inset-0">
            <Image
              src="/bgintop.jpg"
              alt="Odisha pickleball community"
              fill
              style={{ objectFit: 'cover' }}
              className="" 
              priority
            />
          </div>
        </AnimatedSection>
        <div className="relative z-10 md:grid md:grid-cols-12 md:gap-8 md:items-center container mx-auto px-4">
          <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
            <AnimatedSection animationClass="animate-fadeInUp">
              <h1 className="text-4xl font-bold tracking-tight text-white"> 
                About Us
              </h1>
              <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0"> 
                Learn more about the Odisha Pickleball Association.
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
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <AnimatedSection delay={100} animationClass="animate-slideInFromLeft">
          <Image
            src="https://placehold.co/600x700.png"
            alt="Association members or event"
            data-ai-hint="community group meeting"
            width={600}
            height={700}
            className="rounded-lg shadow-xl object-cover aspect-[6/7]"
          />
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection delay={200} animationClass="animate-slideInFromRight">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To promote and develop the sport of pickleball across Odisha, fostering a vibrant community of players of all ages and skill levels. We aim to provide resources, organize events, and create opportunities for growth and enjoyment in the sport.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300} animationClass="animate-slideInFromRight">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300" id="board-members">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Board Members & Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our association is led by a dedicated team of passionate individuals committed to the growth of pickleball in Odisha. Information about our board members and key team personnel will be updated here soon.
                </p>
                {/* Placeholder for board member list or details */}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400} animationClass="animate-slideInFromRight">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Increase participation in pickleball throughout the state.</li>
                  <li>Organize regular tournaments, workshops, and training programs.</li>
                  <li>Develop and support local pickleball clubs and facilities.</li>
                  <li>Train coaches and officials to ensure high standards.</li>
                  <li>Promote sportsmanship, fitness, and community engagement.</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={500} animationClass="animate-fadeInUp">
        <section className="mt-16 py-12 bg-secondary/30 rounded-lg" id="contact">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-2 text-lg text-muted-foreground">We'd love to hear from you!</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-6 w-6 text-accent" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:contact@pickleballodisha.org" className="text-primary hover:underline">
                  contact@pickleballodisha.org
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Phone className="h-6 w-6 text-accent" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 12345 67890</p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="h-6 w-6 text-accent" /> Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Odisha Pickleball Association<br />
                  C/O State Olympic Association Office<br />
                  Near Kalinga Stadium, Nayapalli<br />
                  Bhubaneswar, Odisha - 751012 
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </PageWrapper>
  );
}
