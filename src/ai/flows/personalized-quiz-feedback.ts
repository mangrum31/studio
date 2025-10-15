'use server';

/**
 * @fileOverview Generates personalized feedback for quiz answers, including hints and explanations.
 *
 * - generateQuizFeedback - A function that generates feedback for a quiz answer.
 * - QuizFeedbackInput - The input type for the generateQuizFeedback function.
 * - QuizFeedbackOutput - The return type for the generateQuizFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizFeedbackInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  answer: z.string().describe('The user\u2019s answer to the question.'),
  isCorrect: z.boolean().describe('Whether the user\u2019s answer is correct.'),
  correctAnswer: z.string().optional().describe('The correct answer to the question, if the user was incorrect.'),
  topic: z.string().describe('The topic of the quiz question.'),
});
export type QuizFeedbackInput = z.infer<typeof QuizFeedbackInputSchema>;

const QuizFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Personalized feedback on the answer, including hints and explanations.'),
});
export type QuizFeedbackOutput = z.infer<typeof QuizFeedbackOutputSchema>;

export async function generateQuizFeedback(input: QuizFeedbackInput): Promise<QuizFeedbackOutput> {
  return quizFeedbackFlow(input);
}

const quizFeedbackPrompt = ai.definePrompt({
  name: 'quizFeedbackPrompt',
  input: {schema: QuizFeedbackInputSchema},
  output: {schema: QuizFeedbackOutputSchema},
  prompt: `You are a friendly and helpful tutor for Bangladeshi children. Provide feedback on the student's answer to the following quiz question. Tailor your explanations to be easily understood by children.

Question: {{{question}}}
Answer: {{{answer}}}
Correct: {{{isCorrect}}}
Topic: {{{topic}}}
{{#if correctAnswer}}
Correct Answer: {{{correctAnswer}}}
{{/if}}

If the answer is correct, provide positive reinforcement and a simple explanation of why the answer is correct. If the answer is incorrect, provide a hint and explanation to guide them towards the correct answer. Use culturally relevant examples when possible.
`,
});

const quizFeedbackFlow = ai.defineFlow(
  {
    name: 'quizFeedbackFlow',
    inputSchema: QuizFeedbackInputSchema,
    outputSchema: QuizFeedbackOutputSchema,
  },
  async input => {
    const {output} = await quizFeedbackPrompt(input);
    return output!;
  }
);
