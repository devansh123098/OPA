
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PickleballIcon from '@/components/icons/pickleball-icon';
import PaddleIcon from '@/components/icons/paddle-icon';

export default function AboutPickleballPage() {
  return (
    <PageWrapper>
      <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-12 text-center md:text-left"> {/* Adjusted to full width */}
          <AnimatedSection animationClass="animate-fadeInUp">
            <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
              <PickleballIcon className="h-12 w-12 text-primary" />
              <PaddleIcon className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              The Story of Pickleball
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Discover the origins and rise of one of the world's fastest-growing sports.
            </p>
          </AnimatedSection>
        </div>
        {/* Removed small pickleball icon div */}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <AnimatedSection delay={100} animationClass="animate-fadeInUp">
            <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">A Summer Invention</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-muted-foreground text-lg">
                <p>
                  Pickleball was invented in the summer of 1965 on Bainbridge Island, Washington, a short ferry ride from Seattle. The creators were Joel Pritchard, a congressman from Washington State, and his friends Bill Bell and Barney McCallum.
                </p>
                <p>
                  The story goes that Pritchard and Bell returned to Pritchard's home one Saturday afternoon after a game of golf to find their families bored. Pritchard's property had an old badminton court, but they couldn't find a full set of badminton rackets. Improvising, they started hitting a Wiffle ball over the net with table tennis paddles.
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

          <AnimatedSection delay={200} animationClass="animate-fadeInUp">
            <Card className="shadow-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Evolution of the Game</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-muted-foreground text-lg">
                <p>
                  Initially, they placed the net at badminton height of 60 inches and volleyed the ball over the net. As the weekend progressed, players found that the Wiffle ball bounced well on the asphalt surface, so they lowered the net to 36 inches.
                </p>
                <p>
                  Soon, Barney McCallum was introduced to the game. He helped to formalize the rules, drawing inspiration from badminton. A key rule, the "non-volley zone" (or "kitchen"), was established to prevent players from smashing the ball at the net. They also established the double-bounce rule, where each team must play their first shot off the bounce.
                </p>
                <p>
                  The name "Pickleball" has a couple of origin stories. According to Joel Pritchard's wife, Joan, she started calling the game pickleball because "the combination of different sports reminded me of the pickle boat in crew where oarsmen were chosen from the leftovers of other boats." Another account is that the game was named after the Pritchards' family dog, Pickles, who would chase stray balls and run off with them. Both stories are popular, adding to the sport's quirky charm.
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

        <div className="lg:col-span-1 space-y-6">
           <AnimatedSection delay={150} animationClass="animate-slideInFromRight">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Vintage pickleball equipment"
              data-ai-hint="old sport equipment"
              width={400}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full aspect-[4/5]"
            />
          </AnimatedSection>
          <AnimatedSection delay={250} animationClass="animate-slideInFromRight">
            <Card className="shadow-lg bg-secondary/30 group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Key Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>1967:</strong> The first permanent pickleball court was constructed.</li>
                  <li><strong>1972:</strong> A corporation was formed to protect the creation of this new sport.</li>
                  <li><strong>1976:</strong> The first known pickleball tournament was held.</li>
                  <li><strong>1984:</strong> The USA Pickleball Association (USAPA) was organized to promote the growth and development of pickleball, on both a national and international level.</li>
                  <li><strong>2000s:</strong> The sport began to grow rapidly, especially among seniors in retirement communities.</li>
                  <li><strong>2010s-Present:</strong> Explosive growth across all demographics, becoming one of the fastest-growing sports in North America and spreading internationally.</li>
                </ul>
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
      </div>

      <AnimatedSection delay={300} animationClass="animate-fadeInUp">
        <section className="mt-12 py-10 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Pickleball Today</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Today, pickleball is enjoyed by millions of people of all ages and athletic abilities. Its simple rules, low-impact nature, and social aspect make it an appealing sport for everyone. The Odisha Pickleball Association is proud to be part of this growing global community!
            </p>
             <div className="mt-8">
                <Image
                  src="/court.jpg"
                  alt="Modern pickleball court"
                  data-ai-hint="pickleball court"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-xl object-cover mx-auto"
                />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PageWrapper>
  );
}
