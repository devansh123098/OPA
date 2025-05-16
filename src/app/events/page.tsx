import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { placeholderEvents, type Event } from '@/lib/constants';
import { CalendarDays, MapPin, Ticket, Clock } from 'lucide-react';

export default function EventsPage() {
  const events: Event[] = placeholderEvents;

  return (
    <PageWrapper>
      <AnimatedSection animationClass="animate-fadeInUp">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Upcoming Events
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Join us for exciting tournaments, workshops, and training sessions.
          </p>
        </div>
      </AnimatedSection>

      {events.length === 0 ? (
        <AnimatedSection>
          <p className="text-center text-muted-foreground text-lg">
            No upcoming events scheduled at the moment. Please check back soon!
          </p>
        </AnimatedSection>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 100} animationClass="animate-fadeInUp">
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="relative h-56 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    data-ai-hint={event.imageHint}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
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
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={event.registrationLink}>
                        <Ticket className="h-4 w-4 mr-2" /> Register Now
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="w-full">Registration Closed/Details Soon</Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
