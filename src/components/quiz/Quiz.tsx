"use client";

import { useState } from "react";
import { quizQuestions, type QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";

interface Answer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizOver, setQuizOver] = useState(false);

  const handleAnswer = (isCorrect: boolean, answer: string) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => [
      ...prev,
      {
        questionId: quizQuestions[currentQuestionIndex].id,
        answer,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizOver(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setQuizOver(false);
  };

  if (quizOver) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="space-y-8">
        <QuizQuestion
          key={quizQuestions[currentQuestionIndex].id}
          question={quizQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
    </div>
  );
}
