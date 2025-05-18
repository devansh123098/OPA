
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderBoardMembers, type BoardMember } from '@/lib/constants';
import { UserCircle } from 'lucide-react';

export default function BoardMembersPage() {
  const boardMembers: BoardMember[] = placeholderBoardMembers;

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <AnimatedSection animationClass="animate-fadeIn">
          <Image
            src="/board.jpeg" 
            alt="Odisha Pickleball Association Board"
            data-ai-hint="pickleball action"
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
                  Board Members
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
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
        </div>
      </section>

      <PageWrapper>
        {boardMembers.length === 0 ? (
          <AnimatedSection delay={100} animationClass="animate-fadeInUp">
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3">
                <UserCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Detailed profiles of our board members will be available here soon.
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
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 100 + 100} animationClass="animate-fadeInUp">
                <Card className="h-full flex flex-col overflow-hidden shadow-lg bg-card group relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      data-ai-hint={member.imageHint}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  {member.bio && (
                    <CardContent className="text-sm text-muted-foreground text-center">
                      <p>{member.bio}</p>
                    </CardContent>
                  )}
                   {/* Shine Element */}
                  <div className="absolute top-0 left-[-150%] w-[50%] h-full 
                                  bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                  transform -skew-x-12 
                                  transition-all duration-700 ease-out
                                  group-hover:left-[150%] group-hover:duration-500"></div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
        
        <AnimatedSection delay={boardMembers.length > 0 ? (boardMembers.length * 100 + 200) : 200} animationClass="animate-fadeInUp">
           <div className="mt-12 p-6 bg-secondary/20 rounded-lg">
              <h2 className="text-2xl font-semibold text-center text-foreground mb-4">More Information Coming Soon</h2>
              <p className="text-center text-muted-foreground">
                  We will be adding more board member profiles, including executive, technical, and advisory roles, as well as filter options.
              </p>
          </div>
        </AnimatedSection>
      </PageWrapper>
    </>
  );
}
