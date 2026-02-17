import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CoursesPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Our Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Structured learning programs for every step of your Quranic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
            return (
              <Card key={course.id} className="bg-card flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {courseImage && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={courseImage.imageUrl}
                      alt={course.title}
                      fill
                      className="object-cover"
                      data-ai-hint={courseImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
                  <CardDescription>{course.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      For {course.targetAudience}
                    </li>
                     <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      Pacing: {course.duration}
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
