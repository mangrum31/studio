
"use client";

import { useState } from "react";
import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { Button } from "../ui/button";
import { Home } from "lucide-react";

interface Answer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

interface QuizProps {
    questions: QuizQuestionType[];
    language: 'en' | 'bn';
    onGoHome: () => void;
}

export function Quiz({ questions, language, onGoHome }: QuizProps) {
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
        questionId: questions[currentQuestionIndex].id,
        answer,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
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
        totalQuestions={questions.length}
        onRestart={handleRestart}
        onGoHome={onGoHome}
        language={language}
      />
    );
  }

  return (
    <div className="space-y-8">
        <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={onGoHome}>
                <Home className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Home' : 'হোম'}
            </Button>
        </div>
        <QuizQuestion
          key={questions[currentQuestionIndex].id}
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
          language={language}
        />
    </div>
  );
}
