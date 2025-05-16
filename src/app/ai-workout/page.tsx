import PageWrapper from '@/components/layout/page-wrapper';
import { WorkoutForm } from './components/workout-form';
import AnimatedSection from '@/components/animated-section';

export default function AiWorkoutPage() {
  return (
    <PageWrapper>
      <AnimatedSection animationClass="animate-fadeInUp">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            AI Pickleball Workout Generator
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a personalized pickleball practice routine powered by AI. Improve your game, one drill at a time!
          </p>
        </div>
      </AnimatedSection>
      
      <WorkoutForm />
    </PageWrapper>
  );
}
