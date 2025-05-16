// src/ai/flows/workout-generator.ts
'use server';

/**
 * @fileOverview Generates personalized pickleball workout routines based on user skill level and goals.
 *
 * - generateWorkout - A function that generates a pickleball workout routine.
 * - WorkoutGeneratorInput - The input type for the generateWorkout function.
 * - WorkoutGeneratorOutput - The return type for the generateWorkout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkoutGeneratorInputSchema = z.object({
  skillLevel: z
    .enum(['beginner', 'intermediate', 'advanced'])
    .describe('The skill level of the player.'),
  goals: z
    .string()
    .describe(
      'The goals of the player, such as improving serves, dinking, or court coverage.'
    ),
  preferredWorkoutDuration: z
    .number()
    .describe('Preferred workout duration in minutes. Must be a number.'),
});
export type WorkoutGeneratorInput = z.infer<typeof WorkoutGeneratorInputSchema>;

const WorkoutGeneratorOutputSchema = z.object({
  workoutRoutine: z.string().describe('The generated workout routine.'),
});
export type WorkoutGeneratorOutput = z.infer<typeof WorkoutGeneratorOutputSchema>;

export async function generateWorkout(input: WorkoutGeneratorInput): Promise<WorkoutGeneratorOutput> {
  return workoutGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'workoutGeneratorPrompt',
  input: {schema: WorkoutGeneratorInputSchema},
  output: {schema: WorkoutGeneratorOutputSchema},
  prompt: `You are an expert pickleball coach. Generate a personalized pickleball workout routine for a player with the following skill level and goals. The workout routine should include drills to improve specific skills.

Skill Level: {{{skillLevel}}}
Goals: {{{goals}}}
Workout Duration: {{{preferredWorkoutDuration}}} minutes.

Workout Routine:`,
});

const workoutGeneratorFlow = ai.defineFlow(
  {
    name: 'workoutGeneratorFlow',
    inputSchema: WorkoutGeneratorInputSchema,
    outputSchema: WorkoutGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
