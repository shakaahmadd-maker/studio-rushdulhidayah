'use server';
/**
 * @fileOverview This file implements a Genkit flow for summarizing Quranic chapters.
 *
 * - quranChapterSummarizer - A function that generates a summary and key themes for a given Quranic chapter.
 * - QuranChapterSummarizerInput - The input type for the quranChapterSummarizer function.
 * - QuranChapterSummarizerOutput - The return type for the quranChapterSummarizer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const QuranChapterSummarizerInputSchema = z.object({
  surahNumber: z.number().describe('The chapter number of the Surah.'),
  surahText: z.string().describe('The full text of the Quranic Surah to be summarized.'),
});
export type QuranChapterSummarizerInput = z.infer<typeof QuranChapterSummarizerInputSchema>;

const QuranChapterSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the Surah, highlighting its main message.'),
  keyThemes: z.array(z.string()).describe('A list of key themes or topics covered in the Surah.'),
});
export type QuranChapterSummarizerOutput = z.infer<typeof QuranChapterSummarizerOutputSchema>;

export async function quranChapterSummarizer(input: QuranChapterSummarizerInput): Promise<QuranChapterSummarizerOutput> {
  return quranChapterSummarizerFlow(input);
}

const quranChapterSummaryPrompt = ai.definePrompt({
  name: 'quranChapterSummaryPrompt',
  input: { schema: QuranChapterSummarizerInputSchema },
  output: { schema: QuranChapterSummarizerOutputSchema },
  prompt: `You are an expert in Islamic studies and Quranic exegesis.

Given the text of Surah (Chapter) Number {{{surahNumber}}} from the Holy Quran, provide a concise summary of its core message and identify its key themes.

Surah Text:
{{{surahText}}}

Ensure your response is structured to provide a 'summary' and a 'keyThemes' array, as described in the output schema.`, 
});

const quranChapterSummarizerFlow = ai.defineFlow(
  {
    name: 'quranChapterSummarizerFlow',
    inputSchema: QuranChapterSummarizerInputSchema,
    outputSchema: QuranChapterSummarizerOutputSchema,
  },
  async (input) => {
    const { output } = await quranChapterSummaryPrompt(input);
    return output!;
  }
);
