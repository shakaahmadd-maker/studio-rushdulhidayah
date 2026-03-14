import Image from 'next/image';
import { tutors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiftOfKnowledgeCTA } from '@/components/GiftOfKnowledgeCTA';

export default function TutorsPage() {
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
                  {tutorImage && (
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                      <Image
                        src={tutorImage.imageUrl}
                        alt={tutor.name}
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-md relative z-10"
                        sizes="128px"
                        priority={index < 4}
                        data-ai-hint={tutorImage.imageHint}
                      />
                    </div>
                  )}
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
