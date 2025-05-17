
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper } from 'lucide-react';
import { placeholderNews, type NewsArticle } from '@/lib/constants';

export default function HomePage() {
  const newsArticles: NewsArticle[] = placeholderNews;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn">
          <div className="absolute inset-0">
            <Image
              src="/player.jpg"
              alt="Pickleball action background"
              fill
              style={{ objectFit: 'cover' }}
              className="" 
              priority
            />
          </div>
        </AnimatedSection>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection animationClass="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                PLAY. CONNECT. EVOLVE.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={400} animationClass="animate-fadeInUp">
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200 animate-pulse">
                  <Link href="/contact-us">
                    Join OPA <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <Link href="/events">
                    Upcoming Events
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Latest News Section - Full Width Background */}
      <AnimatedSection animationClass="animate-fadeIn" delay={300}>
        <section className="py-16 bg-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedSection animationClass="animate-fadeInDown">
                <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
              </AnimatedSection>
              <AnimatedSection animationClass="animate-fadeInUp" delay={100}>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with the latest happenings in the Odisha pickleball community.
                </p>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <AnimatedSection key={article.id} delay={index * 150 + 200} animationClass="animate-zoomIn">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card overflow-hidden group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        data-ai-hint={article.imageHint}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{article.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent text-foreground w-full">
                        <Link href={article.href}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
