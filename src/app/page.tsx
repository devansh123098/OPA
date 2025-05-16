

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Users, Sparkles, Award, Home as HomeIcon, CalendarCheck, BarChartBig, Info } from 'lucide-react';
import PickleballIcon from '@/components/icons/pickleball-icon';
import PaddleIcon from '@/components/icons/paddle-icon';

export default function HomePage() {
  const keyHighlights = [
    { title: "Expert Coaching", description: "Learn from certified coaches to elevate your game, regardless of your skill level.", icon: Award, href: "/clubs#coaches" },
    { title: "Quality Facilities", description: "Access well-maintained courts and facilities across Arunachal Pradesh.", icon: HomeIcon, href: "/clubs" },
    { title: "Community Events", description: "Participate in regular tournaments, workshops, and social pickleball events.", icon: CalendarCheck, href: "/events" },
    { title: "Skill Development", description: "Programs designed to help players of all ages improve and enjoy the sport.", icon: BarChartBig, href: "/ai-workout" },
  ];

  const initiatives = [
    { title: "Association Info", desc: "Learn about our mission and goals.", href: "/association-info", icon: Info, image: "https://placehold.co/500x300.png", imageHint: "community team" },
    { title: "Events Calendar", desc: "Find upcoming tournaments & workshops.", href: "/events", icon: CalendarDays, image: "https://placehold.co/500x300.png", imageHint: "calendar schedule" },
    { title: "Club Directory", desc: "Connect with local clubs and coaches.", href: "/clubs", icon: Users, image: "https://placehold.co/500x300.png", imageHint: "sports directory" },
    { title: "AI Workout", desc: "Get personalized practice routines.", href: "/ai-workout", icon: Sparkles, image: "https://placehold.co/500x300.png", imageHint: "fitness training" }
  ];


  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 rounded-xl overflow-hidden bg-background">
        <div className="absolute inset-0">
          <Image
            src="/player.jpg"
            alt="Pickleball action background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="md:grid md:grid-cols-2 gap-12 items-center"> {/* Changed to md:grid-cols-2 */}
            <div className="md:col-span-2 text-center md:text-left"> {/* Changed to md:col-span-2 */}
              <AnimatedSection animationClass="animate-fadeInUp">
                <PickleballIcon className="h-16 w-16 text-primary mx-auto md:mx-0 mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-gradientWave">
                  Welcome to Arunachal Pradesh Pickleball Association
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200} animationClass="animate-fadeInUp">
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 animate-gradientWave">
                  Your official hub for everything pickleball in Arunachal Pradesh. Discover events, clubs, and connect with the community.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400} animationClass="animate-fadeInUp">
                <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
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
            {/* Image removed from here */}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <AnimatedSection animationClass="animate-fadeIn" delay={500}>
        <section className="py-16">
          <div className="text-center mb-12">
            <AnimatedSection animationClass="animate-fadeInDown">
              <h2 className="text-3xl font-bold text-foreground">Key Highlights</h2>
            </AnimatedSection>
            <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes the Arunachal Pradesh Pickleball Association special.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <AnimatedSection key={highlight.title} delay={index * 150 + 200} animationClass="animate-zoomIn">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card text-center">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                      <highlight.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent text-foreground">
                      <Link href={highlight.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Discover Our Initiatives Section */}
      <AnimatedSection animationClass="animate-fadeIn" delay={300}>
        <section className="py-16">
          <div className="md:grid md:grid-cols-2 gap-12 items-center mb-16">
             <AnimatedSection animationClass="animate-slideInFromLeft" delay={100} className="mb-8 md:mb-0 order-first md:order-first">
               <Image
                  src="https://placehold.co/500x350.png"
                  alt="Pickleball equipment"
                  data-ai-hint="pickleball equipment gear"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
            </AnimatedSection>
            <div className="text-center md:text-left order-last md:order-last">
              <AnimatedSection animationClass="animate-fadeInUp" delay={200}>
                <h2 className="text-3xl font-bold text-foreground">Discover Our Initiatives</h2>
              </AnimatedSection>
              <AnimatedSection animationClass="animate-fadeInUp" delay={300}>
                <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                  Explore key features and services of the Arunachal Pradesh Pickleball Association.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150 + 400} animationClass="animate-scaleFadeInUp">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card overflow-hidden group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      data-ai-hint={item.imageHint}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="items-center text-center pt-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow px-4 pb-4">
                    <CardDescription>{item.desc}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center pb-6 pt-0">
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

      {/* Join Our Community CTA Section */}
      <AnimatedSection animationClass="animate-fadeInUp" delay={300}>
        <section className="py-16 bg-secondary/30 rounded-xl my-12">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animationClass="animate-fadeInUp">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join Our Pickleball Community
              </h2>
            </AnimatedSection>
            <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Become a part of Arunachal Pradesh's growing pickleball family. Connect with players, participate in events, and help grow the sport!
              </p>
            </AnimatedSection>
            <AnimatedSection animationClass="animate-fadeInUp" delay={200}>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
                {/* We can update this link later if there's a specific membership page */}
                <Link href="/association-info#contact"> 
                  Get Involved <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
      
      {/* About Pickleball Teaser */}
      <section className="py-16 bg-secondary/50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
             {/* Swapped order for alternating layout */}
            <AnimatedSection delay={100} animationClass="animate-slideInFromLeft" className="order-last md:order-first">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Pickleball History"
                data-ai-hint="vintage sport history"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>
             <AnimatedSection delay={200} animationClass="animate-slideInFromRight" className="text-center md:text-left order-first md:order-last">
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
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

