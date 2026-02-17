import { notFound } from "next/navigation";
import { quranChapters } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

type SurahPageProps = {
  params: {
    surah: string;
  };
};

// This page is a placeholder for reading a full surah.
// In a real application, you would fetch the verses for the given surah number from an API.

export async function generateStaticParams() {
    return quranChapters.map((chapter) => ({
      surah: chapter.number.toString(),
    }));
  }

export default function SurahPage({ params }: SurahPageProps) {
  const surahNumber = parseInt(params.surah, 10);
  const chapter = quranChapters.find((c) => c.number === surahNumber);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center bg-secondary/30">
              <p className="text-sm text-muted-foreground">Surah {chapter.number}</p>
              <CardTitle className="font-headline text-4xl text-primary">{chapter.name}</CardTitle>
              <CardDescription className="text-xl">({chapter.englishName})</CardDescription>
              <p className="text-sm text-muted-foreground mt-2">{chapter.verses} Verses</p>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center justify-center h-64">
                <BookOpen className="w-16 h-16 text-primary/50 mb-4" />
                <h3 className="text-2xl font-semibold text-muted-foreground">Full Surah Text Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  The functionality to read the full text of each surah is under development. Please check back later.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
