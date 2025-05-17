
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Zap, Users, CalendarDays, Newspaper, Palette, Brain, Dumbbell } from 'lucide-react';

export default function HomePage() {
  const initiatives = [
    {
      title: 'Community Leagues',
      description: 'Join local leagues and compete with players of all skill levels. Fun and competitive play guaranteed.',
      icon: Users,
      image: 'https://placehold.co/500x300.png',
      imageHint: 'community sports',
      href: '#',
    },
    {
      title: 'Youth Programs',
      description: 'Specialized coaching and events designed to introduce young players to the joys of pickleball.',
      icon: Brain,
      image: 'https://placehold.co/500x300.png',
      imageHint: 'children playing sports',
      href: '#',
    },
    {
      title: 'Coaching Clinics',
      description: 'Improve your skills with expert-led clinics focusing on technique, strategy, and gameplay.',
      icon: Dumbbell,
      image: 'https://placehold.co/500x300.png',
      imageHint: 'sports coaching',
      href: '#',
    },
    {
      title: 'Annual Championship',
      description: 'The premier pickleball event in Odisha, attracting top talent and enthusiastic spectators.',
      icon: Palette, // Using Palette as a placeholder, consider Trophy or Award
      image: 'https://placehold.co/500x300.png',
      imageHint: 'trophy award',
      href: '#',
    },
  ];

  return (
    <>
      {/* Hero Section - Full Width Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn" delay={100}>
          <div className="absolute inset-0">
            <Image
              src="/player.jpg"
              alt="Pickleball action background"
              fill
              style={{ objectFit: 'cover' }}
              className="" 
              priority
            />
          </div>
        </AnimatedSection>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-7 lg:col-span-8 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  PLAY. CONNECT. EVOLVE.
                </h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
                  Your official hub for everything pickleball in Odisha. Discover events, clubs, and connect with the community.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400} animationClass="animate-fadeInUp">
                <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
                    <Link href="/contact-us">
                      Join OPA <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <Link href="/events">
                      Upcoming Events
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <div className="hidden md:col-span-5 lg:col-span-4 md:flex justify-center items-center mt-10 md:mt-0">
              <AnimatedSection animationClass="animate-zoomIn" delay={300}>
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
        </div>
      </section>

      {/* Key Highlights Section - Full Width Background */}
       <AnimatedSection animationClass="animate-fadeIn" delay={300}>
        <section className="py-16 bg-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedSection animationClass="animate-fadeInDown">
                <h2 className="text-3xl font-bold text-foreground">Key Highlights</h2>
              </AnimatedSection>
              <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover what makes the Odisha Pickleball Association special.
                </p>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Expert Coaching', description: 'Learn from certified coaches to elevate your game, regardless of your skill level.', icon: Lightbulb, href: '/coaching' },
                { title: 'Quality Facilities', description: 'Access well-maintained courts and facilities across Odisha.', icon: Zap, href: '/clubs' },
                { title: 'Community Events', description: 'Participate in regular tournaments, workshops, and social pickleball events.', icon: Users, href: '/events' },
                { title: 'Skill Development', description: 'Programs designed to help players of all ages improve and enjoy the sport.', icon: CalendarDays, href: '/coaching' },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 150 + 200} animationClass="animate-zoomIn">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card overflow-hidden group">
                    <CardHeader className="items-center text-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
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
          </div>
        </section>
      </AnimatedSection>

      {/* Discover Our Initiatives - Full Width Background */}
      <AnimatedSection animationClass="animate-fadeIn" delay={300}>
        <section className="py-16 bg-[#4B5D67]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:grid md:grid-cols-12 md:gap-x-8 md:items-center">
              <div className="md:col-span-3 lg:col-span-3 hidden md:flex justify-center items-center">
                <AnimatedSection animationClass="animate-slideInFromLeft" delay={200}>
                  <Image
                    src="/pickleball ball .webp"
                    alt="Pickleball icon"
                    width={150}
                    height={150}
                    className="animate-float object-contain mx-auto"
                  />
                </AnimatedSection>
              </div>
              <div className="md:col-span-9 lg:col-span-9 text-center md:text-left">
                <AnimatedSection animationClass="animate-fadeInUp">
                  <h2 className="text-3xl font-bold text-white">Discover Our Initiatives</h2>
                  <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
                    Explore key features and programs offered by the Odisha Pickleball Association.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 150 + 200} animationClass="animate-scaleFadeInUp">
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
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-full bg-accent/10 text-accent mr-3">
                           <item.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="hover:bg-primary/10 hover:text-primary text-foreground w-full">
                        <Link href={item.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <PageWrapper>
        {/* Join Our Community Section */}
        <AnimatedSection delay={100} animationClass="animate-fadeInUp">
          <section className="py-16 text-center bg-secondary/30 rounded-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Become a part of the fastest-growing sports community in Odisha. Connect with fellow players, participate in events, and help grow the sport.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
              <Link href="/contact-us">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </AnimatedSection>

        {/* About Pickleball Teaser Section */}
        <AnimatedSection delay={200} animationClass="animate-fadeInUp">
          <section className="py-16">
            <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
              <div className="md:col-span-7 lg:col-span-7 text-center md:text-left">
                <AnimatedSection animationClass="animate-slideInFromLeft">
                  <h2 className="text-3xl font-bold text-foreground">Learn About Pickleball</h2>
                  <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                    New to the sport? Discover the history, rules, and why pickleball is captivating players of all ages and skill levels.
                  </p>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="hover:bg-accent/10 hover:text-accent text-foreground">
                      <Link href="/about-pickleball">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              <div className="md:col-span-5 lg:col-span-5 mt-10 md:mt-0 flex justify-center">
                <AnimatedSection animationClass="animate-slideInFromRight" delay={100}>
                  <Image
                    src="/pickleball ball .webp"
                    alt="Pickleball ball and paddle"
                    width={200} // Adjusted size
                    height={200} // Adjusted size
                    className="rounded-lg shadow-xl object-contain animate-float"
                  />
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </PageWrapper>
    </>
  );
}

    