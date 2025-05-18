
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateWorkout, type WorkoutGeneratorInput, type WorkoutGeneratorOutput } from '@/ai/flows/workout-generator';
import AnimatedSection from '@/components/animated-section';

const formSchema = z.object({
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Please select your skill level.',
  }),
  goals: z.string().min(10, {
    message: 'Please describe your goals in at least 10 characters.',
  }).max(200, {
    message: 'Goals description must not exceed 200 characters.'
  }),
  preferredWorkoutDuration: z.coerce.number().min(15, {
    message: 'Workout duration must be at least 15 minutes.',
  }).max(180, {
    message: 'Workout duration cannot exceed 180 minutes.',
  }),
});

export function WorkoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutGeneratorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillLevel: undefined,
      goals: '',
      preferredWorkoutDuration: 60,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setWorkoutPlan(null);
    try {
      const result = await generateWorkout(values as WorkoutGeneratorInput);
      setWorkoutPlan(result);
      toast({
        title: "Workout Generated!",
        description: "Your personalized pickleball workout is ready.",
      });
    } catch (error) {
      console.error("Error generating workout:", error);
      toast({
        title: "Error",
        description: "Failed to generate workout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      <AnimatedSection animationClass="animate-fadeInUp">
        <Card className="shadow-xl group relative overflow-hidden hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Wand2 className="h-7 w-7 mr-3 text-primary" />
              Create Your Personalized Workout
            </CardTitle>
            <CardDescription>
              Tell us about your skill level and goals, and our AI coach will generate a tailored pickleball workout plan for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="skillLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your skill level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Improve serves, better dinking, faster court coverage..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormDescription>
                        What do you want to achieve? (min. 10 characters)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredWorkoutDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Workout Duration (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 60" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter duration between 15 and 180 minutes.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Workout
                    </>
                  )}
                </Button>
              </form>
            </Form>
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

      {workoutPlan && (
        <AnimatedSection animationClass="animate-fadeInUp" delay={200}>
          <Card className="shadow-xl mt-10 group relative overflow-hidden hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Your Custom Workout Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-muted-foreground whitespace-pre-wrap bg-secondary/30 p-4 rounded-md">
                {workoutPlan.workoutRoutine}
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
      )}
    </div>
  );
}
