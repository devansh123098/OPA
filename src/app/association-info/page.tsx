
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Target, TrendingUp, Users, BarChart } from 'lucide-react';

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

      <div className="mb-12">
        <AnimatedSection delay={100} animationClass="animate-fadeInUp">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To promote and develop the sport of pickleball across Odisha, fostering a vibrant community of players of all ages and skill levels. We aim to provide resources, organize events, and create opportunities for growth and enjoyment in the sport.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <div className="mb-12">
        <AnimatedSection delay={200} animationClass="animate-fadeInUp">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To establish Odisha as a premier destination for pickleball, recognized for its excellent facilities, competitive spirit, and inclusive community. We aspire to see pickleball become a widely played sport contributing to health, wellness, and camaraderie throughout the state.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
      
      <AnimatedSection delay={300} animationClass="animate-fadeInUp">
        <section className="py-10 bg-secondary/30 rounded-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Quick Stats</h2>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-card rounded-lg shadow-md">
              <BarChart className="h-10 w-10 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-foreground">Founded</h3>
              <p className="text-2xl font-bold text-accent">2023</p>
              <p className="text-sm text-muted-foreground">(Placeholder)</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-md">
              <Users className="h-10 w-10 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-foreground">Members</h3>
              <p className="text-2xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">(Placeholder)</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-md">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-foreground">Districts</h3>
              <p className="text-2xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">Covered (Placeholder)</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PageWrapper>
  );
}
