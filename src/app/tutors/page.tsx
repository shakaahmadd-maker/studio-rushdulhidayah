
'use client';

import Image from 'next/image';
import { tutors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiftOfKnowledgeCTA } from '@/components/GiftOfKnowledgeCTA';
import { useState, useEffect } from 'react';

export default function TutorsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl uppercase">
            Our Expert <span className="text-accent">Tutors</span>
          </h1>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Meet our team of qualified and dedicated Quran teachers from around the world, providing personalized guidance for students of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => {
            const tutorImage = PlaceHolderImages.find((img) => img.id === tutor.imageId);
            return (
              <Card key={tutor.id} className="bg-card flex flex-col overflow-hidden text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-slate-100 group">
                <CardHeader className="items-center pb-4 pt-8">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100">
                    {tutorImage ? (
                      <Image
                        src={tutorImage.imageUrl}
                        alt={tutor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="128px"
                        priority={index < 4}
                        unoptimized={false}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                        <User className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="font-headline text-xl pt-6 group-hover:text-primary transition-colors">{tutor.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2 pt-1 text-accent font-bold uppercase text-[10px] tracking-widest">
                    <GraduationCap className="h-3 w-3" /> {tutor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed px-4 text-center">
                    {tutor.bio}
                  </p>
                  <div className="flex justify-center gap-2 mt-6">
                    <Badge variant="secondary" className="flex items-center gap-1 bg-primary/5 text-primary border-none py-1 px-3">
                      <User className="h-3 w-3" /> {tutor.gender}
                    </Badge>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full rounded-xl border-primary/20 hover:bg-primary hover:text-white transition-all">
                    <Link href="/register">Book a Free Trial</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <GiftOfKnowledgeCTA />
    </div>
  );
}
