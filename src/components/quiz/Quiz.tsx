
"use client";

import { useState } from "react";
import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { Button } from "../ui/button";
import { Home } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection } from "firebase/firestore";
import type { Topic } from "@/app/page";

interface Answer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

interface QuizProps {
    questions: QuizQuestionType[];
    language: 'en' | 'bn';
    topic: Topic;
    onGoHome: () => void;
}

export function Quiz({ questions, language, onGoHome, topic }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizOver, setQuizOver] = useState(false);
  const { user } = useAuth();
  const firestore = useFirestore();

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
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      if (user && firestore) {
        const attempt = {
          userId: user.uid,
          topic: topic,
          language: language,
          score: score + (answers.find(a => a.questionId === questions[currentQuestionIndex].id)?.isCorrect ? 1 : 0),
          totalQuestions: questions.length,
          timestamp: new Date(),
        };
        const attemptsCol = collection(firestore, `users/${user.uid}/quizAttempts`);
        addDocumentNonBlocking(attemptsCol, attempt);
      }
      setQuizOver(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setQuizOver(false);
  };

  if (quizOver) {
    // Final score calculation needs to happen before rendering results
    const finalScore = score;

    return (
      <QuizResults
        score={finalScore}
        totalQuestions={questions.length}
        onRestart={handleRestart}
        onGoHome={onGoHome}
        language={language}
      />
    );
  }
  
  if (questions.length === 0) {
    return (
      <div className="text-center">
        <p>No questions available for this topic yet. Please select another one.</p>
        <Button onClick={onGoHome} className="mt-4">
            <Home className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Home' : 'হোম'}
        </Button>
      </div>
    )
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
