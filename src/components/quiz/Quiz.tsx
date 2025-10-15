
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

export interface Answer {
  questionId: number;
  questionText: string;
  options: any[]; // Storing full options to redisplay
  selectedAnswer: string;
  correctAnswer: string;
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
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        options: currentQuestion.options,
        selectedAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
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
          score: score, // The score state is already updated
          totalQuestions: questions.length,
          timestamp: new Date(),
          answers: answers,
        };
        const attemptsCol = collection(firestore, `users/${user.uid}/quizAttempts`);
        addDocumentNonBlocking(attemptsCol, attempt);
      }
      setQuizOver(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  
  const handleFinalAnswer = (isCorrect: boolean, answer: string) => {
    const updatedScore = isCorrect ? score + 1 : score;
    const currentQuestion = questions[currentQuestionIndex];
    const finalAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        options: currentQuestion.options,
        selectedAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
      },
    ];
  
    if (user && firestore) {
      const attempt = {
        userId: user.uid,
        topic: topic,
        language: language,
        score: updatedScore,
        totalQuestions: questions.length,
        timestamp: new Date(),
        answers: finalAnswers,
      };
      const attemptsCol = collection(firestore, `users/${user.uid}/quizAttempts`);
      addDocumentNonBlocking(attemptsCol, attempt);
    }
    setScore(updatedScore);
    setAnswers(finalAnswers);
    setQuizOver(true);
  };


  if (quizOver) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        onRestart={onGoHome} // Restarting now goes home to re-select topic
        onGoHome={onGoHome}
      />
    );
  }
  
  if (questions.length === 0) {
    return (
      <div className="text-center">
        <p>No questions available for this topic yet. Please select another one.</p>
        <Button onClick={onGoHome} className="mt-4">
            <Home className="mr-2 h-4 w-4" />
            Home
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
        <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={onGoHome}>
                <Home className="mr-2 h-4 w-4" />
                Home
            </Button>
        </div>
        <QuizQuestion
          key={questions[currentQuestionIndex].id}
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onFinalAnswer={handleFinalAnswer}
          language={language}
        />
    </div>
  );
}
