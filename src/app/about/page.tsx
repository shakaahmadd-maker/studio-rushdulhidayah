import Image from 'next/image';
import { Globe, GraduationCap, Heart, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(img => img.id === "hero-1");

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            About Quran-e-institute
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Bringing authentic Quranic education to every corner of the globe since 2009.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-primary font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help students of all ages and backgrounds learn to read, understand, recite, memorize, and truly connect with the Holy Quran. We believe that technology can bridge distances, making quality Islamic education accessible to everyone, regardless of their location.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2009, we have been dedicated to providing a flexible, personalized, and supportive learning environment. Our one-on-one classes ensure that each student receives the focused attention they need to thrive.
            </p>
            <h2 className="font-headline text-3xl text-primary font-bold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where every Muslim has the opportunity to develop a deep and personal relationship with the Quran. Quran-e-institute aims to be the most trusted and effective online platform for Quranic studies, fostering a global community of learners united by their love for the divine word.
            </p>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
             {aboutImage && <Image
              src={aboutImage.imageUrl}
              alt="Quran education"
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center font-headline text-3xl text-primary font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Qualified Tutors</h3>
              <p className="text-muted-foreground text-sm">We carefully select certified and experienced male and female tutors to provide the highest quality education.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-muted-foreground text-sm">Every student is unique. We tailor our teaching methods and pace to suit individual learning styles and goals.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Student-Centric</h3>
              <p className="text-muted-foreground text-sm">Your comfort and progress are our priority. Choose your preferred tutor (male or female) and class schedule.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Global Accessibility</h3>
              <p className="text-muted-foreground text-sm">We leverage technology to make Quranic learning accessible to students across the globe, from the US to the UAE.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
