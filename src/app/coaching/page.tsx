
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Edit } from 'lucide-react';

export default function CoachingPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden bg-black"> {/* Added bg-black */}
        {/* Image component for ppr.jpeg removed */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Coaching Programs
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Develop your skills and passion for pickleball with our expert coaching.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <PageWrapper>
        <AnimatedSection delay={100} animationClass="animate-fadeInUp">
          <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Become a Certified Coach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Information about our coaching pathways, certification prerequisites, fees, syllabus, and application process will be detailed here soon.
                We are dedicated to fostering high-quality coaching talent in Odisha.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#">
                    <Edit className="mr-2 h-5 w-5" />
                    Register Now
                  </Link>
                </Button>
              </div>
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
      </PageWrapper>
    </>
  );
}
