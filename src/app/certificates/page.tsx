import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const certificateImage = PlaceHolderImages.find(img => img.id === 'certificate-1');

export default function CertificatesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Course Certificates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Upon successful completion of any course, students are awarded a certificate to acknowledge their achievement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-secondary/30">
              <CardTitle className="font-headline text-2xl">Sample Certificate of Completion</CardTitle>
              <CardDescription>This is an example of the certificate you will receive.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-8">
                {certificateImage && (
                     <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={certificateImage.imageUrl}
                            alt="Sample Certificate"
                            fill
                            className="object-contain"
                            data-ai-hint={certificateImage.imageHint}
                        />
                    </div>
                )}
            </CardContent>
          </Card>
           <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Ready to earn yours?</p>
              <Button asChild size="lg">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
