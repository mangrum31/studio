'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { History } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
             <Link href="/history" passHref>
                <Button variant={pathname === '/history' ? 'default' : 'ghost'}>
                    <History className="mr-2 h-4 w-4" />
                    History
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
