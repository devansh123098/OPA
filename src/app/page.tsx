
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, CalendarDays, Users, Sparkles } from 'lucide-react';
import PickleballIcon from '@/components/icons/pickleball-icon';
import PaddleIcon from '@/components/icons/paddle-icon';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary/80 via-accent/70 to-secondary/60">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Pickleball action"
            data-ai-hint="pickleball game action"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
            priority
          />
           <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for text contrast */}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection animationClass="animate-fadeInUp">
            <PickleballIcon className="h-16 w-16 text-background mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background text-shadow">
              Welcome to Arunachal Pradesh Pickleball Association
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200} animationClass="animate-fadeInUp">
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-background/90 text-shadow">
              Your official hub for everything pickleball in Arunachal Pradesh. Discover events, clubs, and connect with the community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400} animationClass="animate-fadeInUp">
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Link href="/events">
                  Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/20 hover:bg-background/30 text-background border-background/50 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Link href="/about-pickleball">
                  What is Pickleball?
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground">Discover What We Offer</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
              Explore key features of the Arunachal Pradesh Pickleball Association.
            </p>
          </AnimatedSection>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Association Info", desc: "Learn about our mission and goals.", href: "/association-info", icon: Users, hint: "community team" },
            { title: "Events Calendar", desc: "Find upcoming tournaments & workshops.", href: "/events", icon: CalendarDays, hint: "calendar schedule" },
            { title: "Club Directory", desc: "Connect with local clubs and coaches.", href: "/clubs", icon: PaddleIcon, hint: "sports directory" },
            { title: "AI Workout", desc: "Get personalized practice routines.", href: "/ai-workout", icon: Sparkles, hint: "fitness training" }
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100} animationClass="animate-fadeInUp">
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
                  <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent">
                    <Link href={item.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* About Pickleball Teaser */}
      <section className="py-16 bg-secondary/50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animationClass="animate-slideInFromLeft">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Pickleball History"
                data-ai-hint="vintage sport history"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>
            <AnimatedSection animationClass="animate-slideInFromRight">
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
