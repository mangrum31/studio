
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Repeat, Home } from "lucide-react";
import { Confetti } from "./Confetti";

interface Props {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onGoHome: () => void;
}

export function QuizResults({ score, totalQuestions, onRestart, onGoHome }: Props) {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isSuccess = percentage >= 70;

  const title = 'Quiz Completed!';
  const description = "You've reached the end of the quiz.";
  const scoreLabel = 'Your Score:';
  const successMessage = "Excellent work! You have a great knowledge of Bangladesh.";
  const encouragementMessage = "Good effort! Keep learning and try again to improve your score.";
  const tryAgainLabel = 'Try Again';
  const goHomeLabel = 'Go Home';

  return (
    <Card className="w-full text-center shadow-lg relative overflow-hidden bg-card border-border">
      {isSuccess && <Confetti />}
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          <Award className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl mt-4 text-card-foreground">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg text-card-foreground">{scoreLabel}</p>
        <p className="font-bold text-5xl text-primary font-headline">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-headline text-green-500">
            ({percentage}%)
        </p>
        <p className="text-muted-foreground pt-4">
          {isSuccess ? successMessage : encouragementMessage}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button onClick={onRestart} className="w-full">
          <Repeat className="mr-2" /> {tryAgainLabel}
        </Button>
        <Button onClick={onGoHome} variant="outline" className="w-full">
          <Home className="mr-2" /> {goHomeLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
