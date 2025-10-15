"use server";

import { generateQuizFeedback, type QuizFeedbackInput } from "@/ai/flows/personalized-quiz-feedback";

export async function getAIfeedback(input: QuizFeedbackInput) {
  try {
    const feedback = await generateQuizFeedback(input);
    return feedback;
  } catch (error) {
    console.error("Error generating AI feedback:", error);
    return {
      feedback: "Sorry, I couldn't generate feedback right now. Please try again!",
    };
  }
}
