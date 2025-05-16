
import Image from 'next/image';
import PageWrapper from '@/components/layout/page-wrapper';
import { WorkoutForm } from './components/workout-form';
import AnimatedSection from '@/components/animated-section';

export default function AiWorkoutPage() {
  return (
    <PageWrapper>
      <div className="mb-12 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
          <AnimatedSection animationClass="animate-fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              AI Pickleball Workout Generator
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Get a personalized pickleball practice routine powered by AI. Improve your game, one drill at a time!
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
      
      <WorkoutForm />
    </PageWrapper>
  );
}
