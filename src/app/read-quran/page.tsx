'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { quranChapters } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Hash } from 'lucide-react';
import { GiftOfKnowledgeCTA } from '@/components/GiftOfKnowledgeCTA';

export default function ReadQuranPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = quranChapters.filter(
    (chapter) =>
      chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.englishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Read The Holy Quran
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Browse and read all 114 chapters of the Quran.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search for a Surah (e.g., Al-Fatihah, The Opening)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-lg p-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((chapter) => (
            <Link href={`/read-quran/${chapter.number}`} key={chapter.number} passHref>
              <Card className="bg-card hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer h-full">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="font-bold text-lg">{chapter.number}</span>
                    </div>
                    <div>
                      <h2 className="font-headline text-xl font-semibold text-primary">{chapter.name}</h2>
                      <p className="text-sm text-muted-foreground">{chapter.englishName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{chapter.verses} verses</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
         {filteredChapters.length === 0 && (
          <div className="text-center col-span-full py-12">
            <p className="text-muted-foreground text-lg">No Surahs found matching your search.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <GiftOfKnowledgeCTA />
    </div>
  );
}
