
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderClubs, placeholderCoaches, type Club, type Coach } from '@/lib/constants';
import { Users, MapPin, Phone, Mail, Globe, ShieldCheck, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClubsPage() {
  const clubs: Club[] = placeholderClubs;
  const coaches: Coach[] = placeholderCoaches;

  return (
    <PageWrapper>
      <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
          <AnimatedSection animationClass="animate-fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Club & Coach Directory
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Find registered pickleball clubs and certified coaches in Odisha.
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

      <Tabs defaultValue="clubs" className="w-full">
        <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
            <TabsTrigger value="coaches">Coaches</TabsTrigger>
          </TabsList>
        </AnimatedSection>

        <TabsContent value="clubs">
          {clubs.length === 0 ? (
            <AnimatedSection>
              <p className="text-center text-muted-foreground text-lg">
                No clubs listed yet. Please check back soon!
              </p>
            </AnimatedSection>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <AnimatedSection key={club.id} delay={index * 100} animationClass="animate-fadeInUp">
                  <Card className="h-full flex flex-col group relative overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card">
                    <div className="relative h-48 w-full">
                      <Image
                        src={club.image}
                        alt={club.name}
                        data-ai-hint={club.imageHint}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{club.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground pt-1">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {club.location}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2 text-sm">
                      {club.contactPerson && (
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          Contact: {club.contactPerson}
                        </div>
                      )}
                      {club.phone && (
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2 text-primary" />
                          {club.phone}
                        </div>
                      )}
                      {club.email && (
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4 mr-2 text-primary" />
                          <a href={`mailto:${club.email}`} className="hover:text-accent transition-colors">{club.email}</a>
                        </div>
                      )}
                      {club.website && (
                        <div className="flex items-center text-muted-foreground">
                          <Globe className="h-4 w-4 mr-2 text-primary" />
                          <a href={club.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Visit Website</a>
                        </div>
                      )}
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
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="coaches">
           {coaches.length === 0 ? (
            <AnimatedSection>
              <p className="text-center text-muted-foreground text-lg">
                No coaches listed yet. Please check back soon!
              </p>
            </AnimatedSection>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach, index) => (
                <AnimatedSection key={coach.id} delay={index * 100} animationClass="animate-fadeInUp">
                  <Card className="h-full flex flex-col group relative overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card">
                     <div className="relative h-48 w-full">
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        data-ai-hint={coach.imageHint}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{coach.name}</CardTitle>
                       <div className="flex items-center text-sm text-muted-foreground pt-1">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {coach.location}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
                        Specialization: {coach.specialization}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Experience: {coach.experience}
                      </div>
                       {coach.phone && (
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2 text-primary" />
                          {coach.phone}
                        </div>
                      )}
                      {coach.email && (
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4 mr-2 text-primary" />
                          <a href={`mailto:${coach.email}`} className="hover:text-accent transition-colors">{coach.email}</a>
                        </div>
                      )}
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
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
}
