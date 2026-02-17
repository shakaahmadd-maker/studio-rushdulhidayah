import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, GraduationCap, Users, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courses, testimonials, features } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === "hero-1");

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary uppercase">
                Online Quran Learning Institute
              </h1>
               <p className="text-3xl font-headline text-right text-muted-foreground" lang="ar">
                خَيْرُكُمْ مَن تَعَلَّمَ القُرْآنَ وعَلَّمَهُ
              </p>
              <p className="text-lg text-muted-foreground md:text-xl italic">
                &quot;The best of you are those who learn the Quran and teach it&quot;
              </p>
              <p className="text-muted-foreground">
                With our Qualified teachers for 3 days of free trial classes, let&apos;s study how to understand the Holy Quran Online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild size="lg">
                  <Link href="/courses">START A COURSE</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/register">FREE 3 DAYS TRIAL</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto md:w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Why Choose Quran-e-institute?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a flexible, personalized, and authentic learning experience for students of all ages and levels.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From foundational basics to advanced studies, we have a course for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 3).map((course) => {
                 const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
                 return (
                  <Card key={course.id} className="overflow-hidden flex flex-col">
                    {courseImage && (
                      <div className="relative h-48 w-full">
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
                      <CardTitle className="font-headline">{course.title}</CardTitle>
                      <CardDescription>{course.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-primary" />For {course.targetAudience}</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="text-primary p-0">
                        <Link href={`/courses/${course.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                 );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-accent text-accent-foreground hover:bg-accent/10">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">What Our Students Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const studentImage = PlaceHolderImages.find(img => img.id === testimonial.imageId);
                return (
                  <Card key={index} className="bg-card flex flex-col justify-between">
                    <CardContent className="pt-6">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4">
                      {studentImage && (
                         <Image
                          src={studentImage.imageUrl}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                          data-ai-hint={studentImage.imageHint}
                        />
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Begin Your Journey Today</h2>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Take the first step towards a deeper connection with the Quran. Register for a free trial class and experience our teaching firsthand.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/register">Sign Up for a Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
