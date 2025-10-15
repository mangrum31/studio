'use client';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 come-and-back" prefetch={false}>
      <div className="relative w-10 h-10">
        <div className="shining-star w-full h-full bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
          Quiz
        </div>
      </div>
      <span className="text-xl font-semibold text-foreground hidden sm:inline-block">
        Quiz Box
      </span>
    </Link>
  );
}
