
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Target, TrendingUp, Users, BarChart } from 'lucide-react';

export default function AssociationInfoPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden bg-black">
        {/* Background Image Removed */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  About Us
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Learn more about the Odisha Pickleball Association.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f4f0fb' }} className="py-8 md:py-12">
        <PageWrapper className="py-0">
          <div className="mb-12">
            <AnimatedSection delay={100} animationClass="animate-fadeInUp">
              <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <CardHeader className="flex flex-row items-center gap-4 p-8">
                  <Briefcase className="h-12 w-12 text-primary" />
                  <CardTitle className="text-4xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-muted-foreground text-xl">
                    To promote and develop the sport of pickleball across Odisha, fostering a vibrant community of players of all ages and skill levels. We aim to provide resources, organize events, and create opportunities for growth and enjoyment in the sport.
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
          </div>

          <div className="mb-12">
            <AnimatedSection delay={200} animationClass="animate-fadeInUp">
              <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <CardHeader className="flex flex-row items-center gap-4 p-8">
                  <Target className="h-12 w-12 text-primary" />
                  <CardTitle className="text-4xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-muted-foreground text-xl">
                    To establish Odisha as a premier destination for pickleball, recognized for its excellent facilities, competitive spirit, and inclusive community. We aspire to see pickleball become a widely played sport contributing to health, wellness, and camaraderie throughout the state.
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
          </div>

          <AnimatedSection delay={300} animationClass="animate-fadeInUp">
            <section className="py-12 bg-secondary/30 rounded-lg mb-12">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-foreground">Quick Stats</h2>
              </div>
              <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-12 text-center"> {/* Increased gap */}
                <div className="p-8 bg-card rounded-lg shadow-md group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"> {/* Increased padding */}
                  <BarChart className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Increased icon size */}
                  <h3 className="text-2xl font-semibold text-foreground">Founded</h3>
                  <p className="text-5xl font-bold text-accent mt-2">2023</p> {/* Increased stat value size */}
                  <p className="text-base text-muted-foreground mt-1"></p> {/* Placeholder removed */}
                  <div
                    className="absolute top-0 left-[-150%] w-[50%] h-full
                               bg-gradient-to-r from-transparent via-white/10 to-transparent
                               transform -skew-x-12
                               transition-all duration-700 ease-out
                               group-hover:left-[150%] group-hover:duration-500">
                  </div>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"> {/* Increased padding */}
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Increased icon size */}
                  <h3 className="text-2xl font-semibold text-foreground">Members</h3>
                  <p className="text-5xl font-bold text-accent mt-2">500+</p> {/* Increased stat value size */}
                  <p className="text-base text-muted-foreground mt-1"></p> {/* Placeholder removed */}
                  <div
                    className="absolute top-0 left-[-150%] w-[50%] h-full
                               bg-gradient-to-r from-transparent via-white/10 to-transparent
                               transform -skew-x-12
                               transition-all duration-700 ease-out
                               group-hover:left-[150%] group-hover:duration-500">
                  </div>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"> {/* Increased padding */}
                  <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Increased icon size */}
                  <h3 className="text-2xl font-semibold text-foreground">Districts</h3>
                  <p className="text-5xl font-bold text-accent mt-2">10+</p> {/* Increased stat value size */}
                  <p className="text-base text-muted-foreground mt-1">Covered</p> {/* Placeholder text removed */}
                  <div
                    className="absolute top-0 left-[-150%] w-[50%] h-full
                               bg-gradient-to-r from-transparent via-white/10 to-transparent
                               transform -skew-x-12
                               transition-all duration-700 ease-out
                               group-hover:left-[150%] group-hover:duration-500">
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </PageWrapper>
      </section>
    </>
  );
}
