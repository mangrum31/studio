
"use client";

import Image from 'next/image';
import { Quiz } from '@/components/quiz/Quiz';
import placeholderImages from '@/lib/placeholder-images.json';
import { useState, useMemo, useEffect } from 'react';
import { quizQuestions, quizTopics } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { useAuth } from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';

type Language = 'en' | 'bn';
export type Topic = 'all' | 'alphabet' | 'national_symbols' | 'geography' | 'literature_arts' | 'history' | 'culture_lifestyle' | 'sports';

export default function Home() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "shapla-flower");
  const [language, setLanguage] = useState<Language>('en');
  const [selectedTopic, setSelectedTopic] = useState<Topic>('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    if (auth && !auth.currentUser) {
      initiateAnonymousSignIn(auth);
    }
  }, [auth]);


  const title = useMemo(() => language === 'en' ? 'Quiz Box' : 'কুইজ বক্স', [language]);
  const topics = useMemo(() => Object.keys(quizTopics), []);

  const questions = useMemo(() => {
    const questionsByLang = quizQuestions[language];
    if (selectedTopic === 'all') {
      return Object.values(questionsByLang).flat().sort(() => Math.random() - 0.5);
    }
    return (questionsByLang[selectedTopic as Exclude<Topic, 'all'>] || []).sort(() => Math.random() - 0.5);
  }, [language, selectedTopic]);
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleStartQuiz = () => {
    if (questions.length > 0) {
      setQuizStarted(true);
    }
  };

  const handleGoHome = () => {
    setQuizStarted(false);
  }

  if (quizStarted) {
    return (
      <div className="w-full max-w-4xl">
         <Quiz 
            questions={questions} 
            language={language} 
            topic={selectedTopic}
            onGoHome={handleGoHome} 
          />
      </div>
    )
  }

  const WavyText = ({ text }: { text: string }) => {
    return (
      <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary wavy-text">
        {text.split('').map((char, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    );
  };

  return (
    <div className="w-full max-w-2xl">
      <header className="flex flex-col items-center text-center mb-8">
        <WavyText text={title} />
        <div className="flex space-x-2 mt-6">
          <Button 
            onClick={() => handleLanguageChange('en')} 
            variant={language === 'en' ? 'default' : 'outline'}
            className={cn("transition-all", language === 'en' && "ring-2 ring-primary")}
          >
            English
          </Button>
          <Button 
            onClick={() => handleLanguageChange('bn')} 
            variant={language === 'bn' ? 'default' : 'outline'}
            className={cn("transition-all", language === 'bn' && "ring-2 ring-primary")}
          >
            বাংলা
          </Button>
        </div>
      </header>
      
      <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-headline text-card-foreground">{language === 'en' ? 'Choose a Topic' : 'একটি বিষয় নির্বাচন করুন'}</h2>
          <div className="w-full max-w-xs">
              <Label htmlFor="topic-select" className="sr-only">
                  {language === 'en' ? 'Topic' : 'বিষয়'}
              </Label>
              <Select value={selectedTopic} onValueChange={(value) => setSelectedTopic(value as Topic)}>
                  <SelectTrigger id="topic-select" className="w-full">
                      <SelectValue placeholder={language === 'en' ? "Select a topic" : "বিষয় নির্বাচন"} />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="all">{language === 'en' ? 'All Topics' : 'সব বিষয়'}</SelectItem>
                      {topics.map(topicKey => (
                          <SelectItem key={topicKey} value={topicKey}>
                              {quizTopics[topicKey as keyof typeof quizTopics][language]}
                          </SelectItem>
                      ))}
                  </SelectContent>
              </Select>
          </div>
          <Button onClick={handleStartQuiz} size="lg" className="w-full max-w-xs">
              {language === 'en' ? 'Start Quiz' : 'কুইজ শুরু করুন'}
          </Button>
      </div>

    </div>
  );
}
