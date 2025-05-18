
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { placeholderEvents, type Event } from '@/lib/constants';
import { CalendarDays, MapPin, Ticket, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast'; // Added useToast import

export default function EventsPage() {
  const events: Event[] = placeholderEvents;
  const { toast } = useToast(); // Initialize useToast

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden bg-black">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Tournaments & Events
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Discover upcoming pickleball tournaments, workshops, and community events in Odisha.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <PageWrapper>
        {events.length === 0 ? (
          <AnimatedSection>
            <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">No Events Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-lg">
                  No upcoming events scheduled at the moment. Please check back soon!
                </p>
              </CardContent>
              <div
                className="absolute top-0 left-[-150%] w-[50%] h-full
                           bg-gradient-to-r from-transparent via-white/10 to-transparent
                           transform -skew-x-12
                           transition-all duration-700 ease-out
                           group-hover:left-[150%] group-hover:duration-500">
              </div>
            </Card>
          </AnimatedSection>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 100} animationClass="animate-fadeInUp">
                <Card className="h-full flex flex-col group relative overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card">
                  <div className="relative h-56 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      data-ai-hint={event.imageHint}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground pt-1">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    {event.time && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-start text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    {event.registrationLink ? (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => {
                          toast({
                            title: "Event Coming Soon!!!",
                            description: `Details for "${event.title}" will be available shortly.`,
                          });
                        }}
                      >
                        <Ticket className="h-4 w-4 mr-2" /> Register Now
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full">Registration Closed/Details Soon</Button>
                    )}
                  </CardFooter>
                  <div
                    className="absolute top-0 left-[-150%] w-[50%] h-full
                               bg-gradient-to-r from-transparent via-white/10 to-transparent
                               transform -skew-x-12
                               transition-all duration-700 ease-out
                               group-hover:left-[150%] group-hover:duration-500">
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
      </PageWrapper>
    </>
  );
}
