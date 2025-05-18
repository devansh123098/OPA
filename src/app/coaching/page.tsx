
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Edit } from 'lucide-react';

export default function CoachingPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn">
          <Image
            src="/bgintop.jpg"
            alt="Odisha Pickleball Coaching"
            data-ai-hint="sports training class"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-100"
            priority
          />
        </AnimatedSection>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Coaching Programs
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Develop your skills and passion for pickleball with our expert coaching.
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

      <PageWrapper>
        <AnimatedSection delay={100} animationClass="animate-fadeInUp">
          <Card className="shadow-lg">
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
              <div className="mt-8 flex justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Coaching session placeholder"
                  data-ai-hint="sports training coach"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </PageWrapper>
    </>
  );
}
