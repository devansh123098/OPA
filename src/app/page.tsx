
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Users, Dumbbell } from 'lucide-react'; // Removed Zap, Palette, Newspaper, Edit, Brain

export default function HomePage() {
  const keyHighlights = [
    { title: 'Expert Coaching', description: 'Learn from certified coaches to elevate your game, regardless of your skill level.', icon: Lightbulb, href: '/coaching' },
    { title: 'Community Building', description: 'Fostering a vibrant pickleball community through inclusive events and activities.', icon: Users, href: '/events' }, // Changed from Quality Facilities
    { title: 'Community Events', description: 'Participate in regular tournaments, workshops, and social pickleball events.', icon: Users, href: '/events' },
    { title: 'Skill Development', description: 'Programs designed to help players of all ages improve and enjoy the sport.', icon: Dumbbell, href: '/coaching' },
  ];

  const initiatives = [
    {
      title: 'Community Leagues',
      description: 'Join local leagues and compete with players of all skill levels. Fun and competitive play guaranteed.',
      icon: Users,
      image: 'https://placehold.co/500x300.png',
      imageHint: 'community sports',
      href: '/events',
    },
    {
      title: 'Youth Programs',
      description: 'Specialized coaching and events designed to introduce young players to the joys of pickleball.',
      icon: Lightbulb, // Changed from Brain to Lightbulb as Brain was removed
      image: 'https://placehold.co/500x300.png',
      imageHint: 'children playing sports',
      href: '/coaching',
    },
    {
      title: 'Coaching Clinics',
      description: 'Improve your skills with expert-led clinics focusing on technique, strategy, and gameplay.',
      icon: Dumbbell,
      image: 'https://placehold.co/500x300.png',
      imageHint: 'sports coaching',
      href: '/coaching',
    },
    {
      title: 'Annual Championship',
      description: 'The premier pickleball event in Odisha, attracting top talent and enthusiastic spectators.',
      icon: Users, // Changed from Palette to Users as Palette was removed
      image: 'https://placehold.co/500x300.png',
      imageHint: 'trophy award',
      href: '/events',
    },
  ];

  const newsItems = [
     {
      id: 'news1',
      title: 'The Indian Pickleball Association (IPA) - now officially recognised by the Ministry of Youth Affairs and Sports, Government of India',
      description: 'With systematic and painstaking groundwork laid by the members in IPA and a fast-growing community behind it, IPA is ready to drive the next chapter: building a nationwide ecosystem of access, excellence, and opportunity.',
      image: '/news1.webp',
      imageHint: 'IPA recognition sports ministry',
      href: 'https://www.timesnownews.com/sports/pickleball/ipa-to-lead-national-expansion-and-global-strategy-article-151547725',
    },
    {
      id: 'news2',
      title: 'IPA Hosts Special Meeting In New Delhi To Mark Official Recognition As National Sports Federation',
      description: 'The objective of the meeting was to outline IPA’s strategic roadmap for the development and promotion of pickleball across India.',
      image: 'https://images.timesnownews.com/thumb/msid-151596199,width-1280,height-720,resizemode-75/151596199.jpg',
      imageHint: 'pickleball meeting',
      href: 'https://www.timesnownews.com/sports/pickleball/ipa-hosts-special-meeting-in-new-delhi-to-mark-official-recognition-as-national-sports-federation-article-151596188',
    },
    {
      id: 'news3',
      title: 'Indian Pickleball Association Receives Official Recognition From The Sports Ministry As The National Federation For Pickleball In India',
      description: 'Following the recognition, the IPA - announced that India will host the Pickleball Asia Cup 2025 later this year.',
      image: '/newsthree.jpg',
      imageHint: 'news article image',
      href: 'https://www.timesnownews.com/sports/pickleball/indian-pickleball-association-gets-official-recognition-from-sports-ministry-approval-as-the-national-federation-for-pickleball-in-india-article-151539176',
    },
  ];


  return (
    <AnimatedSection animationClass="animate-fadeInUp" delay={50} threshold={0.01} once={true}>
      <section className="relative overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn" delay={100}>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/mainimage.JPG"
              alt="Pickleball action background"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-100"
              priority
            />
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection animationClass="animate-fadeInUp" delay={200}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-gradientWave">
            Welcome to Odisha Pickleball Association
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Your official hub for everything pickleball in Odisha. Discover events, clubs, and connect with the community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Link href="/contact-us">
                Join OPA <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Link href="/events">
                Upcoming Events
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animationClass="animate-zoomIn" delay={100}>
          <section className="py-16 bg-primary/20 relative">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 z-10 hidden md:block">
              <Image
                src="/konarkandball.png"
                alt="Spinning Konark Wheel with Pickleball"
                width={150}
                height={150}
                className="animate-spin-slow object-contain"
              />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animationClass="animate-fadeInDown">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground">Key Highlights</h2>
                  <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover what makes the Odisha Pickleball Association special.
                  </p>
                </div>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyHighlights.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 150 + 200} animationClass="animate-zoomIn">
                    <Card className="h-full group relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col bg-card">
                      <CardHeader className="items-center text-center">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                          <item.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center flex-grow">
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                      <CardFooter className="justify-center">
                        <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent text-foreground">
                          <Link href={item.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      </CardFooter>
                      <div
                        className="absolute top-0 left-[-150%] w-[50%] h-full
                                   bg-gradient-to-r from-transparent via-white/10 to-transparent
                                   transform -skew-x-12
                                   transition-all duration-700 ease-out
                                   group-hover:left-[150%] group-hover:duration-500">
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
      </AnimatedSection>
      
      <AnimatedSection animationClass="animate-fadeInUp" delay={150}>
        <section className="py-16 bg-[#4B5D67]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 md:grid md:grid-cols-12 md:gap-x-8 md:items-center">
                <div className="md:col-span-7 lg:col-span-8 text-center md:text-left"> 
                  <AnimatedSection animationClass="animate-fadeInUp">
                    <h2 className="text-3xl font-bold text-white">Discover Our Initiatives</h2>
                    <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
                      Explore key features and programs offered by the Odisha Pickleball Association.
                    </p>
                  </AnimatedSection>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {initiatives.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 100 + 200} animationClass="animate-scaleFadeInUp">
                    <Card className="h-full group relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col bg-card">
                      <div className="relative h-48 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          data-ai-hint={item.imageHint}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <div className="p-2 rounded-full bg-accent/10 text-accent mr-3">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" asChild className="hover:bg-primary/10 hover:text-primary text-foreground w-full">
                          <Link href={item.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      </CardFooter>
                      <div
                        className="absolute top-0 left-[-150%] w-[50%] h-full
                                   bg-gradient-to-r from-transparent via-white/10 to-transparent
                                   transform -skew-x-12
                                   transition-all duration-700 ease-out
                                   group-hover:left-[150%] group-hover:duration-500">
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
      </AnimatedSection>
      
      <AnimatedSection animationClass="animate-fadeInUp" delay={200}>
        <section className="py-16 bg-secondary/30 relative"> 
            <div className="absolute top-0 right-0 transform -translate-y-1/2 z-10 hidden md:block">
              <Image
                src="/konarkandball.png"
                alt="Spinning Konark Wheel with Pickleball"
                width={150}
                height={150}
                className="animate-spin-slow object-contain"
              />
            </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
              <AnimatedSection animationClass="animate-fadeInDown">
                <h2 className="text-3xl font-bold text-foreground mb-12">Latest News</h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((news, index) => (
                  <AnimatedSection key={news.id} delay={index * 100 + 100} animationClass="animate-scaleFadeInUp">
                    <Card className="h-full flex flex-col overflow-hidden shadow-lg group relative hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card">
                      <div className="relative h-56 w-full">
                        <Image
                          src={news.image}
                          alt={news.title}
                          data-ai-hint={news.imageHint}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">{news.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" asChild className="hover:bg-primary/10 hover:text-primary text-foreground w-full">
                          <Link 
                            href={news.href}
                            target={news.href.startsWith('http') ? '_blank' : undefined}
                            rel={news.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                       <div
                        className="absolute top-0 left-[-150%] w-[50%] h-full
                                   bg-gradient-to-r from-transparent via-white/10 to-transparent
                                   transform -skew-x-12
                                   transition-all duration-700 ease-out
                                   group-hover:left-[150%] group-hover:duration-500">
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100} animationClass="animate-zoomIn">
        <section className="py-16 text-center bg-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Become a part of the fastest-growing sports community in Odisha. Connect with fellow players, participate in events, and help grow the sport.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
              <Link href="/contact-us">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200} animationClass="animate-scaleFadeInUp">
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
              <div className="md:col-span-7 lg:col-span-8 text-center md:text-left"> 
                <AnimatedSection animationClass="animate-slideInFromRight">
                  <h2 className="text-3xl font-bold text-foreground">Learn About Pickleball</h2>
                  <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                    New to the sport? Discover the history, rules, and why pickleball is captivating players of all ages and skill levels.
                  </p>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="hover:bg-primary/10 hover:text-primary text-foreground">
                      <Link href="/about-pickleball">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              <div className="md:col-span-5 lg:col-span-4 mt-8 md:mt-0">
                <AnimatedSection animationClass="animate-slideInFromLeft">
                  <Image
                    src="/pickleball-ball.webp"
                    alt="Pickleball ball"
                    data-ai-hint="pickleball ball"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-xl mx-auto object-cover aspect-square"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </AnimatedSection>
  );
}
