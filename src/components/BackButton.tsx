'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function BackButton({ className, variant = 'dark' }: BackButtonProps) {
  const router = useRouter();
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => router.back()}
      className={cn(
        "mb-4 -ml-2 flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-widest h-auto py-2 px-3 rounded-full transition-all group",
        variant === 'light' 
          ? "text-white/80 hover:text-white hover:bg-white/10" 
          : "text-slate-500 hover:text-primary hover:bg-primary/5",
        className
      )}
    >
      <ChevronLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
      Back
    </Button>
  );
}
