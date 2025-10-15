'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function TopNav() {
  const pathname = usePathname();
  const authorImage = placeholderImages.placeholderImages.find(p => p.id === "author-image");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            {authorImage && (
              <Link href="/author">
                <div className="relative w-10 h-10 rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-primary">
                  <Image
                    src={authorImage.imageUrl}
                    alt={authorImage.description}
                    width={40}
                    height={40}
                    className="object-cover"
                    data-ai-hint={authorImage.imageHint}
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
