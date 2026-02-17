import Image from 'next/image';
import { tutors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, User, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TutorsPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Our Expert Tutors
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Meet our team of qualified and dedicated Quran teachers from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tutors.map((tutor) => {
            const tutorImage = PlaceHolderImages.find((img) => img.id === tutor.imageId);
            return (
              <Card key={tutor.id} className="bg-card flex flex-col overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center pb-4">
                  {tutorImage && (
                    <div className="relative h-32 w-32">
                      <Image
                        src={tutorImage.imageUrl}
                        alt={tutor.name}
                        fill
                        className="rounded-full object-cover border-4 border-primary/20"
                        data-ai-hint={tutorImage.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="font-headline text-2xl pt-4">{tutor.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2 pt-1 text-primary">
                    <GraduationCap className="h-4 w-4" /> {tutor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed px-4">
                    {tutor.bio}
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {tutor.gender}
                    </Badge>
                     <Badge variant="secondary" className="flex items-center gap-1">
                      <Globe className="h-3 w-3" /> {tutor.country}
                    </Badge>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/register">Book a Trial</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
