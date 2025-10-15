
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Repeat } from "lucide-react";
import { Confetti } from "./Confetti";

interface Props {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  language: 'en' | 'bn';
}

export function QuizResults({ score, totalQuestions, onRestart, language }: Props) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isSuccess = percentage >= 70;

  const title = language === 'en' ? 'Quiz Completed!' : 'কুইজ সম্পন্ন!';
  const description = language === 'en' ? "You've reached the end of the quiz." : 'আপনি কুইজের শেষে পৌঁছেছেন।';
  const scoreLabel = language === 'en' ? 'Your Score:' : 'আপনার স্কোর:';
  const successMessage = language === 'en' ? "Excellent work! You have a great knowledge of Bangladesh." : "চমৎকার কাজ! বাংলাদেশ সম্পর্কে আপনার দারুণ জ্ঞান রয়েছে।";
  const encouragementMessage = language === 'en' ? "Good effort! Keep learning and try again to improve your score." : "ভালো প্রচেষ্টা! শিখতে থাকুন এবং আপনার স্কোর উন্নত করতে আবার চেষ্টা করুন।";
  const tryAgainLabel = language === 'en' ? 'Try Again' : 'আবার চেষ্টা করুন';

  return (
    <Card className="w-full text-center shadow-lg relative overflow-hidden">
      {isSuccess && <Confetti />}
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          <Award className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg">{scoreLabel}</p>
        <p className="font-bold text-5xl text-primary font-headline">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-headline" style={{color: "hsl(var(--accent))"}}>
            ({percentage}%)
        </p>
        <p className="text-muted-foreground pt-4">
          {isSuccess ? successMessage : encouragementMessage}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onRestart} className="w-full">
          <Repeat className="mr-2" /> {tryAgainLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
