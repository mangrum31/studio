'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function AuthorPage() {
  const authorImage = placeholderImages.placeholderImages.find(p => p.id === 'author-image');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">About the Author</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          {authorImage && (
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-primary">
              <Image
                src={authorImage.imageUrl}
                alt={authorImage.description}
                fill
                className="object-cover"
                data-ai-hint={authorImage.imageHint}
              />
            </div>
          )}
          <div className="text-center space-y-2">
            <p className="text-lg text-muted-foreground">
              This application was created by a passionate developer dedicated to creating fun and educational experiences.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
