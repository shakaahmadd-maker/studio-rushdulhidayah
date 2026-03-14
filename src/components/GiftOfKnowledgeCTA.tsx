import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function GiftOfKnowledgeCTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto bg-primary rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black uppercase leading-tight">
              Give Your Child the <br/><span className="text-accent">Gift of Knowledge</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <p className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto font-medium">
            Book a Free 3 Days Trial for our Islamic Studies course and see how much your child enjoys learning.
          </p>
          
          <div className="pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-10 md:px-16 py-6 md:py-8 rounded-2xl text-lg md:text-xl uppercase tracking-widest h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-black/20">
              <Link href="/register">Register for Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
