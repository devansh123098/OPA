
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import Image from 'next/image';

export default function PartnersPage() {
  const partnerLogos = [
    { src: '/sp1.png', alt: 'Partner Logo 1', hint: 'sponsor logo' },
    { src: '/sp2.png', alt: 'Partner Logo 2', hint: 'company logo' },
    { src: '/sp3.png', alt: 'Partner Logo 3', hint: 'organization logo' },
  ];

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden bg-black">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Our Partners
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Collaborating with organizations to grow the sport of pickleball in Odisha.
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
              <Handshake className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl text-foreground">Valued Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                We are grateful for the support of our esteemed partners and sponsors in promoting pickleball in Odisha. Their collaboration is vital to our mission of fostering a vibrant pickleball community.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center">
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="flex justify-center items-center p-4 bg-secondary/20 rounded-lg aspect-[3/2] group relative overflow-hidden hover:shadow-lg transition-all duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      data-ai-hint={logo.hint}
                      width={200}
                      height={120}
                      className="object-contain max-h-full max-w-full"
                    />
                    <div
                      className="absolute top-0 left-[-150%] w-[50%] h-full
                                 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                 transform -skew-x-12
                                 transition-all duration-700 ease-out
                                 group-hover:left-[150%] group-hover:duration-500">
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-lg mt-10">
                Interested in partnering with the Odisha Pickleball Association? We offer various sponsorship opportunities and welcome collaborations that align with our vision of promoting health, community, and the joy of pickleball. Contact us to learn more about how we can work together.
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
      </PageWrapper>
    </>
  );
}
