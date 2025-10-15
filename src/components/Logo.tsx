'use client';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 orbital-animation" />
        <div className="shining-star w-full h-full bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
          Quiz
        </div>
      </div>
      <span className="text-xl font-semibold text-foreground hidden sm:inline-block">
        BD Quiz
      </span>
    </Link>
  );
}
