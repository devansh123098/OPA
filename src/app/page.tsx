
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Users, Sparkles } from 'lucide-react';
import PickleballIcon from '@/components/icons/pickleball-icon';
import PaddleIcon from '@/components/icons/paddle-icon';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 rounded-xl overflow-hidden bg-background">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Pickleball action background"
            data-ai-hint="pickleball game professional"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20" 
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="md:grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <PickleballIcon className="h-16 w-16 text-primary mx-auto md:mx-0 mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Welcome to Arunachal Pradesh Pickleball Association
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200} animationClass="animate-fadeInUp">
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                  Your official hub for everything pickleball in Arunachal Pradesh. Discover events, clubs, and connect with the community.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400} animationClass="animate-fadeInUp">
                <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <Link href="/events">
                      Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-foreground border-border hover:bg-secondary hover:text-secondary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <Link href="/about-pickleball">
                      What is Pickleball?
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={150} animationClass="animate-slideInFromRight" className="md:col-span-2 mt-12 md:mt-0">
              <Image
                src="/ball.png"
                alt="Pickleball"
                width={500}
                height={500}
                className="rounded-lg shadow-xl mx-auto object-cover aspect-square"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <AnimatedSection animationClass="animate-fadeIn" delay={600}>
        <section className="py-16">
          <div className="md:grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animationClass="animate-slideInFromLeft" className="mb-8 md:mb-0 order-first md:order-last">
               <Image
                  src="https://placehold.co/500x350.png"
                  alt="Pickleball equipment"
                  data-ai-hint="pickleball equipment"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
            </AnimatedSection>
            <div className="text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h2 className="text-3xl font-bold text-foreground">Discover What We Offer</h2>
              </AnimatedSection>
              <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
                <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                  Explore key features of the Arunachal Pradesh Pickleball Association.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Association Info", desc: "Learn about our mission and goals.", href: "/association-info", icon: Users, hint: "community team" },
              { title: "Events Calendar", desc: "Find upcoming tournaments & workshops.", href: "/events", icon: CalendarDays, hint: "calendar schedule" },
              { title: "Club Directory", desc: "Connect with local clubs and coaches.", href: "/clubs", icon: PaddleIcon, hint: "sports directory" },
              { title: "AI Workout", desc: "Get personalized practice routines.", href: "/ai-workout", icon: Sparkles, hint: "fitness training" }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150 + 700} animationClass="animate-scaleFadeInUp">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <CardDescription>{item.desc}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent text-foreground">
                      <Link href={item.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
      
      {/* About Pickleball Teaser */}
      <section className="py-16 bg-secondary/50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text content now on the left */}
            <AnimatedSection delay={100} animationClass="animate-slideInFromLeft" className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Story of Pickleball</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dive into the fascinating history of pickleball, from its humble beginnings to becoming one of the fastest-growing sports worldwide.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about-pickleball">
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
            {/* Image now on the right */}
            <AnimatedSection delay={200} animationClass="animate-slideInFromRight">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Pickleball History"
                data-ai-hint="vintage sport history"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
