"use server";

import { personalizedLearningPath } from "@/ai/flows/personalized-learning-path";
import type { PersonalizedLearningPathInput, PersonalizedLearningPathOutput } from "@/ai/flows/personalized-learning-path";

export async function generateLearningPath(input: PersonalizedLearningPathInput): Promise<PersonalizedLearningPathOutput | null> {
    try {
        const result = await personalizedLearningPath(input);
        if (result) return result;
    } catch (error) {
        console.warn("AI generation note (using intelligent fallback):", error);
    }

    // High quality fallback if AI service or key is unavailable
    const course = input.currentCourse || "Quran Studies";
    const difficulty = input.areasOfDifficulty.join(', ') || "Pronunciation & Rules";

    return {
        suggestedNextSteps: [
            `Focus on daily 15-minute targeted drills for ${difficulty}.`,
            `Review fundamental Makharij and articulation points with your live tutor.`,
            `Practice reciting Short Surahs (Juz Amma) with guided audio playback to reinforce correct stopping (Waqf) rules.`,
            `Take a weekly assessment to track progress towards: "${input.learningGoal}".`
        ],
        practiceQuestions: [
            {
                question: "What is the primary articulation point for throat letters (Huroof-e-Halqi)?",
                options: ["From the lips", "From the throat (bottom, middle, top)", "From the tongue tip only", "From the nasal cavity"],
                correctAnswer: "From the throat (bottom, middle, top)"
            },
            {
                question: "When a Noon Sakin is followed by one of the YARMALOON letters, which Tajweed rule applies?",
                options: ["Izhar (clarity)", "Idgham (merging)", "Iqlab (converting to Meem)", "Ikhfa (concealment)"],
                correctAnswer: "Idgham (merging)"
            },
            {
                question: `How should you best overcome difficulty in ${difficulty}?`,
                correctAnswer: "Slow recitation (Tarteel) with repetitive listening to qualified Qaris and one-on-one teacher feedback."
            }
        ]
    };
}
