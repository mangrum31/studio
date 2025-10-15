
"use client";

import { useState } from "react";
import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";
import { getAIfeedback } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Feedback } from "./Feedback";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean, answer: string) => void;
  onNext: () => void;
  onFinalAnswer: (isCorrect: boolean, answer: string) => void;
  language: 'en' | 'bn';
}

export function QuizQuestion({ question, questionNumber, totalQuestions, onAnswer, onNext, onFinalAnswer, language }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isLastQuestion = questionNumber === totalQuestions;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    setSubmitted(true);
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    
    if (isLastQuestion) {
        // We call onFinalAnswer directly, no AI feedback here to speed up quiz completion
        onFinalAnswer(correct, selectedOption);
    } else {
        onAnswer(correct, selectedOption);
        setIsLoading(true);
        const aiFeedback = await getAIfeedback({
          question: question.question,
          answer: selectedOption,
          isCorrect: correct,
          correctAnswer: question.correctAnswer,
          topic: question.topic,
        });
        setFeedback(aiFeedback.feedback);
        setIsLoading(false);
    }
  };

  const handleNextClick = () => {
      if(isLastQuestion && submitted) {
          // The onFinalAnswer would have already been called at this point
          // No need to call onNext() as the parent will transition to QuizResults
          return;
      }
      onNext();
  }

  const getOptionClassName = (optionText: string) => {
    if (!submitted) return "";
    if (optionText === question.correctAnswer) {
        return "text-green-400 font-bold";
    }
    if (optionText === selectedOption && !isCorrect) {
        return "text-red-400";
    }
    return "text-muted-foreground";
  }
  
  const questionLabel = language === 'en' ? `Question ${questionNumber} of ${totalQuestions}` : `প্রশ্ন ${questionNumber} এর ${totalQuestions}`;
  const nextButtonLabel = language === 'en' 
    ? (isLastQuestion ? "Finish Quiz" : "Next Question")
    : (isLastQuestion ? "কুইজ শেষ করুন" : "পরবর্তী প্রশ্ন");
  const submitButtonLabel = language === 'en' ? "Submit Answer" : "উত্তর জমা দিন";


  return (
    <Card className="w-full shadow-lg transition-all duration-300 bg-card border-border">
      <CardHeader>
        <CardDescription>
          {questionLabel}
        </CardDescription>
        <CardTitle className="font-headline text-2xl text-card-foreground">{question.question}</CardTitle>
        <Progress value={(questionNumber / totalQuestions) * 100} className="w-full mt-2" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup
            value={selectedOption || ""}
            onValueChange={setSelectedOption}
            disabled={submitted}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {question.options.map((option) => (
              <Label
                key={option.text}
                htmlFor={option.text}
                className={cn("flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border transition-all duration-300 ease-in-out cursor-pointer hover:bg-secondary/60 hover:shadow-lg hover:-translate-y-1", 
                    selectedOption === option.text && !submitted && "border-primary ring-2 ring-primary shadow-lg",
                    submitted && option.text === question.correctAnswer && "border-green-500 bg-green-500/20",
                    submitted && option.text === selectedOption && !isCorrect && "border-destructive bg-destructive/10"
                )}
              >
                <RadioGroupItem value={option.text} id={option.text} className="sr-only" />
                {option.imageUrl ? (
                    <div className="relative w-40 h-40 mb-2">
                        <Image 
                            src={option.imageUrl}
                            alt={option.text}
                            fill
                            className="object-cover rounded-md"
                            data-ai-hint={option.imageHint}
                        />
                    </div>
                ): null}
                <span className={cn("text-base", getOptionClassName(option.text))}>{option.text}</span>
              </Label>
            ))}
          </RadioGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch space-y-4">
        {submitted ? (
          <>
            <Feedback feedback={feedback} isCorrect={isCorrect} isLoading={isLoading} />
            <Button onClick={handleNextClick} className="w-full">
                {nextButtonLabel} <ArrowRight className="ml-2"/>
            </Button>
          </>
        ) : (
          <Button onClick={handleSubmit} disabled={!selectedOption} className="w-full">
            {submitButtonLabel}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
