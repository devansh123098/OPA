
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
      <section className="relative py-16 md:py-20 overflow-hidden bg-black">
        {/* Background Image Removed, solid black background applied */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Player Rankings
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Check out the latest Odisha state player rankings.
                </p>
              </AnimatedSection>
            </div>
            {/* Small pickleball icon div removed */}
          </div>
        </div>
      </section>

      <PageWrapper> {/* Removed className="bg-black" */}
        <AnimatedSection delay={100} animationClass="animate-fadeInUp">
          <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-black"> {/* Added bg-black */}
            <CardHeader className="flex flex-row items-center gap-3">
              <BarChartHorizontal className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl text-white">Live Leaderboards Coming Soon!</CardTitle> {/* Changed to text-white */}
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg mt-4"> {/* Changed to text-gray-300 */}
                Want to see your name on the leaderboard? Participate in OPA-approved tournaments and register with our ranking system.
              </p>
              <div className="mt-8 mb-8 flex justify-center">
                <Image
                  src="/pwrlogo.png" 
                  alt="PWR Logo" 
                  data-ai-hint="rankings logo"
                  width={200} 
                  height={200} 
                  className="rounded-lg shadow-md object-contain mx-auto" 
                />
              </div>
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" href="https://rankings.pwr.global/" target="_blank" rel="noopener noreferrer">
                  <Link href="https://rankings.pwr.global/" target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-5 w-5" />
                    See your Rankings
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
