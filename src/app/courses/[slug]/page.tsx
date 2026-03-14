import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, ArrowRight } from "lucide-react";
import { BackButton } from "@/components/BackButton";

type CoursePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [];
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }
  
  const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BackButton />
        <div className="grid lg:grid-cols-3 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-8">
                {courseImage && (
                    <Image
                    src={courseImage.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    data-ai-hint={courseImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <h1 className="font-headline text-4xl font-bold text-white">
                        {course.title}
                    </h1>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-headline text-2xl font-bold text-primary">Course Description</h2>
              <p>{course.description}</p>

              <h2 className="font-headline text-2xl font-bold text-primary mt-8">What You&apos;ll Learn</h2>
              <ul className="space-y-2 mt-4">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <Card className="sticky top-24 bg-secondary/30">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Audience</p>
                    <p className="text-sm text-muted-foreground">{course.targetAudience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                   <div>
                    <p className="text-sm font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full mt-4">
                  <Link href="/register">Register Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
