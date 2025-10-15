'use client';

import { useCollection, useAuth, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Trophy } from 'lucide-react';
import { quizTopics } from '@/lib/quiz-data';

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

  const WavyText = ({ text }: { text: string }) => {
    return (
      <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary wavy-text">
        {text.split('').map((char, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties}>
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </h1>
    );
  };

  if (isLoading || isUserLoading) {
    return (
      <div className="w-full max-w-4xl space-y-4">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-1/4" />
              </CardContent>
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {attempts.map(attempt => {
          const attemptDate = new Date(attempt.timestamp.seconds * 1000);
          const topicName = quizTopics[attempt.topic as keyof typeof quizTopics]?.[attempt.language] || attempt.topic;
          
          return (
            <Card key={attempt.id} className="bg-card/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-primary" />
                  <span>{topicName}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-2xl font-bold text-primary">
                  {attempt.score} / {attempt.totalQuestions}
                </p>
                <p className="text-sm text-muted-foreground">
                  {attemptDate.toLocaleDateString(attempt.language === 'bn' ? 'bn-BD' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
