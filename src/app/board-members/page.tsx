
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function BoardMembersPage() {
  return (
    <PageWrapper>
      <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
          <AnimatedSection animationClass="animate-fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Board Members
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Meet the dedicated team leading the Odisha Pickleball Association.
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

      <AnimatedSection delay={100} animationClass="animate-fadeInUp">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              Detailed profiles of our board members, including executive, technical, and advisory roles, will be available here soon. 
              We are committed to transparency and introducing the passionate individuals driving pickleball forward in Odisha.
            </p>
            <div className="mt-8 flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team placeholder"
                data-ai-hint="team photo group"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </PageWrapper>
  );
}
