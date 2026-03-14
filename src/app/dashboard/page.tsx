import { LearningPathForm } from "@/components/forms/LearningPathForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { BackButton } from "@/components/BackButton";

export default function DashboardPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Student Dashboard
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Your personal space for tracking progress and getting AI-powered guidance.
            </p>
          </div>

          <Card className="bg-card shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">Personalized Learning Path Generator</CardTitle>
                  <CardDescription>
                    Our AI assistant will analyze your progress and suggest the best next steps for you. Fill in your details to get a customized learning plan.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <LearningPathForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
