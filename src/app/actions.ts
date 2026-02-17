"use server";

import { personalizedLearningPath } from "@/ai/flows/personalized-learning-path";
import type { PersonalizedLearningPathInput } from "@/ai/flows/personalized-learning-path";

export async function generateLearningPath(input: PersonalizedLearningPathInput) {
    try {
        const result = await personalizedLearningPath(input);
        return result;
    } catch (error) {
        console.error("Error generating learning path:", error);
        return null;
    }
}
