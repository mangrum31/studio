import Image from 'next/image';
import { Flower2 } from 'lucide-react';
import { Quiz } from '@/components/quiz/Quiz';
import placeholderImages from '@/lib/placeholder-images.json';

export default function Home() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "shapla-flower");

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-2xl">
        <header className="flex items-center justify-center mb-8 text-center">
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
            Bangladesh Kids Quiz
          </h1>
        </header>
        <Quiz />
      </div>
    </main>
  );
}
