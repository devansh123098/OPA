
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PickleballIcon from '@/components/icons/pickleball-icon';
import PaddleIcon from '@/components/icons/paddle-icon';

export default function AboutPickleballPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image
          src="/player.jpg"
          alt="Pickleball action"
          data-ai-hint="pickleball game"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-100"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                  <PickleballIcon className="h-12 w-12 text-white" />
                  <PaddleIcon className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  The Story of Pickleball
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Discover the origins and rise of one of the world's fastest-growing sports.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <PageWrapper>
        <div className="grid lg:grid-cols-3 gap-8 mt-12"> {/* Added mt-12 for spacing below new hero */}
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
                  <CardTitle className="text-2xl text-foreground">Rules of the Game</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-muted-foreground text-lg">
                  <p>
                    Pickleball is played on a badminton-sized court with a net lowered to 36 inches at the sidelines and 34 inches in the center. Games are typically played in doubles, though singles is also common. The game begins with an underhand serve that must be hit diagonally into the opponent’s service area, clearing the non-volley zone, also known as the "kitchen."
                  </p>
                  <p>
                    A key rule is the double-bounce rule—each team must let the ball bounce once on their side before hitting it. That means the receiving team must let the serve bounce, and the serving team must let the return bounce. After that, volleys are allowed, but not while standing inside the kitchen or touching its line. This rule prevents aggressive smashes too close to the net.
                  </p>
                  <p>
                    Scoring happens only on the serving side, and games are typically played to 11 points, win by 2. Serves rotate between teammates on the same side until a fault occurs. Common faults include hitting the ball out of bounds, into the net, or volleying from within the kitchen.
                  </p>
                  <p>
                    These rules make pickleball fast-paced yet strategic, appealing to players of all ages.
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
                src="/paddleandball.webp"
                alt="Pickleball paddle and ball"
                data-ai-hint="pickleball equipment"
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
    </>
  );
}
