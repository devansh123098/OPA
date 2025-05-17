
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Target, TrendingUp, Users, BarChart } from 'lucide-react';

export default function AssociationInfoPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn">
          <Image
            src="/bgintop.jpg"
            alt="Odisha pickleball community"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-100" 
            priority
          />
        </AnimatedSection>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
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
        </div>
      </section>

      <section style={{ backgroundColor: '#f4f0fb' }} className="py-8 md:py-12">
        <PageWrapper className="py-0"> {/* PageWrapper now only handles container and horizontal padding */}
          <div className="mb-12">
            <AnimatedSection delay={100} animationClass="animate-fadeInUp">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-3 p-8"> {/* Increased padding */}
                  <Briefcase className="h-10 w-10 text-primary" /> {/* Slightly larger icon */}
                  <CardTitle className="text-3xl">Our Mission</CardTitle> {/* Slightly larger title */}
                </CardHeader>
                <CardContent className="p-8 pt-0"> {/* Increased padding */}
                  <p className="text-muted-foreground text-xl"> {/* Increased text size */}
                    To promote and develop the sport of pickleball across Odisha, fostering a vibrant community of players of all ages and skill levels. We aim to provide resources, organize events, and create opportunities for growth and enjoyment in the sport.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="mb-12">
            <AnimatedSection delay={200} animationClass="animate-fadeInUp">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-3 p-8"> {/* Increased padding */}
                  <Target className="h-10 w-10 text-primary" /> {/* Slightly larger icon */}
                  <CardTitle className="text-3xl">Our Vision</CardTitle> {/* Slightly larger title */}
                </CardHeader>
                <CardContent className="p-8 pt-0"> {/* Increased padding */}
                  <p className="text-muted-foreground text-xl"> {/* Increased text size */}
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
      </section>
    </>
  );
}
