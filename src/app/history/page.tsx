
'use client';

import { useCollection, useAuth, useFirestore, useMemoFirebase, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Trophy, Trash2, Eye, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { quizTopics } from '@/lib/quiz-data';
import { Answer } from '@/components/quiz/Quiz';
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { getAIfeedback } from '@/app/actions';

interface QuizAttempt {
  id: string;
  topic: string;
  language: 'en' | 'bn';
  score: number;
  totalQuestions: number;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  answers: Answer[];
}

interface FeedbackState {
  [questionId: number]: {
    isLoading: boolean;
    feedback: string | null;
  };
}

export default function HistoryPage() {
  const { user, isUserLoading } = useAuth();
  const firestore = useFirestore();

  const attemptsQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/quizAttempts`),
      orderBy('timestamp', 'desc')
    );
  }, [user, firestore]);

  const { data: attempts, isLoading } = useCollection<QuizAttempt>(attemptsQuery);
  const [selectedAttempt, setSelectedAttempt] = useState<QuizAttempt | null>(null);
  const [feedbackState, setFeedbackState] = useState<FeedbackState>({});

  const handleDelete = (attemptId: string) => {
    if (!user || !firestore) return;
    const docRef = doc(firestore, `users/${user.uid}/quizAttempts`, attemptId);
    deleteDocumentNonBlocking(docRef);
  };
  
  const handleGenerateFeedback = async (answer: Answer) => {
    setFeedbackState(prev => ({ ...prev, [answer.questionId]: { isLoading: true, feedback: null } }));
    
    const feedbackResponse = await getAIfeedback({
      question: answer.questionText,
      answer: answer.selectedAnswer,
      isCorrect: answer.isCorrect,
      correctAnswer: answer.correctAnswer,
      topic: selectedAttempt?.topic || 'general',
    });

    setFeedbackState(prev => ({ ...prev, [answer.questionId]: { isLoading: false, feedback: feedbackResponse.feedback } }));
  };

  const WavyText = ({ text }: { text: string }) => (
    <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary wavy-text">
      {text.split('').map((char, index) => (
        <span key={index} style={{ '--i': index } as React.CSSProperties}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );

  if (isLoading || isUserLoading) {
    return (
      <div className="w-full max-w-4xl space-y-4">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
              <CardContent><Skeleton className="h-8 w-1/4" /></CardContent>
              <CardFooter><Skeleton className="h-10 w-full" /></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center">
        <WavyText text="Please sign in to see your history" />
      </div>
    );
  }

  if (!attempts || attempts.length === 0) {
    return (
      <div className="text-center">
        <WavyText text="No Quiz History Found" />
        <p className="mt-4 text-muted-foreground">You haven't completed any quizzes yet. Go take one!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <header className="text-center mb-8">
        <WavyText text="Quiz History" />
      </header>
      <Dialog onOpenChange={() => setFeedbackState({})}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {attempts.map(attempt => {
            const attemptDate = new Date(attempt.timestamp.seconds * 1000);
            const topicName = quizTopics[attempt.topic as keyof typeof quizTopics]?.[attempt.language] || attempt.topic;
            
            return (
              <Card key={attempt.id} className="bg-card/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="text-primary" />
                    <span>{topicName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  <p className="text-2xl font-bold text-primary">
                    {attempt.score} / {attempt.totalQuestions}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {attemptDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedAttempt(attempt)}>
                      <Eye className="mr-2 h-4 w-4" /> View
                    </Button>
                  </DialogTrigger>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete this quiz attempt from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(attempt.id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        {selectedAttempt && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Quiz Details</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-6">
                {selectedAttempt.answers.map((answer, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className={cn("flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center", answer.isCorrect ? "bg-green-500" : "bg-destructive")}>
                        {answer.isCorrect ? <CheckCircle className="w-4 h-4 text-white" /> : <XCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-semibold">{index + 1}. {answer.questionText}</p>
                        <p className={cn("text-sm", answer.isCorrect ? "text-green-500" : "text-destructive")}>
                          Your answer: {answer.selectedAnswer}
                        </p>
                        {!answer.isCorrect && (
                          <p className="text-sm text-green-500">
                            Correct answer: {answer.correctAnswer}
                          </p>
                        )}

                        {!answer.isCorrect && (
                          <div className='mt-2'>
                            {feedbackState[answer.questionId]?.isLoading ? (
                              <Skeleton className="h-10 w-full" />
                            ) : feedbackState[answer.questionId]?.feedback ? (
                              <p className="text-sm bg-accent/50 p-2 rounded-md border border-accent">
                                {feedbackState[answer.questionId]?.feedback}
                              </p>
                            ) : (
                              <Button size="sm" variant="outline" onClick={() => handleGenerateFeedback(answer)}>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Get Explanation
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {index < selectedAttempt.answers.length - 1 && <Separator className="my-6" />}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
