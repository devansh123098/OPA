
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartHorizontal, Search } from 'lucide-react';

export default function RankingPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn">
          <Image
            src="/bgintop.jpg"
            alt="Odisha Pickleball Ranking"
            data-ai-hint="sports leaderboard chart"
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
                  Player Rankings
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Check out the latest Odisha state player rankings.
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
          <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-3">
              <BarChartHorizontal className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Live Leaderboards Coming Soon!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                We are currently working on integrating live leaderboards fed by our rankings collection.
                Soon you&apos;ll be able to see rankings via a tabbed interface for Men’s Singles, Women’s Singles, Doubles, and Junior categories.
                A &quot;How ranking works&quot; section linking to our policy PDF will also be available.
                Please check back soon!
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#">
                    <Search className="mr-2 h-5 w-5" />
                    See your Rankings
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Ranking chart placeholder"
                  data-ai-hint="data chart graph"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover"
                />
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
