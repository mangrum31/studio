"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  feedback: string | null;
  isCorrect: boolean | null;
  isLoading: boolean;
}

export function Feedback({ feedback, isCorrect, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (!feedback) return null;

  return (
    <Alert
      className={cn(
        isCorrect ? "bg-green-500/10 border-green-500/50 text-green-500" : "bg-destructive/10 border-destructive/50"
      )}
    >
      {isCorrect ? (
        <PartyPopper className={cn("h-5 w-5", "text-green-500")} />
      ) : (
        <Lightbulb className={cn("h-5 w-5", "text-destructive")} />
      )}
      <AlertTitle className={cn("font-headline text-lg", isCorrect ? 'text-green-400' : 'text-destructive')}>
        {isCorrect ? "That's Correct!" : "Not Quite..."}
      </AlertTitle>
      <AlertDescription className="text-foreground/80">{feedback}</AlertDescription>
    </Alert>
  );
}
