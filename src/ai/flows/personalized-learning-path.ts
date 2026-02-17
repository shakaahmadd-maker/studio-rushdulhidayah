'use server';
/**
 * @fileOverview This flow provides a personalized learning path for students based on their progress and comprehension.
 *
 * - personalizedLearningPath - A function that generates a tailored learning path and practice questions.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  currentCourse: z.string().describe('The name of the course the student is currently enrolled in.'),
  completedModules: z.array(z.string()).describe('A list of modules or topics the student has already completed.'),
  quizScores: z.array(
    z.object({
      moduleName: z.string().describe('The name of the module the quiz was for.'),
      score: z.number().describe('The score obtained by the student in the quiz (0-100).'),
    })
  ).describe('An array of quiz scores for different modules.'),
  areasOfDifficulty: z.array(z.string()).describe('Specific topics or concepts the student is struggling with.'),
  learningGoal: z.string().describe('The student\u2019s specific learning objective or goal.'),
  availableCourseMaterials: z.array(z.string()).describe('A comprehensive list of all available course materials, modules, and quizzes for the current course.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  suggestedNextSteps: z.array(z.string()).describe('A prioritized list of recommended actions, modules, or materials the student should focus on next.'),
  practiceQuestions: z.array(
    z.object({
      question: z.string().describe('The practice question.'),
      options: z.array(z.string()).optional().describe('Optional: A list of multiple-choice options for the question.'),
      correctAnswer: z.string().describe('The correct answer to the practice question.'),
    })
  ).describe('An array of practice questions tailored to the student\u2019s needs.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizedLearningPath(input: PersonalizedLearningPathInput): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const personalizedLearningPathPrompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI-powered learning assistant designed to provide personalized learning paths and practice questions for students of Quran-e-Institute.

Analyze the student's current progress, comprehension, and learning goals to suggest optimal course materials and generate relevant practice questions. Ensure your suggestions align with the available course materials.

Student Name: {{{studentName}}}
Currently Studying: {{{currentCourse}}}
Completed Modules: {{{completedModules}}}
Quiz Scores: {{{JSON.stringify quizScores}}}
Areas of Difficulty: {{{areasOfDifficulty}}}
Learning Goal: {{{learningGoal}}}

Available Course Materials (for reference to suggest relevant next steps): {{{availableCourseMaterials}}}

Based on this information, provide:
1. A prioritized list of suggested next steps, recommending specific modules, topics for review, or materials from the 'availableCourseMaterials' that would best help the student achieve their learning goal and address their areas of difficulty.
2. Three to five practice questions related to the suggested next steps or the student's areas of difficulty. If applicable, provide multiple-choice options; otherwise, provide the expected answer for open-ended questions.
`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await personalizedLearningPathPrompt(input);
    return output!;
  }
);
