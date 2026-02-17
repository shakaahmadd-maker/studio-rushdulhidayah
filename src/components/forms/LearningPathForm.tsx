"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { courses } from "@/lib/data";
import { generateLearningPath } from "@/app/actions";
import type { PersonalizedLearningPathOutput } from "@/ai/flows/personalized-learning-path";
import { Loader2, ArrowRight, BookCheck, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Name is required." }),
  currentCourse: z.string({ required_error: "Please select your current course." }),
  completedModules: z.string().min(3, { message: "Mention at least one completed topic." }),
  quizScore: z.coerce.number().min(0).max(100),
  areasOfDifficulty: z.string().min(3, { message: "Mention at least one area of difficulty." }),
  learningGoal: z.string().min(10, { message: "Please describe your learning goal." }),
});

export function LearningPathForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedLearningPathOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "Aisha",
      currentCourse: "quran-reading",
      completedModules: "Makharij (pronunciation), Basic Tajweed Rules",
      quizScore: 75,
      areasOfDifficulty: "Differentiating between similar sounding letters (e.g., tha, sin, sad)",
      learningGoal: "I want to improve my recitation fluency and confidence before Ramadan.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const availableCourseMaterials = courses.map(c => c.title);

      const response = await generateLearningPath({
        ...values,
        quizScores: [{ moduleName: "General", score: values.quizScore }],
        completedModules: values.completedModules.split(',').map(s => s.trim()),
        areasOfDifficulty: values.areasOfDifficulty.split(',').map(s => s.trim()),
        availableCourseMaterials,
      });

      if (response) {
        setResult(response);
      } else {
        throw new Error("Failed to get a response from the AI.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not generate a learning path. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl><Input placeholder="Enter your name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentCourse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select your course" /></SelectTrigger></FormControl>
                    <SelectContent>
                      {courses.map(course => (
                        <SelectItem key={course.id} value={course.slug}>{course.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="completedModules"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Completed Topics</FormLabel>
                <FormControl><Input placeholder="e.g., Makharij, Noon Sakin rules" {...field} /></FormControl>
                <FormDescription>Separate topics with a comma.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quizScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Quiz Score (out of 100)</FormLabel>
                <FormControl><Input type="number" placeholder="e.g., 85" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areasOfDifficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Areas of Difficulty</FormLabel>
                <FormControl><Textarea placeholder="e.g., Madd rules, differentiating letters" {...field} /></FormControl>
                <FormDescription>What are you finding challenging?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="learningGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Learning Goal</FormLabel>
                <FormControl><Textarea placeholder="e.g., I want to read Surah Al-Baqarah fluently" {...field} /></FormControl>
                <FormDescription>What do you want to achieve?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate My Path"
            )}
          </Button>
        </form>
      </Form>

      {result && (
        <div className="mt-12">
          <Separator />
          <div className="my-8 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Your Personalized Path</h2>
            <p className="text-muted-foreground mt-2">Here are the next steps recommended by your AI assistant.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
             <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                    Suggested Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.suggestedNextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <BookCheck className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    Practice Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {result.practiceQuestions.map((q, index) => (
                      <div key={index}>
                        <p className="font-semibold">{index + 1}. {q.question}</p>
                        {q.options && (
                          <ul className="mt-2 space-y-1 text-sm text-muted-foreground pl-5 list-disc">
                            {q.options.map((opt, i) => <li key={i}>{opt}</li>)}
                          </ul>
                        )}
                        <p className="mt-2 text-sm">
                          <span className="font-semibold text-primary">Answer: </span> 
                          <span className="text-muted-foreground">{q.correctAnswer}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      )}
    </div>
  );
}
