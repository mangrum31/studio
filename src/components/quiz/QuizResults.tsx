"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Repeat } from "lucide-react";
import { Confetti } from "./Confetti";

interface Props {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, onRestart }: Props) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isSuccess = percentage >= 70;

  return (
    <Card className="w-full text-center shadow-lg relative overflow-hidden">
      {isSuccess && <Confetti />}
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          <Award className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl mt-4">Quiz Completed!</CardTitle>
        <CardDescription>You've reached the end of the quiz.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg">Your Score:</p>
        <p className="font-bold text-5xl text-primary font-headline">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-headline" style={{color: "hsl(var(--accent))"}}>
            ({percentage}%)
        </p>
        <p className="text-muted-foreground pt-4">
          {isSuccess ? "Excellent work! You have a great knowledge of Bangladesh." : "Good effort! Keep learning and try again to improve your score."}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onRestart} className="w-full">
          <Repeat className="mr-2" /> Try Again
        </Button>
      </CardFooter>
    </Card>
  );
}
