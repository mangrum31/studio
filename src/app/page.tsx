
"use client";

import Image from 'next/image';
import { Flower2 } from 'lucide-react';
import { Quiz } from '@/components/quiz/Quiz';
import placeholderImages from '@/lib/placeholder-images.json';
import { useState } from 'react';
import { quizQuestions, QuizQuestion as QuizQuestionType } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Language = 'en' | 'bn';

export default function Home() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "shapla-flower");
  const [language, setLanguage] = useState<Language>('en');
  const [questions, setQuestions] = useState<QuizQuestionType[]>(quizQuestions.en);
  const [title, setTitle] = useState('Bangladesh Kids Quiz');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setQuestions(quizQuestions[lang]);
    setTitle(lang === 'en' ? 'Bangladesh Kids Quiz' : 'বাংলাদেশ কিডস কুইজ');
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-2xl">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-8 text-center sm:text-left">
          <div className='flex items-center justify-center'>
            {headerImage && (
              <Image 
                src={headerImage.imageUrl}
                alt={headerImage.description}
                width={60}
                height={60}
                className="mr-4 rounded-full"
                data-ai-hint={headerImage.imageHint}
              />
            )}
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
              {title}
            </h1>
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
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
        <Quiz questions={questions} language={language}/>
      </div>
    </main>
  );
}
