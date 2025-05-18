
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake } from 'lucide-react'; // Or another suitable icon

export default function PartnersPage() {
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
                Information about our esteemed partners and sponsors will be featured here soon. We are grateful for their support in promoting pickleball in Odisha.
              </p>
              {/* Placeholder for partner logos or details */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
                {/* Example placeholder items - replace with actual partner data later */}
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-center items-center p-4 bg-secondary/30 rounded-lg aspect-video">
                    <p className="text-muted-foreground text-sm">Partner Logo {item}</p>
                  </div>
                ))}
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
